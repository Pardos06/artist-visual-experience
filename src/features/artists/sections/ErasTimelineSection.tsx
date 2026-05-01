import BentoCover3D from "../components/BentoCover3D";
import { urlFor } from "../../../lib/sanity";
import type { Era, Album, Track } from "../types/artist.types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DynamicBackground from "../components/DynamicBackground";

interface ErasTimelineProps {
  eras: Era[];
}

const splitArrayInHalf = <T,>(arr: T[]): [T[], T[]] => {
  const half = Math.ceil(arr.length / 2);
  return [arr.slice(0, half), arr.slice(half)];
};

const ErasTimelineSection = ({ eras }: ErasTimelineProps) => {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

  useEffect(() => {
    if (selectedAlbum) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [selectedAlbum]);

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

      <section className="timeline">
        {eras.map((era: Era) => (
          <div key={era.id} className="__era-group">
            
            <div className="era-intro">
              <div className="era-intro__header">
                <h2>{era.title}</h2>
                <span>{era.startYear} - {era.endYear || "Present"}</span>
                <p>{era.description}</p>
              </div>

              {era.milestones && era.milestones.length > 0 && (
                <div className="era-intro__milestones">
                  {era.milestones.map((moment: any, i: number) => (
                    <div key={i} className="moment-item">
                      <span className="moment-year">{moment.year}</span>
                      <p className="moment-desc">{moment.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="era-albums-hub">
              <div className="era-intro__album-grid">
                {era.albums?.map((album: Album) => (
                  <motion.div 
                    key={album.id} 
                    className="era-intro__album-card"
                    onClick={() => setSelectedAlbum(album)}
                    whileHover={{ y: -10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {album.cover && (
                      <img src={urlFor(album.cover).url()} alt={album.title} />
                    )}
                    <h3>{album.title}</h3>
                    <small>{album.year}</small>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* --- VISTA EMERGENTE: MODAL DEL ÁLBUM SELECCIONADO --- */}
      <AnimatePresence>
        {selectedAlbum && (
          <motion.div 
            className="album-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <DynamicBackground 
              type={selectedAlbum.backgroundType || 'blobs'} 
              colors={selectedAlbum.backColor || ['#0a0807', '#2c241d', '#4d3d1a']} 
            />

            <button 
              className="album-modal-close" 
              onClick={() => setSelectedAlbum(null)}
            >
              ✕
            </button>

            <motion.div 
              className="timeline__album"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              style={{
                position: 'relative',
                zIndex: 10,
                '--album-color-1': selectedAlbum.color?.[0] || '#333',
                '--album-color-2': selectedAlbum.color?.[1] || '#666',
                '--album-color-3': selectedAlbum.color?.[2] || '#999',
                '--album-font': selectedAlbum.fontFamily ? `'${selectedAlbum.fontFamily}', sans-serif` : 'inherit',
              } as React.CSSProperties}
            >
              <div className="album-bento">
                
                <div className="album-bento__item album-bento__cover bento-cover">
                  <BentoCover3D 
                    cover={selectedAlbum.cover ? urlFor(selectedAlbum.cover).url() : ''} 
                    backCover={selectedAlbum.backCover ? urlFor(selectedAlbum.backCover).url() : ''} 
                    title={selectedAlbum.title} 
                  />
                </div>

                <div className="album-bento__item album-bento__title">
                  <h3>{selectedAlbum.title}</h3>
                  <span>{selectedAlbum.year}</span>
                </div>

                <div className="album-bento__item album-bento__tracklist">
                  <div className="bento-scroll-wrapper tracklist-grid">
                    <ol className="track-list">
                      {splitArrayInHalf(selectedAlbum.tracks || [])[0].map((track: Track, index: number) => (
                        <li key={`track-1-${track.number || index}-${index}`} className="track-item">
                          <span className="track-number">{track.number}</span>
                          <span className="track-info">
                            <span className="track-title">{track.title}</span>
                            {track.featuredArtists && track.featuredArtists.length > 0 && (
                              <span className="track-featured">ft. {track.featuredArtists.join(", ")}</span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ol>

                    <ol className="track-list">
                      {splitArrayInHalf(selectedAlbum.tracks || [])[1].map((track: Track, index: number) => (
                        <li key={`track-2-${track.number || index}-${index}`} className="track-item">
                          <span className="track-number">{track.number}</span>
                          <span className="track-info">
                            <span className="track-title">{track.title}</span>
                            {track.featuredArtists && track.featuredArtists.length > 0 && (
                              <span className="track-featured">ft. {track.featuredArtists.join(", ")}</span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div> 
                </div>
                  
                <div className="album-bento__item album-bento__desc">
                  <div className="bento-scroll-wrapper desc-wrapper">
                    <p>{selectedAlbum.description}</p>
                  </div>
                </div>

                <div className="album-bento__item album-bento__concepts">
                  {selectedAlbum.themes && selectedAlbum.themes.length > 0 && (
                    <div className="themes-grid">
                      {selectedAlbum.themes.map((t: string) => (
                        <span key={t} className="theme-pill">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
                
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ErasTimelineSection;