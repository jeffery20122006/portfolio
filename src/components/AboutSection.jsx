import { ArrowDownRight, Code2, Sparkles } from 'lucide-react'

function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="section-wrap about-inner">
        <div className="about-heading">
          <p className="eyebrow">02 / A LITTLE ABOUT ME</p>
          <h2 id="about-title">THE HUMAN BEHIND<br /><span>THE CODE</span></h2>
          <Sparkles className="about-heading-spark" size={24} aria-hidden="true" />
        </div>

        <div className="about-layout">
          <div className="about-portrait-wrap">
            <span className="portrait-orbit portrait-orbit-one" aria-hidden="true" />
            <span className="portrait-orbit portrait-orbit-two" aria-hidden="true" />
            <span className="portrait-scribble portrait-scribble-one" aria-hidden="true">✳</span>
            <span className="portrait-scribble portrait-scribble-two" aria-hidden="true">〰</span>
            <svg className="about-portrait" viewBox="0 0 380 390" role="img" aria-labelledby="portrait-title portrait-desc">
              <title id="portrait-title">Illustrated portrait of Jeffery</title>
              <desc id="portrait-desc">A cheerful cartoon developer in a purple shirt, working at a laptop.</desc>
              <defs>
                <linearGradient id="portraitBackground" x1="48" y1="35" x2="326" y2="365" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#302449" />
                  <stop offset="1" stopColor="#171522" />
                </linearGradient>
                <linearGradient id="portraitSkin" x1="141" y1="110" x2="228" y2="230" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F4BD91" />
                  <stop offset="1" stopColor="#D98F68" />
                </linearGradient>
              </defs>
              <path d="M68 48C112 12 272 24 311 91c34 59-1 232-53 265-52 33-184 15-218-45C8 251 23 86 68 48Z" fill="url(#portraitBackground)" />
              <circle cx="292" cy="89" r="19" fill="#D6FF4F" opacity=".9" />
              <path d="M292 78v22M281 89h22" stroke="#211A2F" strokeWidth="3" strokeLinecap="round" />
              <path d="M70 280c13-60 54-85 121-85s110 24 123 85v55H70v-55Z" fill="#A77BFF" stroke="#211829" strokeWidth="5" />
              <path d="m156 196 35 40 34-40v-32h-69v32Z" fill="#D99067" />
              <path d="M121 110c0-47 29-75 70-75 44 0 72 31 72 76v67c0 42-32 73-72 73-39 0-70-31-70-73v-68Z" fill="url(#portraitSkin)" stroke="#281D31" strokeWidth="5" />
              <path d="M116 128c-10-58 19-99 70-101 55-2 82 32 79 94-13-4-26-19-32-36-28 20-70 28-110 21l-7 22Z" fill="#251931" stroke="#281D31" strokeWidth="5" strokeLinejoin="round" />
              <path d="M125 119c-13 15-12 46-4 58M253 118c12 16 12 45 3 59" fill="none" stroke="#281D31" strokeWidth="10" strokeLinecap="round" />
              <ellipse cx="160" cy="151" rx="5" ry="7" fill="#2A1C2A" />
              <ellipse cx="218" cy="151" rx="5" ry="7" fill="#2A1C2A" />
              <path d="M174 179c8 10 21 10 29 0" fill="none" stroke="#783E43" strokeWidth="4" strokeLinecap="round" />
              <ellipse cx="141" cy="171" rx="10" ry="5" fill="#F0807D" opacity=".38" />
              <ellipse cx="237" cy="171" rx="10" ry="5" fill="#F0807D" opacity=".38" />
              <path d="m163 202 28 29 29-29" fill="#EEE4FF" />
              <path d="M77 284c31-22 61-31 94-34h29c36 2 69 13 101 35v51H77v-52Z" fill="#A77BFF" />
              <path d="M172 286h35" stroke="#D6FF4F" strokeWidth="4" strokeLinecap="round" />
              <text x="176" y="307" fill="#EEE4FF" fontFamily="monospace" fontSize="16" fontWeight="700">&lt;/&gt;</text>
              <path d="M82 313h219l20 27H62l20-27Z" fill="#8C72BF" stroke="#302742" strokeWidth="5" strokeLinejoin="round" />
              <path d="M98 257h187a10 10 0 0 1 10 10v48H88v-48a10 10 0 0 1 10-10Z" fill="#171324" stroke="#302742" strokeWidth="5" />
              <path d="m159 285 14 14-14 14M196 313l17-28" fill="none" stroke="#62E5E1" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M50 109c14-19 31-28 52-31" fill="none" stroke="#FF9B5E" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 8" />
            </svg>
            <div className="about-cgpa-badge" aria-label="CGPA 9.3 out of 10">
              <span>CGPA</span>
              <strong>9.3</strong>
              <small>OUT OF 10</small>
            </div>
            <span className="about-arrow" aria-hidden="true"><ArrowDownRight size={42} /></span>
          </div>

          <div className="about-content">
            <p>I'm Jeffery Ebenezer Paul, a Computer Science and Engineering student who enjoys exploring software development, Python, full-stack technologies, and AI/ML.</p>
            <p>I like understanding how technology works, experimenting with ideas, and developing practical solutions through programming.</p>
            <p>My current focus is strengthening my software engineering skills, building useful projects, and gaining real-world development experience.</p>

            <article className="about-education" id="education" aria-labelledby="about-education-title">
              <div className="about-education-top">
                <span className="about-education-icon"><Code2 size={19} /></span>
                <span className="about-education-label">CURRENT CHAPTER</span>
                <span className="about-education-year">THIRD YEAR</span>
              </div>
              <h3 id="about-education-title">B.E. Computer Science<br />and Engineering</h3>
              <p className="about-education-school">Parisutham Institute of Technology and Science</p>
              <div className="about-education-bottom">
                <span>ACADEMIC SNAPSHOT</span>
                <strong>9.3 <small>/ 10 CGPA</small></strong>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
