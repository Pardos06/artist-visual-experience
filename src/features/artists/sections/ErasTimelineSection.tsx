import BentoCover3D from "../components/BentoCover3D";
import type { Era } from "../types/artist.types"

const splitArrayInHalf = <T,>(arr: T[]): [T[], T[]] => {
  const half = Math.ceil(arr.length / 2);
  return [arr.slice(0, half), arr.slice(half)];
}

interface Props {
  eras: Era[]
}

const ErasTimelineSection = ({ eras }: Props) => {
  return (
    <div className="timeline-wrapper">
      
      <div className="timeline-background">
        <div className="timeline-background__blobs"></div>
      </div>

      <section className="timeline">
        {eras.map((era) => (
          <div key={era.id} className="__era-group">
            
            <div className="timeline__slide timeline__era">
              <h2>{era.title}</h2>
              <span>
                {era.startYear} - {era.endYear || "Present"}
              </span>
              <p>{era.description}</p>
            </div>

            {era.milestones && era.milestones.length > 0 && (
              <div className="timeline__slide timeline__milestones">
                <h3>Momentos Clave</h3>
                <ul className="milestone-list">
                  {era.milestones.map((milestone, index) => (
                    <li key={index} className="milestone-item">
                      <span className="milestone-date">{milestone.date}</span>
                      <h4 className="milestone-event">{milestone.event}</h4>
                      <p className="milestone-desc">{milestone.description}</p>
                      <span className="milestone-badge">{milestone.type}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {era.albums.map((album) => {
              const [firstHalfTracks, secondHalfTracks] = splitArrayInHalf(album.tracks || []);

              return (
                <div key={album.id} className="timeline__slide timeline__album">
                  <div className="album-bento">
                    
                    <div className="album-bento__item album-bento__cover bento-cover">
                      <BentoCover3D 
                        cover={album.cover} 
                        backCover={album.backCover} 
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
                          {firstHalfTracks.map((track) => (
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
                          {secondHalfTracks.map((track) => (
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
                          {album.themes.map(t => (
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
  )
}

export default ErasTimelineSection