"use client";

import CloseArcadeButton from "@/components/CloseArcadeButton";
import Image from "next/image";
import {
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import CockpitLeaderboard, {
  type CockpitLeaderboardScore,
  formatGameTime,
} from "./CockpitLeaderboard";
import {
  type AircraftId,
  type CockpitQuestion,
  aircraftById,
  cockpitQuestions,
  shuffle,
} from "./quizData";

type GameState = "intro" | "countdown" | "playing" | "results";
type CountdownValue = 3 | 2 | 1 | "GO";

type GameResult = {
  score: number;
  durationMs: number;
};

export default function CockpitChallengeClient() {
  const [gameState, setGameState] = useState<GameState>("intro");
  const [pilotName, setPilotName] = useState("");
  const [nameError, setNameError] = useState("");
  const [questions, setQuestions] =
    useState<CockpitQuestion[]>(cockpitQuestions);
  const [selections, setSelections] = useState<
    Partial<Record<AircraftId, AircraftId>>
  >({});
  const [elapsedMs, setElapsedMs] = useState(0);
  const [countdownValue, setCountdownValue] =
    useState<CountdownValue>(3);
  const [result, setResult] = useState<GameResult | null>(null);
  const [scores, setScores] = useState<CockpitLeaderboardScore[]>([]);
  const [leaderboardLoading, setLeaderboardLoading] = useState(true);
  const [leaderboardError, setLeaderboardError] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [latestEntryId, setLatestEntryId] = useState<number | null>(null);

  const startedAtRef = useRef(0);
  const resultRef = useRef<HTMLDivElement | null>(null);
  const questionRefs = useRef<
    Partial<Record<AircraftId, HTMLElement | null>>
  >({});
  const autoScrollTimeoutRef = useRef<number | null>(null);

  const loadLeaderboard = useCallback(async () => {
    try {
      const response = await fetch("/api/cockpit-leaderboard", {
        cache: "no-store",
      });
      const data = (await response.json()) as {
        scores?: CockpitLeaderboardScore[];
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to load the leaderboard.");
      }

      setScores(data.scores ?? []);
      setLeaderboardError("");
    } catch (error) {
      setLeaderboardError(
        error instanceof Error
          ? error.message
          : "Unable to load the leaderboard."
      );
    } finally {
      setLeaderboardLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void loadLeaderboard();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [loadLeaderboard]);

  useEffect(() => {
    if (gameState !== "playing") {
      return;
    }

    const timer = window.setInterval(() => {
      setElapsedMs(Date.now() - startedAtRef.current);
    }, 100);

    return () => window.clearInterval(timer);
  }, [gameState]);

  useEffect(() => {
    if (gameState !== "countdown") {
      return;
    }

    const sequence: CountdownValue[] = [2, 1, "GO"];
    let sequenceIndex = 0;

    const timer = window.setInterval(() => {
      const nextValue = sequence[sequenceIndex];

      if (nextValue !== undefined) {
        setCountdownValue(nextValue);
        sequenceIndex += 1;
        return;
      }

      window.clearInterval(timer);
      startedAtRef.current = Date.now();
      setElapsedMs(0);
      setGameState("playing");
    }, 800);

    return () => window.clearInterval(timer);
  }, [gameState]);

  useEffect(
    () => () => {
      if (autoScrollTimeoutRef.current !== null) {
        window.clearTimeout(autoScrollTimeoutRef.current);
      }
    },
    []
  );

  const beginGame = useCallback(() => {
    const shuffledQuestions = shuffle(cockpitQuestions).map((question) => ({
      ...question,
      choices: shuffle(question.choices),
    }));

    setQuestions(shuffledQuestions);
    setSelections({});
    setResult(null);
    setElapsedMs(0);
    setCountdownValue(3);
    setNameError("");
    setLeaderboardError("");
    setLatestEntryId(null);
    setGameState("countdown");

    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, []);

  const startFromIntro = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (pilotName.trim().length < 2) {
      setNameError("Enter at least two characters to start the clock.");
      return;
    }

    setPilotName(pilotName.trim().replace(/\s+/g, " ").slice(0, 20));
    beginGame();
  };

  const answeredCount = Object.keys(selections).length;
  const remainingCount = questions.length - answeredCount;

  const selectAircraft = (
    questionIndex: number,
    questionId: AircraftId,
    choiceId: AircraftId
  ) => {
    const nextSelections = {
      ...selections,
      [questionId]: choiceId,
    };

    setSelections(nextSelections);

    const nextQuestion = questions
      .slice(questionIndex + 1)
      .find((question) => !nextSelections[question.aircraftId]);

    if (!nextQuestion) {
      return;
    }

    if (autoScrollTimeoutRef.current !== null) {
      window.clearTimeout(autoScrollTimeoutRef.current);
    }

    autoScrollTimeoutRef.current = window.setTimeout(() => {
      questionRefs.current[nextQuestion.aircraftId]?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
      autoScrollTimeoutRef.current = null;
    }, 120);
  };

  const submitAnswers = async () => {
    if (remainingCount > 0 || gameState !== "playing" || isSaving) {
      return;
    }

    const durationMs = Math.max(1000, Date.now() - startedAtRef.current);
    const score = questions.reduce(
      (total, question) =>
        total + (selections[question.aircraftId] === question.aircraftId ? 1 : 0),
      0
    );

    setElapsedMs(durationMs);
    setResult({ score, durationMs });
    setGameState("results");
    setIsSaving(true);

    window.setTimeout(() => {
      resultRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);

    try {
      const response = await fetch("/api/cockpit-leaderboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: pilotName,
          score,
          durationMs,
        }),
      });
      const data = (await response.json()) as {
        scores?: CockpitLeaderboardScore[];
        entryId?: number;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to save your score.");
      }

      setScores(data.scores ?? []);
      setLatestEntryId(data.entryId ?? null);
      setLeaderboardError("");
      setLeaderboardLoading(false);
    } catch (error) {
      setLeaderboardError(
        error instanceof Error ? error.message : "Unable to save your score."
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <main className="min-h-screen bg-black px-3 pb-20 pt-28 text-white sm:px-5 md:px-8 md:pb-28 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-start justify-between gap-4">
          <CloseArcadeButton href="/arcade" label="All Games" />
          <div className="max-w-3xl text-right">
            <p className="text-[10px] font-black uppercase tracking-[0.38em] text-[#d7b46a] sm:text-xs">
              Team 77 Arcade
            </p>
            <h1 className="mt-3 text-3xl font-black uppercase leading-[0.9] tracking-[-0.045em] sm:text-5xl md:text-7xl">
              Cockpit Challenge
            </h1>
          </div>
        </div>

        {gameState === "intro" && (
          <section className="mt-10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#080808] md:mt-14">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[330px] overflow-hidden border-b border-white/10 lg:min-h-[640px] lg:border-b-0 lg:border-r">
                <Image
                  src="/images/arcade/cockpit-challenge/cockpits/zu-ira.jpg"
                  alt="An unidentified aircraft cockpit"
                  fill
                  priority
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/15" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
                  <p className="max-w-xl text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] sm:text-5xl">
                    Seven cockpits.
                    <span className="block text-[#d7b46a]">Know the fleet?</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
                <p className="text-[10px] font-black uppercase tracking-[0.32em] text-[#d7b46a]">
                  Pilot briefing
                </p>
                <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.035em] sm:text-4xl">
                  Name first. Clock second.
                </h2>
                <p className="mt-5 text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
                  Enter your name, then match each cockpit to one of three real
                  aircraft stickers. Your score and completion time are saved
                  when you submit all seven answers.
                </p>

                <div className="mt-7 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 text-center">
                  {[
                    ["07", "Cockpits"],
                    ["03", "Choices"],
                    ["∞", "Time"],
                  ].map(([value, label]) => (
                    <div key={label} className="bg-black px-2 py-4">
                      <p className="text-2xl font-black text-[#d7b46a]">
                        {value}
                      </p>
                      <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.16em] text-white/35 sm:text-[9px]">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                <form onSubmit={startFromIntro} className="mt-8">
                  <label
                    htmlFor="cockpit-pilot-name"
                    className="text-[10px] font-black uppercase tracking-[0.25em] text-white/45"
                  >
                    Your name
                  </label>
                  <input
                    id="cockpit-pilot-name"
                    type="text"
                    value={pilotName}
                    onChange={(event) => {
                      setPilotName(event.target.value);
                      setNameError("");
                    }}
                    maxLength={20}
                    autoComplete="nickname"
                    placeholder="Enter your name"
                    className="mt-3 min-h-14 w-full rounded-xl border border-white/15 bg-black px-5 text-base text-white outline-none transition placeholder:text-white/25 focus:border-[#d7b46a]"
                  />
                  {nameError && (
                    <p className="mt-3 text-sm text-red-300">{nameError}</p>
                  )}
                  <button
                    type="submit"
                    className="mt-4 min-h-14 w-full rounded-xl bg-[#d7b46a] px-6 text-sm font-black uppercase tracking-[0.2em] text-black transition hover:bg-[#e6c780] active:scale-[0.99]"
                  >
                    Start the clock
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}

        {gameState === "countdown" && (
          <section
            aria-live="assertive"
            aria-atomic="true"
            className="relative mt-10 flex min-h-[65vh] items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#080808] px-5 text-center md:mt-14"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,180,106,0.18),transparent_48%)]" />
            <div
              key={countdownValue}
              className="relative animate-pulse py-16"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.36em] text-[#d7b46a] sm:text-xs">
                Get ready, {pilotName}
              </p>
              <p
                className={`mt-5 font-black uppercase leading-none tracking-[-0.08em] ${
                  countdownValue === "GO"
                    ? "text-[clamp(7rem,32vw,16rem)] text-[#d7b46a]"
                    : "text-[clamp(10rem,45vw,24rem)] text-white"
                }`}
              >
                {countdownValue}
              </p>
              <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.28em] text-white/40">
                The clock starts when the cockpit cards appear
              </p>
            </div>
          </section>
        )}

        {(gameState === "playing" || gameState === "results") && (
          <>
            <div
              ref={resultRef}
              className="sticky top-[76px] z-30 mt-8 scroll-mt-28 rounded-2xl border border-white/10 bg-black/90 px-4 py-4 shadow-2xl backdrop-blur-xl sm:px-6 md:top-[88px]"
            >
              <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 sm:gap-8">
                <div className="min-w-0">
                  <p className="truncate text-xs font-black uppercase tracking-[0.18em]">
                    {pilotName}
                  </p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/35">
                    {gameState === "results"
                      ? "Flight complete"
                      : `${answeredCount} of ${questions.length} matched`}
                  </p>
                </div>

                {result && (
                  <div className="text-right">
                    <p className="text-xl font-black tabular-nums text-[#d7b46a] sm:text-2xl">
                      {result.score}/7
                    </p>
                    <p className="text-[8px] uppercase tracking-[0.18em] text-white/30">
                      Correct
                    </p>
                  </div>
                )}

                <div className="text-right">
                  <p className="text-xl font-black tabular-nums sm:text-2xl">
                    {formatGameTime(elapsedMs)}
                  </p>
                  <p className="text-[8px] uppercase tracking-[0.18em] text-white/30">
                    Time
                  </p>
                </div>
              </div>
            </div>

            {gameState === "results" && result && (
              <section className="mt-5 rounded-[1.75rem] border border-[#d7b46a]/30 bg-[#d7b46a]/10 p-6 text-center sm:p-9">
                <p className="text-[10px] font-black uppercase tracking-[0.32em] text-[#d7b46a]">
                  {result.score === 7
                    ? "Perfect identification"
                    : "Challenge complete"}
                </p>
                <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.045em] sm:text-6xl">
                  {result.score} of 7 correct
                </h2>
                <p className="mt-3 text-sm text-white/55 sm:text-base">
                  Finished in {formatGameTime(result.durationMs)}. Your answers
                  are marked below.
                </p>
                <button
                  type="button"
                  onClick={beginGame}
                  className="mt-7 min-h-12 rounded-full bg-white px-7 text-xs font-black uppercase tracking-[0.2em] text-black transition hover:bg-[#d7b46a]"
                >
                  Play again
                </button>
                <p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-white/35">
                    {isSaving
                      ? "Saving to leaderboard…"
                      : leaderboardError
                        ? "Score could not be saved"
                        : "Score submitted"}
                </p>
              </section>
            )}

            <section className="mt-6 space-y-5 md:mt-8 md:space-y-7">
              {questions.map((question, questionIndex) => {
                const correctAircraft = aircraftById[question.aircraftId];
                const selectedId = selections[question.aircraftId];

                return (
                  <article
                    key={question.aircraftId}
                    ref={(element) => {
                      questionRefs.current[question.aircraftId] = element;
                    }}
                    className="scroll-mt-44 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#080808]"
                  >
                    <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                      <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10 lg:min-h-[430px] lg:border-b-0 lg:border-r">
                        <Image
                          src={question.cockpit}
                          alt={
                            gameState === "results"
                              ? `${correctAircraft.name} cockpit`
                              : `Unidentified aircraft cockpit ${questionIndex + 1}`
                          }
                          fill
                          sizes="(min-width: 1024px) 48vw, 100vw"
                          className="object-cover"
                        />
                        <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/65 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] backdrop-blur-sm">
                          Cockpit {String(questionIndex + 1).padStart(2, "0")}
                        </div>
                      </div>

                      <div className="p-4 sm:p-6 lg:p-8">
                        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/35">
                          Choose the aircraft
                        </p>

                        <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                          {question.choices.map((choiceId) => {
                            const choice = aircraftById[choiceId];
                            const isSelected = selectedId === choiceId;
                            const isCorrect = choiceId === question.aircraftId;
                            const showCorrect =
                              gameState === "results" && isCorrect;
                            const showWrong =
                              gameState === "results" && isSelected && !isCorrect;

                            return (
                              <button
                                key={choiceId}
                                type="button"
                                onClick={() =>
                                  selectAircraft(
                                    questionIndex,
                                    question.aircraftId,
                                    choiceId
                                  )
                                }
                                disabled={gameState === "results"}
                                aria-pressed={isSelected}
                                className={`relative min-h-[220px] overflow-hidden rounded-2xl border p-3 text-left transition sm:min-h-[235px] lg:min-h-[190px] xl:min-h-[235px] ${
                                  showCorrect
                                    ? "border-emerald-400 bg-emerald-400/10"
                                    : showWrong
                                      ? "border-red-400 bg-red-400/10"
                                      : isSelected
                                        ? "border-[#d7b46a] bg-[#d7b46a]/10"
                                        : "border-white/10 bg-white/[0.035] hover:border-white/30 hover:bg-white/[0.065]"
                                }`}
                              >
                                <div className="relative h-32 w-full sm:h-36 lg:h-28 xl:h-36">
                                  <Image
                                    src={choice.sticker}
                                    alt={`${choice.name} ${choice.registration}`}
                                    fill
                                    sizes="(min-width: 1280px) 16vw, (min-width: 640px) 30vw, 90vw"
                                    className="scale-[1.12] object-contain drop-shadow-2xl"
                                  />
                                </div>
                                <div className="mt-2 flex items-end justify-between gap-3 px-1">
                                  <div>
                                    <p className="text-sm font-black uppercase leading-tight">
                                      {choice.name}
                                    </p>
                                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                                      {choice.registration}
                                    </p>
                                  </div>
                                  <span
                                    aria-hidden="true"
                                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-black ${
                                      showCorrect
                                        ? "border-emerald-400 bg-emerald-400 text-black"
                                        : showWrong
                                          ? "border-red-400 bg-red-400 text-black"
                                          : isSelected
                                            ? "border-[#d7b46a] bg-[#d7b46a] text-black"
                                            : "border-white/20 text-transparent"
                                    }`}
                                  >
                                    {showWrong ? "×" : "✓"}
                                  </span>
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        {gameState === "results" && (
                          <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                            Correct: {correctAircraft.name} · {correctAircraft.registration}
                          </p>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </section>

            {gameState === "playing" && (
              <div className="sticky bottom-3 z-30 mt-6 rounded-2xl border border-white/10 bg-black/90 p-3 shadow-2xl backdrop-blur-xl sm:flex sm:items-center sm:justify-between sm:gap-5 sm:p-4 lg:static">
                <div className="px-2 pb-3 sm:pb-0">
                  <p className="text-xs font-black uppercase tracking-[0.18em]">
                    {remainingCount === 0
                      ? "All cockpits matched"
                      : `${remainingCount} ${remainingCount === 1 ? "cockpit" : "cockpits"} left`}
                  </p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/35">
                    The clock stops when you submit
                  </p>
                </div>
                <button
                  type="button"
                  onClick={submitAnswers}
                  disabled={remainingCount > 0 || isSaving}
                  className="min-h-14 w-full rounded-xl bg-[#d7b46a] px-7 text-xs font-black uppercase tracking-[0.2em] text-black transition hover:bg-[#e6c780] active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/25 sm:w-auto"
                >
                  {remainingCount > 0 ? "Complete all matches" : "Submit answers"}
                </button>
              </div>
            )}
          </>
        )}

        {(gameState === "intro" || gameState === "results") && (
          <CockpitLeaderboard
            scores={scores}
            isLoading={leaderboardLoading}
            error={leaderboardError}
            latestEntryId={latestEntryId}
          />
        )}
      </div>
    </main>
  );
}
