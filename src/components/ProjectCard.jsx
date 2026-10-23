import { ArrowUpRight, X } from 'lucide-react'
import { useRef } from 'react'

function ProjectCard({ project, featured = false }) {
  const dialogRef = useRef(null)
  const ProjectIcon = project.icon

  function closeOnBackdrop(event) {
    if (event.target === event.currentTarget) dialogRef.current?.close()
  }

  return (
    <article className={`project-card${featured ? ' project-card-featured' : ''} project-${project.theme}`}>
      <div className="project-card-art" aria-hidden="true">
        <span className="project-orbit project-orbit-one" />
        <span className="project-orbit project-orbit-two" />
        {featured ? (
          <>
            <div className="civic-window">
              <div className="civic-window-top"><span /><span /><span /><i>CIVICVISION / ISSUE MAP</i></div>
              <div className="civic-map">
                <span className="map-road map-road-one" />
                <span className="map-road map-road-two" />
                <span className="map-block map-block-one" />
                <span className="map-block map-block-two" />
                <span className="map-pin"><ProjectIcon size={19} /></span>
                <span className="map-scan"><i>ISSUE DETECTED</i><b>IMAGE ANALYSIS</b></span>
              </div>
            </div>
            <span className="project-card-spark">✳</span>
            <span className="civic-float-tag">AI / VISION</span>
          </>
        ) : (
          <>
            <div className="project-icon-orb"><ProjectIcon size={52} strokeWidth={1.35} /></div>
            <span className="project-card-spark">✳</span>
            <span className="project-art-label">{project.artLabel}</span>
          </>
        )}
      </div>

      <div className="project-card-copy">
        <div className="project-card-overline">
          <span className="project-label">{project.category}</span>
          <span className={`project-status project-status-${project.status.toLowerCase().replace(' ', '-')}`}>
            <i />{project.status}
          </span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="project-tech" aria-label="Technologies">
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <button className="project-view-button" type="button" onClick={() => dialogRef.current?.showModal()}>
          View Project <ArrowUpRight size={16} />
        </button>
      </div>

      <dialog
        className="project-dialog"
        ref={dialogRef}
        aria-labelledby={`project-dialog-${project.id}`}
        onClick={closeOnBackdrop}
      >
        <div className="project-dialog-content">
          <button className="project-dialog-close" type="button" aria-label="Close project details" onClick={() => dialogRef.current?.close()}>
            <X size={18} />
          </button>
          <p className="project-label">{project.category}</p>
          <span className={`project-status project-status-${project.status.toLowerCase().replace(' ', '-')}`}>
            <i />{project.status}
          </span>
          <h4 id={`project-dialog-${project.id}`}>{project.name}</h4>
          <p>{project.description}</p>
          <ul className="project-tech" aria-label="Technologies">
            {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
          <p className="project-dialog-note">This project is presented as a {project.status.toLowerCase()}; no public repository or live demo is currently linked.</p>
        </div>
      </dialog>
    </article>
  )
}

export default ProjectCard
