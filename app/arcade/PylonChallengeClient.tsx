"use client";
import CloseArcadeButton from "@/components/CloseArcadeButton";
import { useCallback, useEffect, useRef, useState } from "react";
import Leaderboard from "./Leaderboard";
type Gate = {
  x: number;
  gapY: number;
  gapHeight: number;
  width: number;
  passed: boolean;
};

const GAME_WIDTH = 900;
const GAME_HEIGHT = 520;

const PLANE_X = 150;
const PLANE_WIDTH = 72;
const PLANE_HEIGHT = 50;

const STARTING_SPEED = 260;
const PLANE_SPEED = 330;

export default function PylonChallengeClient() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const keysRef = useRef({
    up: false,
    down: false,
  });

  const planeYRef = useRef(GAME_HEIGHT / 2);
  const gatesRef = useRef<Gate[]>([]);
  const scoreRef = useRef(0);
  const speedRef = useRef(STARTING_SPEED);
  const runningRef = useRef(false);
  const lastTimeRef = useRef<number | null>(null);
  const spawnTimerRef = useRef(0);

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [crashCount, setCrashCount] = useState(0);
  
  const [gameState, setGameState] = useState<
    "ready" | "running" | "game-over"
  >("ready");

useEffect(() => {
  const storedBest = Number(
    window.localStorage.getItem("pylon-challenge-best") ?? "0"
  );

  const timer = window.setTimeout(() => {
    if (Number.isFinite(storedBest)) {
      setBestScore(storedBest);
    }
  }, 0);

  return () => window.clearTimeout(timer);
}, []);

  const saveBestScore = useCallback((nextScore: number) => {
    setBestScore((currentBest) => {
      const newBest = Math.max(currentBest, nextScore);

      window.localStorage.setItem(
        "pylon-challenge-best",
        String(newBest)
      );

      return newBest;
    });
  }, []);

  const endGame = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
  
    runningRef.current = false;
    setGameState("game-over");
    setCrashCount((current) => current + 1);
    saveBestScore(scoreRef.current);
  }, [saveBestScore]);

  const resetGame = useCallback(() => {
    planeYRef.current = GAME_HEIGHT / 2;
    gatesRef.current = [];
    scoreRef.current = 0;
    speedRef.current = STARTING_SPEED;
    spawnTimerRef.current = 0;
    lastTimeRef.current = null;

    setScore(0);
    setGameState("running");

    runningRef.current = true;
  }, []);

  const drawBackground = (
    context: CanvasRenderingContext2D,
    elapsedSeconds: number
  ) => {
    const gradient = context.createLinearGradient(
      0,
      0,
      0,
      GAME_HEIGHT
    );

    gradient.addColorStop(0, "#08111f");
    gradient.addColorStop(0.55, "#10243c");
    gradient.addColorStop(1, "#05070a");

    context.fillStyle = gradient;
    context.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    context.fillStyle = "rgba(255,255,255,0.06)";

    for (let index = 0; index < 18; index += 1) {
      const x =
        (index * 83 - elapsedSeconds * speedRef.current * 0.12) %
        (GAME_WIDTH + 100);

      const wrappedX = x < -50 ? x + GAME_WIDTH + 100 : x;

      context.fillRect(wrappedX, 80 + (index % 5) * 72, 34, 2);
    }

    context.fillStyle = "rgba(255,255,255,0.08)";
    context.fillRect(0, GAME_HEIGHT - 44, GAME_WIDTH, 2);
  };

  const drawGate = (
    context: CanvasRenderingContext2D,
    gate: Gate
  ) => {
    const topHeight = gate.gapY - gate.gapHeight / 2;
    const bottomY = gate.gapY + gate.gapHeight / 2;
    const bottomHeight = GAME_HEIGHT - bottomY;

    const drawPylon = (
      x: number,
      y: number,
      width: number,
      height: number,
      inverted = false
    ) => {
      const stripeHeight = 24;

      for (
        let stripeY = 0;
        stripeY < height;
        stripeY += stripeHeight
      ) {
        const stripeIndex = Math.floor(stripeY / stripeHeight);
        const isRed = stripeIndex % 2 === 0;

        context.fillStyle = isRed ? "#ef1b24" : "#f4f4f4";

        const actualY = inverted
          ? y + height - stripeY - stripeHeight
          : y + stripeY;

        context.fillRect(
          x,
          Math.max(y, actualY),
          width,
          Math.min(stripeHeight, height - stripeY)
        );
      }

      context.strokeStyle = "rgba(0,0,0,0.45)";
      context.lineWidth = 3;
      context.strokeRect(x, y, width, height);
    };

    drawPylon(gate.x, 0, gate.width, topHeight, true);
    drawPylon(
      gate.x,
      bottomY,
      gate.width,
      bottomHeight
    );

    context.fillStyle = "rgba(255,255,255,0.16)";
    context.fillRect(
      gate.x - 7,
      topHeight - 8,
      gate.width + 14,
      8
    );
    context.fillRect(
      gate.x - 7,
      bottomY,
      gate.width + 14,
      8
    );
  };

  const drawPlane = (
    context: CanvasRenderingContext2D,
    planeY: number
  ) => {
    context.save();
    context.translate(PLANE_X, planeY);
  
    const white = "#f5f5f2";
    const green = "#62ff00";
    const red = "#ef1b24";
    const black = "#050505";
  
    // Shadow
    context.save();
    context.translate(-4, 6);
    context.globalAlpha = 0.32;
    context.fillStyle = black;
  
    context.beginPath();
    context.moveTo(-35, 0);
    context.lineTo(-24, -6);
    context.lineTo(-18, -17);
    context.lineTo(-7, -15);
    context.lineTo(-3, -6);
    context.lineTo(3, -5);
    context.lineTo(10, -31);
    context.lineTo(20, -29);
    context.lineTo(25, -7);
    context.lineTo(31, -5);
    context.lineTo(40, 0);
    context.lineTo(31, 5);
    context.lineTo(25, 7);
    context.lineTo(20, 29);
    context.lineTo(10, 31);
    context.lineTo(3, 5);
    context.lineTo(-3, 6);
    context.lineTo(-7, 15);
    context.lineTo(-18, 17);
    context.lineTo(-24, 6);
    context.closePath();
    context.fill();
  
    context.restore();
  
    // Main wings — white
    context.fillStyle = white;
  
    context.beginPath();
    context.moveTo(-2, -5);
    context.lineTo(8, -31);
    context.lineTo(20, -29);
    context.lineTo(25, -7);
    context.lineTo(17, -4);
    context.closePath();
    context.fill();
  
    context.beginPath();
    context.moveTo(-2, 5);
    context.lineTo(8, 31);
    context.lineTo(20, 29);
    context.lineTo(25, 7);
    context.lineTo(17, 4);
    context.closePath();
    context.fill();
  
    // White wing tips
    context.fillStyle = "#ffffff";
  
    context.beginPath();
    context.moveTo(8, -31);
    context.lineTo(20, -29);
    context.lineTo(19, -24);
    context.lineTo(10, -25);
    context.closePath();
    context.fill();
  
    context.beginPath();
    context.moveTo(8, 31);
    context.lineTo(20, 29);
    context.lineTo(19, 24);
    context.lineTo(10, 25);
    context.closePath();
    context.fill();
  
    // Wing outlines
    context.strokeStyle = "rgba(0,0,0,0.3)";
    context.lineWidth = 1.5;
  
    context.beginPath();
    context.moveTo(-2, -5);
    context.lineTo(8, -31);
    context.lineTo(20, -29);
    context.lineTo(25, -7);
    context.lineTo(17, -4);
    context.closePath();
    context.stroke();
  
    context.beginPath();
    context.moveTo(-2, 5);
    context.lineTo(8, 31);
    context.lineTo(20, 29);
    context.lineTo(25, 7);
    context.lineTo(17, 4);
    context.closePath();
    context.stroke();
  
    // Tailplane — electric green
    context.fillStyle = green;
  
    context.beginPath();
    context.moveTo(-29, -4);
    context.lineTo(-23, -18);
    context.lineTo(-12, -16);
    context.lineTo(-8, -5);
    context.closePath();
    context.fill();
  
    context.beginPath();
    context.moveTo(-29, 4);
    context.lineTo(-23, 18);
    context.lineTo(-12, 16);
    context.lineTo(-8, 5);
    context.closePath();
    context.fill();
  
    // White tail tips
    context.fillStyle = "#ffffff";
  
    context.beginPath();
    context.moveTo(-23, -18);
    context.lineTo(-12, -16);
    context.lineTo(-14, -12);
    context.lineTo(-24, -13);
    context.closePath();
    context.fill();
  
    context.beginPath();
    context.moveTo(-23, 18);
    context.lineTo(-12, 16);
    context.lineTo(-14, 12);
    context.lineTo(-24, 13);
    context.closePath();
    context.fill();
  
    // Main fuselage — white
    context.fillStyle = white;
  
    context.beginPath();
    context.moveTo(-36, 0);
    context.lineTo(-25, -6);
    context.lineTo(14, -8);
    context.lineTo(30, -5);
    context.lineTo(40, 0);
    context.lineTo(30, 5);
    context.lineTo(14, 8);
    context.lineTo(-25, 6);
    context.closePath();
    context.fill();
  
    // Electric green centre stripe
    context.fillStyle = green;
  
    context.beginPath();
    context.moveTo(-33, -2);
    context.lineTo(27, -3);
    context.lineTo(34, 0);
    context.lineTo(27, 3);
    context.lineTo(-33, 2);
    context.closePath();
    context.fill();
  
    // White centre highlight
    context.fillStyle = "rgba(255,255,255,0.65)";
  
    context.beginPath();
    context.moveTo(-27, -1);
    context.lineTo(21, -1.5);
    context.lineTo(25, 0);
    context.lineTo(21, 1.5);
    context.lineTo(-27, 1);
    context.closePath();
    context.fill();
  
    // Cockpit
    context.fillStyle = black;
    context.beginPath();
    context.ellipse(7, 0, 9, 4.7, 0, 0, Math.PI * 2);
    context.fill();
  
    context.strokeStyle = "rgba(255,255,255,0.8)";
    context.lineWidth = 1.5;
    context.beginPath();
    context.ellipse(7, 0, 7, 3.2, 0, 0, Math.PI * 2);
    context.stroke();
  
    // Aircraft numbers — black 77
    context.fillStyle = black;
    context.font = "900 8px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
  
    context.save();
    context.translate(12, -18);
    context.rotate(Math.PI / 2);
    context.fillText("77", 0, 0);
    context.restore();
  
    context.save();
    context.translate(12, 18);
    context.rotate(-Math.PI / 2);
    context.fillText("77", 0, 0);
    context.restore();
  
    // Red nose
    context.fillStyle = red;
    context.beginPath();
    context.moveTo(28, -5);
    context.lineTo(40, 0);
    context.lineTo(28, 5);
    context.closePath();
    context.fill();
  
    // Propeller
    context.strokeStyle = "rgba(255,255,255,0.7)";
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(40, -12);
    context.lineTo(40, 12);
    context.stroke();
  
    context.restore();
  };

  const drawHud = (
    context: CanvasRenderingContext2D
  ) => {
    context.fillStyle = "rgba(0,0,0,0.42)";
    context.fillRect(24, 22, 230, 76);

    context.fillStyle = "#ffffff";
    context.font = "700 24px Arial";
    context.fillText(
      `GATES ${scoreRef.current}`,
      40,
      54
    );

    context.fillStyle = "rgba(255,255,255,0.64)";
    context.font = "14px Arial";
    context.fillText(
      `${Math.round(speedRef.current)} KM/H`,
      40,
      82
    );
  };

  const checkCollision = (gate: Gate) => {
    const planeLeft = PLANE_X - PLANE_WIDTH / 2;
    const planeRight = PLANE_X + PLANE_WIDTH / 2;
    const planeTop = planeYRef.current - PLANE_HEIGHT / 2;
    const planeBottom =
      planeYRef.current + PLANE_HEIGHT / 2;

    const gateLeft = gate.x;
    const gateRight = gate.x + gate.width;

    const overlapsHorizontally =
      planeRight > gateLeft && planeLeft < gateRight;

    if (!overlapsHorizontally) {
      return false;
    }

    const gapTop = gate.gapY - gate.gapHeight / 2;
    const gapBottom = gate.gapY + gate.gapHeight / 2;

    return planeTop < gapTop || planeBottom > gapBottom;
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const render = (time: number) => {
      const previousTime = lastTimeRef.current ?? time;
      const deltaSeconds = Math.min(
        (time - previousTime) / 1000,
        0.033
      );

      lastTimeRef.current = time;

      if (runningRef.current) {
        if (keysRef.current.up) {
          planeYRef.current -= PLANE_SPEED * deltaSeconds;
        }

        if (keysRef.current.down) {
          planeYRef.current += PLANE_SPEED * deltaSeconds;
        }

        planeYRef.current = Math.max(
          PLANE_HEIGHT / 2,
          Math.min(
            GAME_HEIGHT - PLANE_HEIGHT / 2,
            planeYRef.current
          )
        );

        spawnTimerRef.current -= deltaSeconds;

        if (spawnTimerRef.current <= 0) {
          const gapHeight = Math.max(
            125,
            190 - scoreRef.current * 3
          );

          const margin = 75 + gapHeight / 2;

          gatesRef.current.push({
            x: GAME_WIDTH + 40,
            gapY:
              margin +
              Math.random() *
                (GAME_HEIGHT - margin * 2),
            gapHeight,
            width: 48,
            passed: false,
          });

          spawnTimerRef.current = Math.max(
            1.05,
            1.65 - scoreRef.current * 0.025
          );
        }

        gatesRef.current.forEach((gate) => {
          gate.x -= speedRef.current * deltaSeconds;

          if (
            !gate.passed &&
            gate.x + gate.width < PLANE_X
          ) {
            gate.passed = true;
            scoreRef.current += 1;
            speedRef.current = Math.min(
              470,
              STARTING_SPEED + scoreRef.current * 10
            );

            setScore(scoreRef.current);
          }

          if (checkCollision(gate)) {
            endGame();
          }
        });

        gatesRef.current = gatesRef.current.filter(
          (gate) => gate.x > -100
        );
      }

      drawBackground(context, time / 1000);

      gatesRef.current.forEach((gate) => {
        drawGate(context, gate);
      });

      drawPlane(context, planeYRef.current);
      drawHud(context);

      animationFrameRef.current =
        window.requestAnimationFrame(render);
    };

    animationFrameRef.current =
      window.requestAnimationFrame(render);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(
          animationFrameRef.current
        );
      }
    };
  }, [endGame]);

  useEffect(() => {
    const keyDown = (event: KeyboardEvent) => {
      if (
        event.key === "ArrowUp" ||
        event.key.toLowerCase() === "w"
      ) {
        event.preventDefault();
        keysRef.current.up = true;
      }

      if (
        event.key === "ArrowDown" ||
        event.key.toLowerCase() === "s"
      ) {
        event.preventDefault();
        keysRef.current.down = true;
      }

      if (
        (event.key === " " || event.key === "Enter") &&
        !runningRef.current
      ) {
        event.preventDefault();
        resetGame();
      }
    };

    const keyUp = (event: KeyboardEvent) => {
      if (
        event.key === "ArrowUp" ||
        event.key.toLowerCase() === "w"
      ) {
        keysRef.current.up = false;
      }

      if (
        event.key === "ArrowDown" ||
        event.key.toLowerCase() === "s"
      ) {
        keysRef.current.down = false;
      }
    };

    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);

    return () => {
      window.removeEventListener("keydown", keyDown);
      window.removeEventListener("keyup", keyUp);
    };
  }, [resetGame]);

  const setDirection = (
    direction: "up" | "down",
    pressed: boolean
  ) => {
    keysRef.current[direction] = pressed;
  };
  
  const releaseControls = () => {
    keysRef.current.up = false;
    keysRef.current.down = false;
  };

  return (
    <section className="min-h-screen bg-black px-3 pb-16 pt-10 text-white sm:px-4 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
      <div className="mb-8 flex items-center justify-between gap-4">
          <CloseArcadeButton />

          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.4em] text-[#62ff00]">
              Team 77 Arcade
            </p>

            <h1 className="mt-2 text-3xl font-black uppercase sm:text-5xl md:text-6xl">
              Pylon Challenge
            </h1>
          </div>
        </div>

        <p className="mx-auto mb-8 max-w-2xl text-center text-sm leading-6 text-white/60 md:text-base">
          Fly Patrick Davidson&apos;s Edge 540 through the pylons and climb
          the world leaderboard.
        </p>

        <div
  onPointerLeave={releaseControls}
  className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl"
>
          <div className="relative aspect-[900/520] w-full">
            <canvas
              ref={canvasRef}
              width={GAME_WIDTH}
              height={GAME_HEIGHT}
              className="h-full w-full"
            />

            {gameState !== "running" && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/65 px-6 backdrop-blur-sm">
                <div className="max-w-md text-center">
                  {gameState === "ready" ? (
                    <>
                      <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                        Ready to race?
                      </p>

                      <h2 className="mt-3 text-3xl font-black uppercase md:text-5xl">
                        Clear the gates
                      </h2>
                    </>
                  ) : (
                    <>
                      <p className="text-sm uppercase tracking-[0.3em] text-red-500">
                        Pylon strike
                      </p>

                      <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
                        Score {score}
                      </h2>
                    </>
                  )}

                  <button
                    type="button"
                    onClick={resetGame}
                    className="mt-8 rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] transition hover:bg-red-500"
                  >
                    {gameState === "ready"
                      ? "Start Race"
                      : "Race Again"}
                  </button>

                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/40">
                    Press Enter or Space
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-px border-t border-white/10 bg-white/10 sm:grid-cols-[1fr_1fr_auto] sm:items-stretch">
  <div className="bg-[#090909] px-4 py-4 sm:px-5">
    <p className="text-[10px] uppercase tracking-[0.22em] text-white/40 sm:text-xs">
      Current score
    </p>

    <p className="mt-1 text-3xl font-black tabular-nums">
      {score}
    </p>
  </div>

  <div className="bg-[#090909] px-4 py-4 sm:px-5 sm:text-center">
    <p className="text-[10px] uppercase tracking-[0.22em] text-white/40 sm:text-xs">
      Best score
    </p>

    <p className="mt-1 text-3xl font-black tabular-nums">
      {bestScore}
    </p>
  </div>

  <div className="col-span-2 grid grid-cols-2 gap-3 bg-[#090909] p-3 sm:col-span-1 sm:flex sm:items-center sm:justify-end sm:px-5">
    <button
      type="button"
      aria-label="Fly up"
      onPointerDown={() => setDirection("up", true)}
      onPointerUp={() => setDirection("up", false)}
      onPointerCancel={() => setDirection("up", false)}
      onPointerLeave={() => setDirection("up", false)}
      className="flex h-16 touch-none select-none items-center justify-center rounded-xl border border-white/15 bg-white/10 text-3xl font-bold active:scale-[0.97] active:bg-white/25 sm:h-14 sm:w-20"
    >
      ↑
    </button>

    <button
      type="button"
      aria-label="Fly down"
      onPointerDown={() => setDirection("down", true)}
      onPointerUp={() => setDirection("down", false)}
      onPointerCancel={() => setDirection("down", false)}
      onPointerLeave={() => setDirection("down", false)}
      className="flex h-16 touch-none select-none items-center justify-center rounded-xl border border-white/15 bg-white/10 text-3xl font-bold active:scale-[0.97] active:bg-white/25 sm:h-14 sm:w-20"
    >
      ↓
    </button>
  </div>
</div>
        </div>
        <div className="mt-6 hidden gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 text-sm md:grid md:grid-cols-3">
          <div className="bg-black px-5 py-4">
            <span className="font-bold text-white">
              Desktop
            </span>
            <span className="ml-2 text-white/50">
              Arrow keys or W / S
            </span>
          </div>

          <div className="bg-black px-5 py-4">
            <span className="font-bold text-white">
              Mobile
            </span>
            <span className="ml-2 text-white/50">
              Hold the on-screen controls
            </span>
          </div>

          <div className="bg-black px-5 py-4">
            <span className="font-bold text-white">
              Objective
            </span>
            <span className="ml-2 text-white/50">
              Clear the gates without a pylon strike
            </span>
          </div>
        </div>

        <Leaderboard
  score={score}
  canSubmit={gameState === "game-over"}
  attemptId={crashCount}
/>
      </div>
    </section>
  );
}
