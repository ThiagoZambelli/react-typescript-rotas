import styles from './PaginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';

function PaginaPadrao() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>Codificando a sua fome!</div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default PaginaPadrao;