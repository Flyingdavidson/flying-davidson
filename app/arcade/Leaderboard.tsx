"use client";

import {
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type LeaderboardScore = {
  id: number;
  name: string;
  score: number;
  created_at: string;
};

type DisplayScore = LeaderboardScore;

type LeaderboardProps = {
  score: number;
  canSubmit: boolean;
  attemptId: number;
};

const PATRICK_BENCHMARK = 77;

export default function Leaderboard({
  score,
  canSubmit,
  attemptId,
}: LeaderboardProps) {
  const [scores, setScores] = useState<LeaderboardScore[]>([]);
  const [name, setName] = useState("");
  const [submittedAttemptId, setSubmittedAttemptId] = useState<number | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const sectionRef = useRef<HTMLElement | null>(null);
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  const loadScores = useCallback(async () => {
    try {
      const response = await fetch("/api/leaderboard", {
        cache: "no-store",
      });

      const data = (await response.json()) as {
        scores?: LeaderboardScore[];
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to load leaderboard.");
      }

      setScores(data.scores ?? []);
    } catch (loadError) {
      setError(
        loadError instanceof Error
          ? loadError.message
          : "Unable to load leaderboard."
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void loadScores();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [loadScores]);

  useEffect(() => {
    if (!canSubmit || attemptId === 0) {
      return;
    }

    const timer = window.setTimeout(() => {
      setName("");
      setError("");
      setSubmittedAttemptId(null);

      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      const isDesktopPointer = window.matchMedia(
        "(hover: hover) and (pointer: fine)"
      ).matches;

      if (isDesktopPointer) {
        window.setTimeout(() => {
          nameInputRef.current?.focus();
        }, 600);
      }
    }, 50);

    return () => window.clearTimeout(timer);
  }, [attemptId, canSubmit]);

  const submitScore = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cleanName = name.trim();

    if (cleanName.length < 2) {
      setError("Please enter at least two characters.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/leaderboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: cleanName,
          score,
        }),
      });

      const data = (await response.json()) as {
        scores?: LeaderboardScore[];
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to save your score.");
      }

      setScores(data.scores ?? []);
      setSubmittedAttemptId(attemptId);
      setName("");
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to save your score."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const showSubmissionForm =
    canSubmit &&
    attemptId > 0 &&
    submittedAttemptId !== attemptId;

  const leaderboard: DisplayScore[] = [
    {
      id: -1,
      name: "Patrick Davidson",
      score: PATRICK_BENCHMARK,
      created_at: "",
    
    },
    ...scores,
  ].slice(0, 10);

  const getPositionLabel = (index: number) => {
    if (index === 0) return "🥇";
    if (index === 1) return "🥈";
    if (index === 2) return "🥉";

    return String(index + 1).padStart(2, "0");
  };

  return (
    <section
      ref={sectionRef}
      className="mt-8 scroll-mt-8"
    >
      {showSubmissionForm && (
        <div className="mb-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-5 sm:p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
                Race complete
              </p>

              <h2 className="mt-3 text-2xl font-black uppercase leading-tight sm:text-3xl md:text-5xl">
                {score} {score === 1 ? "Gate" : "Gates"} Cleared
              </h2>
            </div>

            <form
              onSubmit={submitScore}
              className="flex w-full flex-col gap-3 sm:flex-row md:w-auto"
            >
              <label htmlFor="pilot-name" className="sr-only">
                Pilot name
              </label>

              <input
                ref={nameInputRef}
                id="pilot-name"
                name="pilot-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                maxLength={20}
                autoComplete="nickname"
                placeholder="Enter your name"
                className="min-h-14 w-full min-w-0 rounded-xl border border-white/15 bg-black px-5 text-base text-white outline-none transition placeholder:text-white/35 focus:border-red-500 sm:flex-1 md:w-64"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="min-h-14 w-full rounded-xl bg-red-600 px-7 text-sm font-bold uppercase tracking-[0.18em] transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>

          {error && (
            <p className="mt-4 text-sm text-red-400">
              {error}
            </p>
          )}
        </div>
      )}

      {submittedAttemptId === attemptId && canSubmit && (
        <div className="mb-6 rounded-2xl border border-green-500/30 bg-green-500/10 p-5 text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-green-400">
            Score submitted
          </p>
        </div>
      )}

      {canSubmit && score > PATRICK_BENCHMARK && (
        <div className="mb-6 overflow-hidden rounded-2xl border border-[#62ff00]/40 bg-[#62ff00]/10">
          <div className="p-6 text-center md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#62ff00]">
              Team 77 Champion
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase md:text-5xl">
              You Beat Patrick!
            </h2>

            <p className="mt-3 text-white/60">
              You cleared <strong>{score}</strong> gates and beat Patrick
              Davidson&apos;s official Team 77 benchmark.
            </p>
          </div>
        </div>
      )}

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
        <div className="flex flex-col gap-4 border-b border-white/10 px-6 py-7 md:flex-row md:items-end md:justify-between md:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-red-500">
              Team 77 Training Range
            </p>

            <h2 className="mt-2 text-3xl font-black uppercase md:text-5xl">
              World Leaderboard
            </h2>
          </div>

          <p className="text-xs uppercase tracking-[0.22em] text-white/35">
            Top 10 pilots
          </p>
        </div>

        {isLoading ? (
          <p className="p-8 text-white/50">
            Loading leaderboard...
          </p>
        ) : (
          <div>
            {leaderboard.map((entry, index) => (
  <div
    key={entry.id}
    className="grid grid-cols-[42px_minmax(0,1fr)_auto] items-center gap-3 border-b border-white/10 px-4 py-4 last:border-b-0 sm:grid-cols-[56px_1fr_auto] sm:px-5 sm:py-5 md:grid-cols-[80px_1fr_180px] md:px-8"
  >
    <div className="text-xl font-black text-white/55 md:text-2xl">
      {getPositionLabel(index)}
    </div>

    <div className="min-w-0">
      <p className="truncate text-sm font-bold uppercase tracking-[0.16em] md:text-base">
        {entry.name}
      </p>
    </div>

    <div className="text-right">
      <span className="text-2xl font-black tabular-nums sm:text-3xl md:text-4xl">
        {String(entry.score).padStart(3, "0")}
      </span>

      <span className="ml-3 hidden text-xs uppercase tracking-[0.2em] text-white/35 sm:inline">
        Gates
      </span>
    </div>
  </div>
))}

            {scores.length === 0 && (
              <p className="border-t border-white/10 p-6 text-sm text-white/45 md:px-8">
                No player scores yet. Be the first pilot to challenge Patrick.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
