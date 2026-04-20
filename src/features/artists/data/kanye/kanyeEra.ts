import type {Era} from "../../types/artist.types";
// Portadas
import dropout from "../../../../assets/images/kanye/dropout.webp"
import late from "../../../../assets/images/kanye/late.webp"
import graduation from "../../../../assets/images/kanye/graduation.webp"
import heart from "../../../../assets/images/kanye/heart.webp"

// Contraportadas (CD físico o tracklist trasero para el giro 3D)
import dropoutBack from "../../../../assets/images/kanye/dropout-back.webp"
import lateBack from "../../../../assets/images/kanye/late-back.webp"
import graduationBack from "../../../../assets/images/kanye/graduation-back.webp"
import heartback from "../../../../assets/images/kanye/heart-back.webp"

export const kanyeEras: Era[] = [
 {
      id: "college-era",
      title: "The College Era",
      startYear: 2004,
      endYear: 2007,
      description: "A soulful and introspective era focused on self-conscious rap and social commentary.",
      albums: [
        {
          id: "college-dropout",
          title: "The College Dropout",
          year: 2004,
          cover: dropout,
          backCover: dropoutBack,
          description: "El aclamado álbum debut que revolucionó el hip-hop al alejarse de la temática 'gangsta rap' predominante en la época. Destaca por su innovador uso de samples de soul clásicos acelerados (conocido como 'chipmunk soul') y sus letras vulnerables e introspectivas que critican el sistema educativo, el consumismo y los prejuicios sociales.",
          themes: ["Educación", "Consumismo", "Religión", "Familia", "Lucha personal", "Sociedad"],
          color: ["#F4F4F4", "#C29B38", "#1E1612"], // Blanco humo, Dorado, Café oscuro (Bordes UI)
          backColor: ["#4d3d1a", "#2c241d", "#0a0807"], // Oro viejo, Café tierra, Negro profundo (Fondo)
          tracks: [
            { number: 1, title: "Intro (Skit)", duration: "0:19" },
            { number: 2, title: "We Don't Care", duration: "3:59" },
            { number: 3, title: "Graduation Day", duration: "1:22" },
            { number: 4, title: "All Falls Down", duration: "3:43", featuredArtists: ["Syleena Johnson"] },
            { number: 5, title: "I'll Fly Away", duration: "1:09" },
            { number: 6, title: "Spaceship", duration: "5:24", featuredArtists: ["GLC", "Consequence"] },
            { number: 7, title: "Jesus Walks", duration: "3:13" },
            { number: 8, title: "Never Let Me Down", duration: "5:24", featuredArtists: ["Jay-Z", "J. Ivy"] },
            { number: 9, title: "Get Em High", duration: "4:49", featuredArtists: ["Talib Kweli", "Common"] },
            { number: 10, title: "Workout Plan (Skit)", duration: "0:46" },
            { number: 11, title: "The New Workout Plan", duration: "5:22" },
            { number: 12, title: "Slow Jamz", duration: "5:16", featuredArtists: ["Twista", "Jamie Foxx"] },
            { number: 13, title: "Breathe In Breathe Out", duration: "4:06", featuredArtists: ["Ludacris"] },
            { number: 14, title: "School Spirit (Skit 1)", duration: "1:18" },
            { number: 15, title: "School Spirit", duration: "3:02" },
            { number: 16, title: "School Spirit (Skit 2)", duration: "0:43" },
            { number: 17, title: "Lil Jimmy (Skit)", duration: "0:53" },
            { number: 18, title: "Two Words", duration: "4:26", featuredArtists: ["Mos Def", "Freeway", "The Boys Choir of Harlem"] },
            { number: 19, title: "Through the Wire", duration: "3:41" },
            { number: 20, title: "Family Business", duration: "4:38" },
            { number: 21, title: "Last Call", duration: "12:40" }
          ],
        },
        {
          id: "late-registration",
          title: "Late Registration",
          year: 2005,
          cover: late,
          backCover: lateBack,
          description: "La espectacular secuela que expandió radicalmente su sonido al incorporar instrumentación orquestal en vivo con la ayuda del compositor Jon Brion. Un proyecto sofisticado que fusiona el hip-hop con arreglos cinematográficos exuberantes, mientras sus letras maduran para abordar las complejidades de su nueva fama, el racismo institucional, el comercio de diamantes en conflicto y profundos tributos familiares.",
          themes: ["Fama", "Política", "Racismo institucional", "Materialismo", "Crecimiento personal", "Familia"],
          color: ["#EBE2D5", "#6B5B49", "#2A2118"], // Tonos sepia y madera para los bordes
          backColor: ["#3d3124", "#1f1810", "#0a0705"], // Tonos oscuros de caoba para el fondo
          tracks: [
            { number: 1, title: "Wake Up Mr. West", duration: "0:41" },
            { number: 2, title: "Heard 'Em Say", duration: "3:23", featuredArtists: ["Adam Levine"] },
            { number: 3, title: "Touch the Sky", duration: "3:57", featuredArtists: ["Lupe Fiasco"] },
            { number: 4, title: "Gold Digger", duration: "3:28", featuredArtists: ["Jamie Foxx"] },
            { number: 5, title: "Skit #1", duration: "0:33" },
            { number: 6, title: "Drive Slow", duration: "4:32", featuredArtists: ["Paul Wall", "GLC"] },
            { number: 7, title: "My Way Home", duration: "1:43", featuredArtists: ["Common"] },
            { number: 8, title: "Crack Music", duration: "4:31", featuredArtists: ["The Game"] },
            { number: 9, title: "Roses", duration: "4:05" },
            { number: 10, title: "Bring Me Down", duration: "3:18", featuredArtists: ["Brandy"] },
            { number: 11, title: "Addiction", duration: "3:27" },
            { number: 12, title: "Skit #2", duration: "0:31" },
            { number: 13, title: "Diamonds from Sierra Leone (Remix)", duration: "3:53", featuredArtists: ["Jay-Z"] },
            { number: 14, title: "We Major", duration: "7:28", featuredArtists: ["Nas", "Really Doe"] },
            { number: 15, title: "Skit #3", duration: "0:24" },
            { number: 16, title: "Hey Mama", duration: "5:05" },
            { number: 17, title: "Celebration", duration: "3:18" },
            { number: 18, title: "Skit #4", duration: "1:18" },
            { number: 19, title: "Gone", duration: "5:33", featuredArtists: ["Consequence", "Cam'ron"] },
            { number: 20, title: "Diamonds from Sierra Leone (Bonus Track)", duration: "3:58" },
            { number: 21, title: "Late (Hidden Track)", duration: "3:50" },
            { number: 22, title: "Basic to Basic (Bonus Track UK)", duration: "1:37", featuredArtists: ["Common"] },
            { number: 23, title: "We Can Make It Better", duration: "3:51", featuredArtists: ["Common","Q-Tip", "Rhymefest", "Talib Kweli"] }
          ]
        },
        {
          id: "graduation",
          title: "Graduation",
          year: 2007,
          cover: graduation,
          backCover: graduationBack,
          description: "El cierre de la trilogía universitaria de Kanye West, donde abandona definitivamente el sonido soul clásico para abrazar una producción más electrónica, minimalista y orientada a estadios. Influenciado por el house europeo y el synth-pop, el álbum refleja su ascenso global, explorando la fama, el ego, la desconexión emocional y la ambición, todo envuelto en una estética futurista y vibrante desarrollada junto al artista Takashi Murakami.",
          themes: ["Fama", "Éxito", "Alienación", "Ego", "Ambición", "Superación"],
          color: ["#FF00FF", "#00FFFF", "#330066"], // Magenta, cian y morado (estética Murakami)
          backColor: ["#4a004a", "#002b36", "#1a0033"], // Tonos oscuros neón para contraste de fondo
          tracks: [
            { number: 1, title: "Good Morning", duration: "3:15" },
            { number: 2, title: "Champion", duration: "2:47" },
            { number: 3, title: "Stronger", duration: "5:11", featuredArtists: ["Daft Punk"] },
            { number: 4, title: "I Wonder", duration: "4:03" },
            { number: 5, title: "Good Life", duration: "3:27", featuredArtists: ["T-Pain"] },
            { number: 6, title: "Can't Tell Me Nothing", duration: "4:31" },
            { number: 7, title: "Barry Bonds", duration: "3:24", featuredArtists: ["Lil Wayne"] },
            { number: 8, title: "Drunk and Hot Girls", duration: "5:13", featuredArtists: ["Mos Def"] },
            { number: 9, title: "Flashing Lights", duration: "3:57", featuredArtists: ["Dwele"] },
            { number: 10, title: "Everything I Am", duration: "3:48" },
            { number: 11, title: "The Glory", duration: "3:32" },
            { number: 12, title: "Homecoming", duration: "3:23", featuredArtists: ["Chris Martin"] },
            { number: 13, title: "Big Brother", duration: "4:47" },

            // BONUS TRACKS (según edición)
            { number: 14, title: "Good Night", duration: "3:05", featuredArtists: ["Mos Def", "Al Be Back"] },
            { number: 15, title: "Bittersweet Poetry", duration: "4:02", featuredArtists: ["John Mayer"] }
          ]
        }
      ],
      milestones: [
        {
          date: "2005-02-13",
          event: "Grammy Awards Dominance",
          description: "Gana Mejor Álbum de Rap por The College Dropout y Mejor Canción de Rap por Jesus Walks, solidificando su estatus en la industria.",
          type: "award"
        },
        {
          date: "2007-09-11",
          event: "Batalla de Ventas vs 50 Cent",
          description: "Lanza Graduation el mismo día que Curtis de 50 Cent. Kanye gana la batalla de ventas, marcando un cambio cultural en el hip-hop lejos del gangsta rap.",
          type: "personal"
        }
      ]
    },
    {
        id: "heartbreak-era",
      title: "808s Era",
      startYear: 2008,
      endYear: 2009,
      description: "Etapa marcada por un giro radical en el sonido de Kanye West hacia el uso intensivo de autotune, minimalismo y una estética fría y emocional. Inspirada por la muerte de su madre y una ruptura sentimental, esta era explora temas de pérdida, soledad y vulnerabilidad, influyendo profundamente en el futuro del hip hop y el pop contemporáneo.",
      albums: [
        {
          id: "808s-heartbreak",
          title: "808s & Heartbreak",
          year: 2008,
          cover: heart,
          backCover: heartback,
          description: "El álbum que marca el comienzo de la '808s Era', caracterizado por el uso intensivo de autotune, minimalismo y una estética fría y emocional. Inspirado por la muerte de su madre y una ruptura sentimental, explora temas de pérdida, soledad y vulnerabilidad.",

          themes: ["heartbreak","loss","isolation","love","emotional vulnerability"],
          color: ["#1a1a1a", "#3a3a3a", "#888888"],
          backColor: ["#000000", "#2c2c2c", "#6e6e6e"], // Oro viejo, Café tierra, Negro profundo (Fondo)
          tracks: [
            { number: 1, title: "Say You Will", duration: "6:18" },
            { number: 2, title: "Welcome to Heartbreak", duration: "4:22", featuredArtists: ["Kid Cudi"] },
            { number: 3, title: "Heartless", duration: "3:31" },
            { number: 4, title: "Amazing", duration: "3:58", featuredArtists: ["Jeezy"] },
            { number: 5, title: "Love Lockdown", duration: "4:30" },
            { number: 6, title: "Paranoid", duration: "4:38", featuredArtists: ["Mr Hudson"] },
            { number: 7, title: "RoboCop", duration: "4:34" },
            { number: 8, title: "Street Lights", duration: "3:10" },
            { number: 9, title: "Bad News", duration: "3:58" },
            { number: 10, title: "See You in My Nightmares", duration: "4:18", featuredArtists: ["Lil Wayne"] },
            { number: 11, title: "Coldest Winter", duration: "2:44" },
            { number: 12, title: "Pinocchio Story", duration: "6:01" }
          ],
        }
      ],
      milestones: [
        {
          date: "2007-11",
          event: "Death of Donda West",
          description:
            "La muerte de su madre marca profundamente el enfoque emocional del siguiente álbum.",
          type: "personal"
        },
        {
          date: "2008-11",
          event: "Release of 808s & Heartbreak",
          description:
            "Lanzamiento del álbum que introduce un cambio radical en su sonido y estilo artístico.",
          type: "award"
        },
        {
          date: "2008-09",
          event: "MTV VMAs Incident",
          description:
            "Interrupción del discurso de Taylor Swift en los VMAs, generando gran controversia mediática.",
          type: "scandal"
        },
        {
          date: "2009-04",
          event: "Glow in the Dark Tour",
          description:
            "Gira que consolidó la estética visual futurista y emocional de esta etapa.",
          type: "tour"
        }
      ]
    }
];