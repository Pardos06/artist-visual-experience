import { kanyeWest } from "../data/kanyeWest";
import HeroSection
 from "../sections/HeroSection";
const ArtistPage = () => {
    const artist = kanyeWest;
    return (
        <main>
            <HeroSection hero={artist.hero} />
            <h1>{artist.name}</h1>
            <p>{artist.hero.quote}</p>
        </main>
    )
}

export default ArtistPage;