export default function Link ({ href, className, label, isActive, onClick }) {
  const styles = {
    link: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    indicator: {
      width: 30,
      height: 3,
      background: '#212621',
      borderRadius: 2,
      opacity: isActive ? 1 : 0,
    },
    a: {
      paddingBottom: '0.5rem'
    }
  }
  return (
    <div className="link" style={styles.link}>
      <a href={href} className={className}
        onClick={onClick}
        style={styles.a}
      >{label}</a>
      <div className="link__indicator" style={styles.indicator}/>
    </div>
  )
}
