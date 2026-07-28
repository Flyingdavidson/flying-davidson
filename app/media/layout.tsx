import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Media Centre | Flying Davidson",
    template: "%s | Flying Davidson",
  },
  description:
    "Patrick Davidson news, race reports, results, projects, biography and official media resources.",
};

export default function MediaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
