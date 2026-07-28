import type { Metadata } from "next";
import ProjectPageClient from "@/components/projects/ProjectPageClient";
import { project } from "./data";

export const metadata: Metadata = {
  title: project.name,
  description: project.description,
  alternates: { canonical: "/media/projects/polo-50-years-2025" },
};

export default function Page() {
  return <ProjectPageClient project={project} />;
}
