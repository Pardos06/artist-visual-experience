import type { Artist } from "../../types/artist.types"
import heroImage from "../../../../assets/images/kanye/hero.webp"

import { kanyeEras } from "./kanyeEra"

export const kanyeWest: Artist = {
  id: "kanye",
  name: "Kanye West",

  hero: {
    image: heroImage,
    quote: "I feel like I'm too busy writing history to read it.",
  },

  overview: {
    biography: "Kanye West emergió como un productor a innovador en la escena del hip-hop de principios de los 2000, ganando reconocimiento por su trabajo con artistas como Jay-Z y Alicia Keys. En 2004, lanzó su álbum debut 'The College Dropout', que fue aclamado por la crítica y marcó el comienzo de una carrera musical influyente. A lo largo de los años, Kanye ha experimentado con diversos estilos musicales, desde el soul hasta el gospel, consolidándose como uno de los artistas más versátiles y controvertidos de su generación.", 
    born: "Junio 8, 1977",
    origin: "Chicago, Illinois, USA",
    genres: ["Hip-Hop", "Experimental", "Gospel"],
    activeYears: "2004 - present",
  },

  eras: kanyeEras,
  awards: [
    {
      name: "Grammy Award",
      year: 2005,
      category: "Best Rap Album (The College Dropout)"
    },
    {
      name: "Grammy Award",
      year: 2006,
      category: "Best Rap Album (Late Registration)"
    },
    {
      name: "Grammy Award",
      year: 2008,
      category: "Best Rap Album (Graduation)"
    }
  ],
  influence: [
    {
      title: "Chipmunk Soul",
      description: "Popularizó la técnica de samplear discos de soul clásico acelerando las voces para crear un tono agudo característico."
    },
    {
      title: "Vulnerabilidad en el Hip-Hop",
      description: "Alejó el género de su hiper-masculinidad tradicional, abriendo la puerta a raperos introspectivos como Drake, Kid Cudi y J. Cole."
    }
  ],
  legacy: {
    summary: "One of the most influential artists of modern music, known for constantly pushing sonic boundaries and redefining the landscape of hip-hop and pop culture.",
  },
}