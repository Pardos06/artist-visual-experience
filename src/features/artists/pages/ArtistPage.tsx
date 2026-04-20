import { kanyeWest } from "../data/kanye/kanyeWest";
import AwardsSection from "../sections/AwardSection";
import ErasTimelineSection from "../sections/ErasTimelineSection";
import ArtistFooter from "../sections/FooterSection";
import HeroSection from "../sections/HeroSection";
import InfluenceSection from "../sections/InfluenceSection";
import LegacySection from "../sections/LegacySection";
import OverviewSection from "../sections/OverviewSection";
const ArtistPage = () => {
    const artist = kanyeWest;
    return (
        <main className="page_sections">
            <HeroSection hero={artist.hero} />
            <OverviewSection overview={artist.overview} />
            <ErasTimelineSection eras={artist.eras} />
            <AwardsSection awards={artist.awards} />
            <InfluenceSection influence={artist.influence} />
            <LegacySection legacy={artist.legacy} />
            <ArtistFooter artist={artist.name} />
        </main>
    )
}

export default ArtistPage;