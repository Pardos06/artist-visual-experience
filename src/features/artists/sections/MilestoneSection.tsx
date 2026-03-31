import type { Milestone } from "../types/artist.types"

interface Props {
  Milestone: Milestone
}

const MilestoneSection = ({ Milestone }: Props) => {
  return (
    <section className="Milestone section">
      <div className="container">
        <h2>Milestone</h2>
        <p>{Milestone.date}</p>
        <p>{Milestone.event}</p>
        <p>{Milestone.description}</p>
        <p>Type: {Milestone.type}</p>
        
      </div>
    </section>
  )
}

export default MilestoneSection