function ActionLink({ href, variant = 'purple', children }) {
  return <a className={`action-link action-link-${variant}`} href={href}>{children}</a>
}

export default ActionLink