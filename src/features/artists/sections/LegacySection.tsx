import type { Legacy } from "../types/artist.types"

interface Props {
  legacy: Legacy
}

const LegacySection = ({ legacy }: Props) => {
  return (
    <section className="legacy section">
      <div className="container">
        <h2>Legacy</h2>
        <p>{legacy.summary}</p>
      </div>
    </section>
  )
}

export default LegacySection