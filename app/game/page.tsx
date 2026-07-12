import type { Metadata } from "next";
import PylonChallengeClient from "./PylonChallengeClient";

export const metadata: Metadata = {
  title: "Pylon Challenge",
  description:
    "Fly through the pylons in the Flying Davidson Pylon Challenge browser game.",
};

export default function PylonChallengePage() {
  return <PylonChallengeClient />;
}