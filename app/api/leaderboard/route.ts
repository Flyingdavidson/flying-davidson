import { neon, type NeonQueryFunction } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

type ScoreRow = {
  id: number;
  name: string;
  score: number;
  created_at: string;
};

const PATRICK_STARTING_SCORE = 77;

async function getLeaderboard(sql: NeonQueryFunction<false, false>) {
  const [scores, patrickResult] = await Promise.all([
    // Keep attempts for Patrick's delayed benchmark, but rank each name once.
    sql`
      SELECT id, name, score, created_at
      FROM (
        SELECT id, name, score, created_at,
          ROW_NUMBER() OVER (
            PARTITION BY LOWER(TRIM(REGEXP_REPLACE(name, '[[:space:]]+', ' ', 'g')))
            ORDER BY score DESC, created_at ASC, id ASC
          ) AS player_rank
        FROM leaderboard
      ) AS personal_bests
      WHERE player_rank = 1
      ORDER BY score DESC, created_at ASC, id ASC
      LIMIT 10
    `,
    sql`
      SELECT MAX(score) AS highest_score
      FROM leaderboard
      WHERE created_at <= NOW() - INTERVAL '1 day'
    `,
  ]);

  const patrickRows = patrickResult as Array<{
    highest_score: number | string | null;
  }>;
  const highestEligibleScore = Number(patrickRows[0]?.highest_score ?? 0);
  const patrickScore = Math.max(
    PATRICK_STARTING_SCORE,
    highestEligibleScore + 7
  );

  return {
    scores: scores as ScoreRow[],
    patrickScore,
  };
}

function getDatabase() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured.");
  }

  return neon(databaseUrl);
}

function cleanName(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[^a-zA-Z0-9 À-ÿ'_-]/g, "")
    .slice(0, 20);
}

export async function GET() {
  try {
    const sql = getDatabase();

    await sql`
      CREATE TABLE IF NOT EXISTS leaderboard (
        id SERIAL PRIMARY KEY,
        name VARCHAR(20) NOT NULL,
        score INTEGER NOT NULL CHECK (score >= 0 AND score <= 10000),
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `;

    const leaderboard = await getLeaderboard(sql);

    return NextResponse.json(leaderboard);
  } catch (error) {
    console.error("Leaderboard GET error:", error);

    return NextResponse.json(
      { error: "Unable to load the leaderboard." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: unknown;
      score?: unknown;
    };

    const name = cleanName(body.name);
    const score = Number(body.score);

    if (name.length < 2) {
      return NextResponse.json(
        { error: "Please enter at least two characters." },
        { status: 400 }
      );
    }

    if (
      !Number.isInteger(score) ||
      score < 0 ||
      score > 10000
    ) {
      return NextResponse.json(
        { error: "That score is not valid." },
        { status: 400 }
      );
    }

    const sql = getDatabase();

    await sql`
      CREATE TABLE IF NOT EXISTS leaderboard (
        id SERIAL PRIMARY KEY,
        name VARCHAR(20) NOT NULL,
        score INTEGER NOT NULL CHECK (score >= 0 AND score <= 10000),
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `;

    await sql`
      INSERT INTO leaderboard (name, score)
      VALUES (${name}, ${score})
    `;

    const leaderboard = await getLeaderboard(sql);

    return NextResponse.json(
      {
        success: true,
        ...leaderboard,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Leaderboard POST error:", error);

    return NextResponse.json(
      { error: "Unable to save the score." },
      { status: 500 }
    );
  }
}
