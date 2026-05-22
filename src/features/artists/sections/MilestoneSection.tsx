import type { Milestone } from "../types/artist.types"

interface Props {
  Milestone: Milestone
}

const MilestoneSection = ({ Milestone }: Props) => {
  return (
    <section className="Milestone section">
      <div className="container">
        <h2>Milestone</h2>
        <p>{Milestone.year}</p>
        <p>{Milestone.description}</p>
        
      </div>
    </section>
  )
}

export default MilestoneSection