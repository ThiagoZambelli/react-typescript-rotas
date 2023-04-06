import React from 'react';
import { ReactComponent as Logo } from 'assets/logoLithtleZ.svg';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

function Menu() {
  const rotas = [{
    label: 'Inicio',
    to: '/'
  }, {
    label: 'Cardapio',
    to: '/cardapio'
  }, {
    label: 'Sobre',
    to: '/sobre'
  }];


  return (
    <nav className={styles.menu}>
      <Logo className={styles.logo} />
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <Link className={styles.menu__link__ancora} to={rota.to}>{rota.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;