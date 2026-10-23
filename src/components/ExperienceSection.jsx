import { ArrowDownRight, BadgeCheck, Braces, Cloud, Cpu, Sparkles } from 'lucide-react'

const internships = [
  {
    domain: 'Java Programming',
    organization: 'Marcello Tech',
    duration: '15 days',
    description: 'A 15-day internship focused on Java programming.',
    icon: Braces,
    accent: 'purple',
  },
  {
    domain: 'Cloud Computing',
    organization: 'Fantacy Solutions',
    duration: '10 days',
    description: 'A 10-day internship focused on cloud computing.',
    icon: Cloud,
    accent: 'cyan',
  },
  {
    domain: 'Artificial Intelligence and Machine Learning',
    organization: 'ThiranX',
    duration: '10 days',
    description: 'A 10-day internship focused on artificial intelligence and machine learning.',
    icon: Cpu,
    accent: 'lime',
  },
]

const certifications = ['Java Programming', 'Cloud Computing', 'Python']

function ExperienceSection() {
  return (
    <>
      <section className="experience-section" id="experience" aria-labelledby="experience-title">
        <div className="section-wrap experience-inner">
          <div className="experience-heading">
            <p className="eyebrow">04 / THE EXPERIENCE</p>
            <h2 id="experience-title">WHERE I'VE BEEN<br /><span>LEARNING</span></h2>
            <p>Short experiences, new perspectives, and more to learn.</p>
            <span className="experience-heading-spark" aria-hidden="true">✳</span>
          </div>

          <div className="internship-list">
            {internships.map((internship, index) => {
              const Icon = internship.icon
              return (
                <article className={`internship-card internship-${internship.accent}`} key={internship.organization}>
                  <div className="internship-marker" aria-hidden="true"><Icon size={19} /></div>
                  <div className="internship-content">
                    <div className="internship-meta">
                      <span>INTERNSHIP <i /> {internship.duration.toUpperCase()}</span>
                      <span className="internship-index">0{index + 1}</span>
                    </div>
                    <h3>{internship.domain}</h3>
                    <p className="internship-organization">{internship.organization}</p>
                    <p className="internship-description">{internship.description}</p>
                  </div>
                  <ArrowDownRight className="internship-arrow" size={20} aria-hidden="true" />
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="certifications-section" id="certifications" aria-labelledby="certifications-title">
        <div className="section-wrap certifications-inner">
          <div className="certifications-heading">
            <div>
              <p className="eyebrow">05 / KEEP LEARNING</p>
              <h2 id="certifications-title">CERTIFICATIONS<span>.</span></h2>
            </div>
            <p>Areas of study represented in my certification collection.</p>
          </div>
          <div className="certificate-grid">
            {certifications.map((title, index) => (
              <article className={`certificate-card certificate-card-${index + 1}`} key={title}>
                <span className="certificate-doodle" aria-hidden="true">{index === 1 ? '✦' : '✳'}</span>
                <BadgeCheck size={22} aria-hidden="true" />
                <h3>{title}</h3>
                <span className="certificate-caption">CERTIFICATE</span>
              </article>
            ))}
          </div>
          <p className="certificate-note"><Sparkles size={14} aria-hidden="true" /> Certificate files and verification links were not supplied.</p>
        </div>
      </section>
    </>
  )
}

export default ExperienceSection
