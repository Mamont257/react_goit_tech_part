import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const styles = {
    link: {
      display: 'inline-block',
      textDecoration: 'none',
      padding: 12,
      fontWeight: 700,
      color: '#2A363B',
    },
  };

  return (
    <nav>
      <NavLink to="/" style={styles.link}>
        Home
      </NavLink>
      <NavLink to="/tweets" style={styles.link}>
        Tweets
      </NavLink>
    </nav>
  );
}
