import type { Influence } from "../types/artist.types"

interface Props {
  influence: Influence[]
}

const InfluenceSection = ({ influence }: Props) => {
  return (
    <section className="influence section">
      <div className="container">
        <h2>Influence</h2>

        {influence.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default InfluenceSection