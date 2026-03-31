import type { Overview } from "../types/artist.types";

interface Props {
    overview: Overview;
}

const OverviewSection = ({overview}: Props) => {
    return (
    <section className="overview section">
      <div className="container">
        <h2 className="overview__title">Overview</h2>

        <p className="overview__bio">
          {overview.biography}
        </p>

        <div className="overview__stats">
          <div>
            <span>Born</span>
            <p>{overview.born}</p>
          </div>

          <div>
            <span>Origin</span>
            <p>{overview.origin}</p>
          </div>

          <div>
            <span>Genres</span>
            <p>{overview.genres.join(", ")}</p>
          </div>

          <div>
            <span>Active</span>
            <p>{overview.activeYears}</p>
          </div>
        </div>
      </div>
    </section>
    )
}

export default OverviewSection;
