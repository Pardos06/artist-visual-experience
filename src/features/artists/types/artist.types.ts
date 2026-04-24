export interface Hero {
  image: string
  quote: string
}

export interface Overview {
  biography: string
  born: string
  origin: string
  genres: string[]
  activeYears: string
}

export interface Award {
  name: string
  year: number
  category: string
}

export interface Influence {
  title: string
  description: string
}

export interface Legacy {
  summary: string
}

export interface Milestone {
  date: string; 
  event: string;
  description: string;
  type: 'award' | 'tour' | 'personal' | 'scandal'; 
}

export interface Track {
  number: number;
  title: string;
  duration?: string;
  featuredArtists?: string[]; 
}

export interface Era {
  id: string
  title: string
  startYear: number
  endYear?: number
  description: string
  albums: Album[]
  milestones?: Milestone[]
}

export interface Album {
  id: string
  title: string
  fontFileUrl?: string;
  fontFamily?: string;
  year: number
  cover: string
  backCover: string
  description: string
  tracks: Track[]
  themes: string[]
  color: [string, string, string];
  backColor: [string, string, string];
}

export interface Artist {
  id: string
  name: string
  hero: Hero
  overview: Overview
  eras: Era[]
  awards: Award[]
  influence: Influence[]
  legacy: Legacy
}

