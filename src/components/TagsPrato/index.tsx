import React from 'react';
import classNames from 'classnames';
import styles from './TagsPrato.module.scss';
import { Prato } from 'types/IPrato';

export default function TagsPrato({ category, size, serving, price }: Prato) {
  return (
    <div className={styles.tags}>
      <div className={classNames({
        [styles.tipo]: true,
        [styles[`tipo__${category.label.toLowerCase()}`]]: true
      })}>
        {category.label}
      </div>
      <div className={styles.porcao}>
        {size}g
      </div>
      <div className={styles.qtdpessoas}>
                Serve {serving} pessoa{serving === 1 ? '' : 's'}
      </div>
      <div className={styles.valor}>
                R$ {price.toFixed(2)}
      </div>
    </div>
  );
}
