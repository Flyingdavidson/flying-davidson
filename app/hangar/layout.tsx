import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Aircraft Hangar | Flying Davidson",
    template: "%s | Flying Davidson",
  },
  description:
    "Explore Patrick Davidson's race aircraft, aerobatic aircraft, warbirds, support equipment and flying gear.",
};

export default function HangarLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
