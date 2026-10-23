import { useState } from 'react'
import { ArrowUpRight, Mail, Sparkles } from 'lucide-react'
import { siGithub } from 'simple-icons'

const emailAddress = 'jepixeler@gmail.com'

function SocialIcon({ icon }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={icon.path} fill={`#${icon.hex}`} />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 9h3.56v11.45H3.56V9Z" fill="currentColor" />
    </svg>
  )
}

function ContactSection() {
  const [formMessage, setFormMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const subject = encodeURIComponent(`Portfolio message from ${name}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nReply to: ${email}`)

    setFormMessage('Opening your email app with your message. If it does not open, email Jeffery directly.')
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`
  }

  return (
      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="section-wrap contact-inner">
          <span className="contact-doodle contact-doodle-one" aria-hidden="true">✳</span>
          <Sparkles className="contact-doodle contact-doodle-two" size={25} aria-hidden="true" />
          <p className="eyebrow">06 / YOUR TURN</p>
          <h2 id="contact-title">LET'S BUILD<br /><em>SOMETHING COOL!</em></h2>
          <p className="contact-copy">Have a project idea, internship opportunity, or an interesting technical challenge? I'd love to connect.</p>
          <a className="contact-cta" href={`mailto:${emailAddress}?subject=Let%27s%20connect`}>
            Say hello <ArrowUpRight size={18} />
          </a>

          <div className="contact-details" aria-label="Contact and social links">
            <a className="contact-detail" href={`mailto:${emailAddress}`}>
              <span className="contact-detail-icon"><Mail size={18} /></span>
              <span><small>EMAIL</small><strong>{emailAddress}</strong></span>
              <ArrowUpRight className="contact-detail-arrow" size={15} />
            </a>
            <a className="contact-detail" href="https://www.linkedin.com/in/j-jeffery-ebenezer-paul-b59023342/" target="_blank" rel="noopener noreferrer">
              <span className="contact-detail-icon"><LinkedInIcon /></span>
              <span><small>LINKEDIN</small><strong>Let's connect professionally</strong></span>
              <ArrowUpRight className="contact-detail-arrow" size={15} />
            </a>
            <a className="contact-detail" href="https://github.com/jeffery20122006" target="_blank" rel="noopener noreferrer">
              <span className="contact-detail-icon"><SocialIcon icon={siGithub} /></span>
              <span><small>GITHUB</small><strong>Explore my code</strong></span>
              <ArrowUpRight className="contact-detail-arrow" size={15} />
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <p className="contact-form-heading">Prefer a quick note?</p>
            <div className="contact-form-fields">
              <label>Name<input name="name" autoComplete="name" required maxLength="100" /></label>
              <label>Email<input name="email" type="email" autoComplete="email" required maxLength="254" /></label>
              <label className="contact-message-field">Message<textarea name="message" rows="3" required maxLength="2000" /></label>
            </div>
            <div className="contact-form-bottom">
              <button className="contact-form-submit" type="submit">Open in email app <Mail size={15} /></button>
              <p className="contact-form-note" aria-live="polite">{formMessage || 'This form opens your email app; it does not send directly.'}</p>
            </div>
          </form>
          <span className="contact-spark" aria-hidden="true">✦</span>
        </div>
      </section>
  )
}

export default ContactSection
