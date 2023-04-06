import styles from './Ordenador.module.scss'
import opcoes from './opcoes.json'
import { useState } from 'react'
import ClassNames from 'classnames'
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi';
import classNames from 'classnames';

interface Props {
  ordenador: string,
  setOrdenador: React.Dispatch<React.SetStateAction<string>>
}


function Ordenador({ ordenador, setOrdenador }: Props) {
  const [aberto, setAberto] = useState(false);

  const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome

  return (
    <button
      className={classNames({
        [styles.ordenador]: true,
        [styles["ordenador--ativo"]]: ordenador !== ""
      })}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
      <span>{nomeOrdenador || "Ordenar Por"}</span>
      {aberto ? <BiUpArrowAlt size={20} color='#221F3B' /> : <BiDownArrowAlt size={20} color='#221F3B' />}
      <div className={ClassNames({
        [styles.ordenador__options]: true,
        [styles["ordenador__options--ativo"]]: aberto
      })}>
        {opcoes.map(e => (
          <div
            className={styles.ordenador__option}
            key={e.value}
            onClick={() => setOrdenador(e.value)}
          >
            {e.nome}
          </div>
        ))}
      </div>
    </button>
  )
}

export default Ordenador

