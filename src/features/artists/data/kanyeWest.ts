import type { Artist } from "../types/artist.types"
import heroImage from "../../../assets/images/kanye/hero.webp"

export const kanyeWest: Artist = {
  id: "kanye",
  name: "Kanye West",

  hero: {
    image: heroImage,
    quote: "I feel like I'm too busy writing history to read it.",
  },

  overview: {
    biography: "Kanye West emerged as a producer before redefining hip-hop.",
    born: "June 8, 1977",
    origin: "Chicago",
    genres: ["Hip-Hop", "Experimental"],
    activeYears: "2004 - present",
  },

  eras: [],
  albums: [],
  awards: [],
  influence: [],
  legacy: {
    summary: "One of the most influential artists of modern music.",
  },
}