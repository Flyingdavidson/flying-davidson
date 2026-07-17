export type ProjectFact = {
  label: string;
  value: string;
};

export type ProjectVideo = {
  title: string;
  file: string;
  poster?: string;
};

export type ProjectGallery = {
  title: string;
  subtitle?: string;
  images: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
  eyebrow?: string;
  buttonLabel?: string;
};

export type ProjectData = {
  name: string;
  category: string;
  context: string;
  title: string;
  hero: string;
  heroAlt: string;
  heroVideo?: string;
heroVideoPoster?: string;
  heroPosition?: string;
  description: string;
  introEyebrow?: string;
  introTitle: string;
  intro: string;
  facts: ProjectFact[];
  videos?: ProjectVideo[];
  videoTitle?: string;
  videoSubtitle?: string;
  youtube?: {
    title: string;
    embedUrl: string;
  };
  tiktok?: {
    title: string;
    videoId: string;
    url: string;
    username?: string;
    caption?: string;
  };
  featureLink?: ProjectLink;
  featureLinks?: ProjectLink[];
  galleries?: ProjectGallery[];
};