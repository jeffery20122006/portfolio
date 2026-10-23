import { BrainCircuit, Cloud, Coffee, ScanEye } from 'lucide-react'
import {
  siC,
  siCss,
  siEclipseide,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siNodedotjs,
  siPython,
  siReact,
} from 'simple-icons'

const skillGroups = [
  {
    name: 'Programming',
    accent: 'purple',
    skills: [
      { name: 'Python', icon: siPython },
      { name: 'Java', icon: Coffee, symbol: 'lucide' },
      { name: 'C', icon: siC },
    ],
  },
  {
    name: 'Frontend',
    accent: 'lime',
    skills: [
      { name: 'HTML', icon: siHtml5 },
      { name: 'CSS', icon: siCss },
      { name: 'JavaScript', icon: siJavascript },
      { name: 'React', icon: siReact },
    ],
  },
  {
    name: 'Backend',
    accent: 'cyan',
    skills: [{ name: 'Node.js', icon: siNodedotjs }],
  },
  {
    name: 'AI / Machine Learning',
    accent: 'orange',
    skills: [
      { name: 'YOLO', icon: ScanEye, symbol: 'lucide' },
      { name: 'AI/ML fundamentals', icon: BrainCircuit, symbol: 'lucide' },
    ],
  },
  {
    name: 'Development Tools',
    accent: 'purple',
    skills: [
      { name: 'Git', icon: siGit },
      { name: 'GitHub', icon: siGithub },
      { name: 'Eclipse IDE', icon: siEclipseide },
    ],
  },
  {
    name: 'Cloud',
    accent: 'cyan',
    skills: [{ name: 'Cloud computing fundamentals', icon: Cloud, symbol: 'lucide' }],
  },
]

function SkillMark({ icon, symbol }) {
  if (symbol === 'lucide') {
    const Icon = icon
    return <Icon size={25} strokeWidth={1.8} aria-hidden="true" />
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={icon.path} fill={`#${icon.hex}`} />
    </svg>
  )
}

function SkillGallery() {
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <div className="section-wrap skills-inner">
        <div className="skills-heading">
          <div className="section-heading">
            <p className="eyebrow">03 / THE TOOLKIT</p>
            <h2 id="skills-title">MY TECH<br /><span>TOOLKIT</span></h2>
          </div>
          <p className="skills-intro">Tools and technologies I'm learning, exploring, and using to build.</p>
          <span className="skills-heading-spark" aria-hidden="true">✳</span>
        </div>

        <div className="skill-groups">
          {skillGroups.map((group, index) => (
            <article className={`skill-group skill-group-${group.accent}`} key={group.name}>
              <div className="skill-group-heading">
                <span className="skill-group-index">0{index + 1}</span>
                <h3>{group.name}</h3>
                <span className="skill-group-spark" aria-hidden="true">{index % 2 === 0 ? '✳' : '✦'}</span>
              </div>
              <ul className="skill-gallery">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="skill-tile" title={skill.name} aria-label={skill.name} role="img" tabIndex={0}>
                      <span className="skill-tile-icon">
                        <SkillMark icon={skill.icon} symbol={skill.symbol} />
                      </span>
                      <span className="skill-tile-name">{skill.name}</span>
                      <span className="skill-tooltip" aria-hidden="true">{skill.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <span className="skills-doodle skills-doodle-one" aria-hidden="true">↗</span>
        <span className="skills-doodle skills-doodle-two" aria-hidden="true">〰</span>
      </div>
    </section>
  )
}

export default SkillGallery
