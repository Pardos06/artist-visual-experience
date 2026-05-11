import type { Overview } from "../types/artist.types";

interface Props {
    overview: Overview;
}

const OverviewSection = ({ overview }: Props) => {
    if (!overview) return null;

    return (
        <section className="overview section">
            <div className="overview__container container">
                <h2 className="overview__title">Overview</h2>

                <p className="overview__bio">
                    {overview.biography}
                </p>

                <div className="overview__stats">
                    <div className="overview__stat-item">
                        <span className="overview__stat-label">Real Name</span>
                        <p className="overview__stat-value">{overview.realName}</p>
                    </div>

                    <div className="overview__stat-item">
                        <span className="overview__stat-label">Born</span>
                        <p className="overview__stat-value">{overview.born}</p>
                    </div>

                    <div className="overview__stat-item">
                        <span className="overview__stat-label">Origin</span>
                        <p className="overview__stat-value">{overview.origin}</p>
                    </div>

                    <div className="overview__stat-item">
                        <span className="overview__stat-label">Genres</span>
                        <p className="overview__stat-value">{overview.genres?.join(", ")}</p>
                    </div>

                    <div className="overview__stat-item">
                        <span className="overview__stat-label">Active</span>
                        <p className="overview__stat-value">{overview.activeYears}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OverviewSection;