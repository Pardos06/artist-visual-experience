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
import type { Artist } from "../types/artist.types";

const ArtistPage = () => {
    const { artistSlug } = useParams();
    const [artistData, setArtistData] = useState<Artist | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchArtist = async () => {
            setIsLoading(true);
            
            const query = `
                *[_type == "artist" && slug.current == $slug][0] {
                    name,
                    "artistFontUrl": artistFont.asset->url,
                    "artistFontFamily": artistFont.fontName,
                    hero {
                        "artistName": name, 
                        quote,
                        "imagesHero": imagesHero.asset->url
                    },
                    overview,
                    "eras": eras[]-> | order(startYear asc) {
                        "id": _id,
                        title,
                        startYear,
                        endYear,
                        description,
                        "imagesEra": imagesEra[].asset->url,
                        milestones[] {
                            date, 
                            event, 
                            description, 
                            type, 
                            "imagesMilestone": [imagesMilestone.asset->url]
                        },
                        "albums": albums[]->{
                            "id": _id, title, year, cover, backCover, description, themes, color, backColor, backgroundType,
                            "fontFileUrl": customFont.asset->url, "fontFamily": customFont.fontName, tracks
                        },
                        "unreleasedAlbums": unreleasedAlbums[]->{
                            "id": _id, title, year, cover, backCover, description, themes, color, backColor, backgroundType,
                            "fontFileUrl": customFont.asset->url, "fontFamily": customFont.fontName, tracks,
                            unreleasedReason, leakDate, status, intendedReleaseDate
                        }
                    },
                    awards,
                    influence[] {
                        title, 
                        description, 
                        influenceType, 
                        "imagesInfluence": imagesInfluence[0].asset->url
                    },
                    legacy {
                        summary, 
                        "imagesLegacy": imagesLegacy[].asset->url
                    }
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

    if (isLoading) return <div className="message_loading">Cargando experiencia...</div>;
    if (!artistData) return <div className="message_not_found">Artista no encontrado</div>;

    return (
        <main>
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