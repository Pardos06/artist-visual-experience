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

export interface Era {
  id: string
  title: string
  startYear: number
  endYear?: number
  description: string
  albums: string[]
}

export interface Album {
  id: string
  title: string
  year: number
  cover: string
  description: string
  themes: string[]
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

export interface Artist {
  id: string
  name: string
  hero: Hero
  overview: Overview
  eras: Era[]
  albums: Album[]
  awards: Award[]
  influence: Influence[]
  legacy: Legacy
}