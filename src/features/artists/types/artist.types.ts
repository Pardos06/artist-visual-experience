export interface Hero {
  artistName: string
  imagesHero: string
  quote: string
}

export interface Overview {
  realName: string
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
  influenceType: 'musical' | 'visual' | 'cultural';
  imagesInfluence: string;
}

export interface Legacy {
  summary: string
  imagesLegacy: string[];
}

export interface Track {
  number: number;
  title: string;
  duration?: string;
  featuredArtists?: string[];
}

export interface Album {
  id: string
  title: string
  fontFileUrl?: string;
  fontFamily?: string;
  year: string | Date | number;
  cover: string
  backCover: string
  description: string
  tracks: Track[]
  themes: string[]
  color: [string, string, string];
  backColor: [string, string, string];
  backgroundType: 'blobs' | 'grid-paper';
}

export interface UnreleasedAlbum extends Album {
  unreleasedReason: string;
  leakDate?: string;
  status: 'scrapped' | 'shelved' | 'reworked';
  intendedReleaseDate?: string;
}

export interface Milestone {
  year: string;
  description: string;
  event: string;
  eventType: 'award' | 'tour' | 'personal' | 'scandal';
  imagesMilestone?: string[];
}

export interface Era {
  id: string
  title: string
  startYear: number
  endYear?: number
  imagesEra: string[]
  description: string
  albums: Album[]
  unreleasedAlbums?: UnreleasedAlbum[]
  milestones?: Milestone[]
}

export interface Artist {
  id: string
  name: string
  artistFontUrl?: string;
  artistFontFamily?: string;
  hero: Hero
  overview: Overview
  eras: Era[]
  awards: Award[]
  influence: Influence[]
  legacy: Legacy
}

