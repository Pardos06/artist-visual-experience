import BentoCover3D from "../components/BentoCover3D";
import { urlFor } from "../../../lib/sanity";
import type { Era, Album, Track } from "../types/artist.types";
import { useState } from "react";
import { motion } from "framer-motion";
import DynamicBackground from "../components/DynamicBackground";

interface ErasTimelineProps {
  eras: Era[];
}

const splitArrayInHalf = <T,>(arr: T[]): [T[], T[]] => {
  const half = Math.ceil(arr.length / 2);
  return [arr.slice(0, half), arr.slice(half)];
};

const ErasTimelineSection = ({ eras }: ErasTimelineProps) => {
  const [activeBg, setActiveBg] = useState({
    type: 'blobs',
    colors: ['#0a0807', '#2c241d', '#4d3d1a']
  });

  const dynamicFontsCSS = eras
    .flatMap(era => era.albums || [])
    .filter(album => album.fontFileUrl && album.fontFamily)
    .map(album => `
      @font-face {
        font-family: '${album.fontFamily}';
        src: url('${album.fontFileUrl}');
        font-display: swap;
      }
    `).join('\n');

  if (!eras || eras.length === 0) return null;

  return (
    <div className="timeline-wrapper">
      {dynamicFontsCSS && (
        <style dangerouslySetInnerHTML={{ __html: dynamicFontsCSS }} />
      )}
      
      {/* 1. ESTE ES EL ÚNICO FONDO QUE DEBE EXISTIR */}
      <DynamicBackground type={activeBg.type} colors={activeBg.colors} />

      <section className="timeline">
        {eras.map((era: Era) => (
          <div key={era.id} className="__era-group">
            <div className="era-intro">
              <h2>{era.title}</h2>
              <span>{era.startYear} - {era.endYear || "Present"}</span>
              <p>{era.description}</p>
            </div>

            {era.albums?.map((album: Album) => {
              const [firstHalfTracks, secondHalfTracks] = splitArrayInHalf(album.tracks || []);

              return (
                <motion.div 
                  key={album.id} 
                  className="timeline__album"
                  onViewportEnter={() => {
                    // LOG DE DEPURACIÓN: Verifica esto en tu consola
                    console.log(`🎯 Álbum activo: ${album.title}`);
                    console.log(`🎨 Colores de Sanity:`, album.backColor);

                    setActiveBg({
                      type: (album.backgroundType as any) || 'blobs',
                      colors: album.backColor || ['#0a0807', '#2c241d', '#4d3d1a']
                    });
                  }}
                  viewport={{ amount: 0.3, margin: "-10% 0px -10% 0px" }}
                  style={{
                    '--album-color-1': album.color?.[0] || '#333',
                    '--album-color-2': album.color?.[1] || '#666',
                    '--album-color-3': album.color?.[2] || '#999',
                    '--album-font': album.fontFamily ? `'${album.fontFamily}', sans-serif` : 'inherit',
                  } as React.CSSProperties}
                >
                  {/* ... resto del bento grid (se mantiene igual) ... */}
                  <div className="album-bento">
                    <div className="album-bento__item album-bento__cover bento-cover">
                      <BentoCover3D 
                        cover={album.cover ? urlFor(album.cover).url() : ''} 
                        backCover={album.backCover ? urlFor(album.backCover).url() : ''} 
                        title={album.title} 
                      />
                    </div>
                    <div className="album-bento__item album-bento__title">
                      <h3>{album.title}</h3>
                      <span>{album.year}</span>
                    </div>
                    <div className="album-bento__item album-bento__tracklist">
                      <div className="bento-scroll-wrapper tracklist-grid">
                        <ol className="track-list">
                          {firstHalfTracks.map((track: Track, index: number) => (
                            <li key={`track-1-${track.number || index}-${index}`} className="track-item">
                              <span className="track-number">{track.number}</span>
                              <span className="track-info">
                                <span className="track-title">{track.title}</span>
                                {track.featuredArtists && <span className="track-featured">ft. {track.featuredArtists.join(", ")}</span>}
                              </span>
                            </li>
                          ))}
                        </ol>
                        <ol className="track-list">
                          {secondHalfTracks.map((track: Track, index: number) => (
                            <li key={`track-2-${track.number || index}-${index}`} className="track-item">
                              <span className="track-number">{track.number}</span>
                              <span className="track-info">
                                <span className="track-title">{track.title}</span>
                                {track.featuredArtists && <span className="track-featured">ft. {track.featuredArtists.join(", ")}</span>}
                              </span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                    <div className="album-bento__item album-bento__desc">
                      <div className="bento-scroll-wrapper desc-wrapper">
                        <p>{album.description}</p>
                      </div>
                    </div>
                    <div className="album-bento__item album-bento__concepts">
                      {album.themes && (
                        <div className="themes-grid">
                          {album.themes.map((t: string) => <span key={t} className="theme-pill">{t}</span>)}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ))}
      </section>
    </div>
  );
};

export default ErasTimelineSection;