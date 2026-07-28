import type { MetadataRoute } from "next";
import { isRace3Published } from "@/lib/race3Publication";
const baseUrl = "https://flyingdavidson.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/arcade",
    "/championship",
    "/hangar",
    "/hangar/ac-tracktech-t1x2",
    "/hangar/bonanza",
    "/hangar/clark-tug",
    "/hangar/edge-540",
    "/hangar/fuel-bowser",
    "/hangar/gamebird",
    "/hangar/helmets",
    "/hangar/l39",
    "/hangar/sea-fury",
    "/hangar/zu-agk",
    "/hangar/zu-azx",
    "/hangar/zu-bed",
    "/media",
    "/media/biography",
    "/media/media-kit",
    "/media/news",
    "/media/news/air-race-x-2026-schedule",
    "/media/news/air-race-x-race-2-preview",
    "/media/news/emotive-backs-patrick-davidson",
    "/media/projects",
    "/media/projects/abdo-feghali-2021-durban-drift",
    "/media/projects/can-grab-2025",
    "/media/projects/diwali-lights-2018",
    "/media/projects/giving-it-gears-2021",
    "/media/projects/hsbc-svns-trophy-2023",
    "/media/projects/jordy-smith-2018",
    "/media/projects/polo-50-years-2025",
    "/media/projects/sundowns-red-bull-2023",
    "/media/projects/superlap-2022",
    "/media/race-reports",
    "/media/race-reports/2023-air-race-x",
    "/media/race-reports/2024-race-3",
    "/media/race-reports/2026-race-1",
    "/media/race-reports/2026-race-2",
    "/media/results",
  ];

  if (isRace3Published()) {
    routes.push("/media/race-reports/2026-race-3");
  }

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency:
      path === "" || path === "/championship" ? "weekly" : "monthly",
    priority:
      path === "" ? 1 : path.split("/").filter(Boolean).length === 1 ? 0.9 : 0.7,
  }));
}
