import type { Metadata } from "next";
import CockpitChallengeClient from "./CockpitChallengeClient";

export const metadata: Metadata = {
  title: "Cockpit Challenge",
  description:
    "Match seven real cockpit photographs to the correct Flying Davidson aircraft before the clock runs out.",
  alternates: { canonical: "/arcade/cockpit-challenge" },
};

export default function CockpitChallengePage() {
  return <CockpitChallengeClient />;
}
