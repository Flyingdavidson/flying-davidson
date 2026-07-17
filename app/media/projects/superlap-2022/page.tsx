import ProjectPageClient from "@/components/projects/ProjectPageClient";
import { project } from "./data";

export default function Page() {
  return <ProjectPageClient project={project} />;
}
