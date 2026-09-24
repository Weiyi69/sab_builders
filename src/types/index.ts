export interface Service {
  title: string;
  description: string;
  benefits: string[];
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: number;
  image: string;
  gallery?: string[];
  description: string;
  stats: { label: string; value: string }[];
  timeline: { title: string; description: string }[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: { label: string; url: string }[];
}

