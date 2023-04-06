import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import miniEu from 'assets/eu.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img alt='Mini eu' src={miniEu} className={styles.footer__miniEu} />
      <p className={styles.footer__texto}>Projeto desenvolvido por: <Link className={styles.footer__ancora} to='https://meu-portfolio-neon-nu.vercel.app/'>Thiago Zambelli</Link></p>
    </footer>
  );
}
