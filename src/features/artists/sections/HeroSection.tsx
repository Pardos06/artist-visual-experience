import { motion } from "framer-motion";
import type { Hero } from "../types/artist.types";

interface Props {
  hero: Hero;
}

const HeroSection = ({ hero }: Props) => {
  if (!hero) return null;

  return (
    <section className="hero">
      {hero.imagesHero && (
        <motion.img
          src={hero.imagesHero}
          alt={hero.artistName || "Artist Hero"}
          className="hero__image"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      )}

      <motion.div
        className="hero__overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <div className="hero__content">
        {hero.artistName && (
          <motion.h1
            className="hero__name"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          >
            {hero.artistName}
          </motion.h1>
        )}

        {hero.quote && (
          <motion.blockquote
            className="hero__quote"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          >
            "{hero.quote}"
          </motion.blockquote>
        )}
      </div>
    </section>
  );
};

export default HeroSection;