interface Props {
  artist: string
}

const ArtistFooter = ({ artist }: Props) => {
  return (
    <footer className="footer">
      <p>{artist} — Visual Experience</p>
    </footer>
  )
}

export default ArtistFooter