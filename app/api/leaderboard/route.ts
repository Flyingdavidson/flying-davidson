import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

type ScoreRow = {
  id: number;
  name: string;
  score: number;
  created_at: string;
};

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

    const scores = await sql`
      SELECT id, name, score, created_at
      FROM leaderboard
      ORDER BY score DESC, created_at ASC
      LIMIT 10
    `;

    return NextResponse.json({
      scores: scores as ScoreRow[],
    });
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

    const scores = await sql`
      SELECT id, name, score, created_at
      FROM leaderboard
      ORDER BY score DESC, created_at ASC
      LIMIT 10
    `;

    return NextResponse.json(
      {
        success: true,
        scores: scores as ScoreRow[],
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
