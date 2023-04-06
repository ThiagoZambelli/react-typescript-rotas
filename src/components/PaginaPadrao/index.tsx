import Footer from 'components/Footer';
import styles from './PaginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';
import stylesTema from 'styles/Tema.module.scss';

function PaginaPadrao() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>Codificando a sua fome!</div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default PaginaPadrao;