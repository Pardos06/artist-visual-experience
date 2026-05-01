import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../../lib/sanity";

import AwardsSection from "../sections/AwardSection";
import ErasTimelineSection from "../sections/ErasTimelineSection";
import ArtistFooter from "../sections/FooterSection";
import HeroSection from "../sections/HeroSection";
import InfluenceSection from "../sections/InfluenceSection";
import LegacySection from "../sections/LegacySection";
import OverviewSection from "../sections/OverviewSection";

const ArtistPage = () => {
    const { artistSlug } = useParams();
    const [artistData, setArtistData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchArtist = async () => {
            setIsLoading(true);
            
            const query = `
                *[_type == "artist" && slug.current == $slug][0] {
                    name,
                    // SOLUCIÓN 1: Ahora sí estamos pidiendo la fuente a Sanity
                    "artistFontUrl": artistFont.asset->url,
                    "artistFontFamily": artistFont.fontName,
                    hero {
                        quote,
                        "image": image.asset->url
                    },
                    overview,
                    "eras": eras[]-> | order(startYear asc) {
                        "id": _id,
                        title,
                        startYear,
                        endYear,
                        description,
                        milestones,
                        "albums": albums[]->{
                            "id": _id,
                            title,
                            year,
                            cover,
                            backCover,
                            description,
                            themes,
                            color,
                            backColor,
                            backgroundType,
                            "fontFileUrl": customFont.asset->url,
                            "fontFamily": customFont.fontName,
                            tracks
                        }
                    },
                    awards,
                    influence,
                    legacy
                }
            `;

            try {
                const data = await client.fetch(query, { slug: artistSlug });
                setArtistData(data);
            } catch (error) {
                console.error("Error al cargar datos:", error);
            } finally {
                setIsLoading(false);
            }
        };

        if (artistSlug) fetchArtist();
    }, [artistSlug]);

    if (isLoading) return <div className="flex h-screen items-center justify-center text-white">Cargando experiencia...</div>;
    if (!artistData) return <div className="flex h-screen items-center justify-center text-white">Artista no encontrado</div>;

    return (
        <main className="page_sections">
            {/* SOLUCIÓN 2: Inyección CSS Agresiva. Obligamos a todas las etiquetas a usar la fuente */}
            {artistData.artistFontUrl && (
                <style dangerouslySetInnerHTML={{ __html: `
                    @font-face {
                        font-family: '${artistData.artistFontFamily}';
                        src: url('${artistData.artistFontUrl}');
                        font-display: swap;
                    }

                    :root {
                        --global-artist-font: '${artistData.artistFontFamily}', sans-serif;
                    }

                    body, h1, h2, h3, p, span, div, a {
                        font-family: var(--global-artist-font) !important;
                    }

                    /* Protegemos los títulos de los álbumes en el Pop-up para que conserven la suya */
                    .album-bento__title h3 {
                        font-family: var(--album-font, var(--global-artist-font)) !important;
                    }
                `}} />
            )}
            
            <HeroSection hero={artistData.hero} />
            <OverviewSection overview={artistData.overview} />
            
            <ErasTimelineSection eras={artistData.eras || []} />
            
            <AwardsSection awards={artistData.awards || []} />
            <InfluenceSection influence={artistData.influence || []} />
            <LegacySection legacy={artistData.legacy} />
            <ArtistFooter artist={artistData.name} />
        </main>
    );
};

export default ArtistPage;