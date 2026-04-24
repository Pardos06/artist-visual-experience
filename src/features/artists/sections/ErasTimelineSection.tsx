import BentoCover3D from "../components/BentoCover3D";
import { urlFor } from "../../../lib/sanity";
import type { Era, Album, Track } from "../types/artist.types";

interface ErasTimelineProps {
  eras: Era[];
}

const splitArrayInHalf = <T,>(arr: T[]): [T[], T[]] => {
  const half = Math.ceil(arr.length / 2);
  return [arr.slice(0, half), arr.slice(half)];
};

const ErasTimelineSection = ({ eras }: ErasTimelineProps) => {

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

  if (!eras || eras.length === 0) {
    return (
      <div className="timeline-wrapper">
        <section className="timeline">
          <div className="era-intro" style={{ opacity: 0.5 }}>
            <h2>No hay eras registradas para este artista.</h2>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="timeline-wrapper">
      {dynamicFontsCSS && (
        <style dangerouslySetInnerHTML={{ __html: dynamicFontsCSS }} />
      )}
      
      <div className="timeline-background">
        <div className="timeline-background__blobs"></div>
      </div>

      <section className="timeline">
        {eras.map((era: Era) => (
          <div key={era.id} className="__era-group">
            
            <div className="era-intro">
              <h2>{era.title}</h2>
              <span>
                {era.startYear} - {era.endYear || "Present"}
              </span>
              <p>{era.description}</p>
            </div>

            {era.albums?.map((album: Album) => {
              const [firstHalfTracks, secondHalfTracks] = splitArrayInHalf(album.tracks || []);

              return (
                <div 
                  key={album.id} 
                  className="timeline__album"
                  style={{
                    '--album-color-1': album.color?.[0] || '#333',
                    '--album-color-2': album.color?.[1] || '#666',
                    '--album-color-3': album.color?.[2] || '#999',
                    // Si hay fuente guardada, aplicamos la familia y un fallback a sans-serif. Si no, hereda del body.
                    '--album-font': album.fontFamily ? `'${album.fontFamily}', sans-serif` : 'inherit',
                  } as React.CSSProperties}
                >
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
                          {firstHalfTracks.map((track: Track) => (
                            <li key={track.number} className="track-item">
                              <span className="track-number">{track.number}</span>
                              <span className="track-info">
                                <span className="track-title">{track.title}</span>
                                {track.featuredArtists && track.featuredArtists.length > 0 && (
                                  <span className="track-featured">ft. {track.featuredArtists.join(", ")}</span>
                                )}
                              </span>
                              {track.duration && <span className="track-duration">{track.duration}</span>}
                            </li>
                          ))}
                        </ol>

                        <ol className="track-list">
                          {secondHalfTracks.map((track: Track) => (
                            <li key={track.number} className="track-item">
                              <span className="track-number">{track.number}</span>
                              <span className="track-info">
                                <span className="track-title">{track.title}</span>
                                {track.featuredArtists && track.featuredArtists.length > 0 && (
                                  <span className="track-featured">ft. {track.featuredArtists.join(", ")}</span>
                                )}
                              </span>
                              {track.duration && <span className="track-duration">{track.duration}</span>}
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
                      {album.themes && album.themes.length > 0 && (
                        <div className="themes-grid">
                          {album.themes.map((t: string) => (
                            <span key={t} className="theme-pill">{t}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </section>
    </div>
  );
};

export default ErasTimelineSection;