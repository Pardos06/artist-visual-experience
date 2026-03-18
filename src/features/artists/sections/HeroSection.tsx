import { motion } from "framer-motion"
import type { Hero } from "../types/artist.types"

interface Props {
  hero: Hero
}

const HeroSection = ({ hero }: Props) => {
  return (
    <section className="hero">
      <motion.img
        src={hero.image}
        alt="artist"
        className="hero__image"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      <motion.div
        className="hero__overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <motion.h1
        className="hero__quote"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {hero.quote}
      </motion.h1>
    </section>
  )
}

export default HeroSection