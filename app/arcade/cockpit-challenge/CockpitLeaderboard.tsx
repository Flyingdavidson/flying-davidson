export type CockpitLeaderboardScore = {
  id: number;
  name: string;
  score: number;
  duration_ms: number;
  created_at: string;
};

type CockpitLeaderboardProps = {
  scores: CockpitLeaderboardScore[];
  isLoading: boolean;
  error: string;
  latestEntryId: number | null;
};

export function formatGameTime(durationMs: number) {
  const totalTenths = Math.max(0, Math.floor(durationMs / 100));
  const minutes = Math.floor(totalTenths / 600);
  const seconds = Math.floor((totalTenths % 600) / 10);
  const tenths = totalTenths % 10;

  return `${minutes}:${String(seconds).padStart(2, "0")}.${tenths}`;
}

export default function CockpitLeaderboard({
  scores,
  isLoading,
  error,
  latestEntryId,
}: CockpitLeaderboardProps) {
  const positionLabel = (index: number) => {
    if (index === 0) return "01";
    if (index === 1) return "02";
    if (index === 2) return "03";
    return String(index + 1).padStart(2, "0");
  };

  return (
    <section id="leaderboard" className="mt-12 scroll-mt-28 md:mt-20">
      <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035]">
        <div className="flex flex-col gap-4 border-b border-white/10 px-6 py-7 sm:flex-row sm:items-end sm:justify-between md:px-9 md:py-9">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.34em] text-[#d7b46a]">
              Accuracy first · Fastest time wins ties
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em] sm:text-5xl">
              Cockpit Leaderboard
            </h2>
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/30">
            Top 10 spotters
          </p>
        </div>

        {isLoading ? (
          <p className="px-6 py-10 text-sm text-white/45 md:px-9">
            Loading leaderboard…
          </p>
        ) : scores.length > 0 ? (
          <div>
            {scores.map((entry, index) => {
              const isLatest = entry.id === latestEntryId;

              return (
                <div
                  key={entry.id}
                  className={`grid grid-cols-[44px_minmax(0,1fr)_auto] items-center gap-3 border-b border-white/10 px-5 py-5 last:border-b-0 sm:grid-cols-[64px_minmax(0,1fr)_110px_130px] md:px-9 ${
                    isLatest ? "bg-[#d7b46a]/10" : ""
                  }`}
                >
                  <span
                    className={`text-lg font-black tabular-nums ${
                      index < 3 ? "text-[#d7b46a]" : "text-white/35"
                    }`}
                  >
                    {positionLabel(index)}
                  </span>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-black uppercase tracking-[0.16em] sm:text-base">
                      {entry.name}
                    </p>
                    {isLatest && (
                      <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#d7b46a]">
                        Your latest flight
                      </p>
                    )}
                  </div>

                  <div className="hidden text-right sm:block">
                    <p className="text-2xl font-black tabular-nums">
                      {entry.score}/7
                    </p>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                      Correct
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xl font-black tabular-nums sm:text-2xl">
                      {formatGameTime(entry.duration_ms)}
                    </p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/30 sm:hidden">
                      {entry.score}/7 correct
                    </p>
                    <p className="hidden text-[9px] uppercase tracking-[0.2em] text-white/30 sm:block">
                      Time
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="px-6 py-10 text-sm text-white/45 md:px-9">
            No scores yet. Be the first to identify the fleet.
          </p>
        )}

        {error && (
          <p className="border-t border-red-500/20 bg-red-500/10 px-6 py-4 text-sm text-red-300 md:px-9">
            {error}
          </p>
        )}
      </div>
    </section>
  );
}
