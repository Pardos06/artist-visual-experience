import type { Award } from "../types/artist.types"

interface Props {
  awards: Award[]
}

const AwardsSection = ({ awards }: Props) => {
  return (
    <section className="awards section">
      <div className="container">
        <h2>Awards</h2>

        {awards.map((award, index) => (
          <div key={index}>
            <p>{award.name}</p>
            <span>{award.year}</span>
            <small>{award.category}</small>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AwardsSection