function SectionHeading({ index, title, id }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{index}</p>
      <h2 id={id}>{title}</h2>
    </div>
  )
}

export default SectionHeading