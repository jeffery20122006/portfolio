import { ArrowUpRight, Laptop } from 'lucide-react'

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-wrap site-footer-inner">
        <a href="#top" className="footer-mark" aria-label="Back to top">JEFFERY<span>.</span>DEV</a>
        <div className="footer-illustration" aria-hidden="true">
          <span className="footer-screen"><Laptop size={21} /><i>&lt;/&gt;</i></span>
          <span className="footer-spark">✳</span>
        </div>
        <span className="footer-copyright">© Jeffery Ebenezer Paul</span>
        <a href="#top" className="back-top">BACK TO TOP <ArrowUpRight size={13} /></a>
      </div>
    </footer>
  )
}

export default SiteFooter
