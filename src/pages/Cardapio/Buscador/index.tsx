import styles from './Buscador.module.scss'
import { CgSearch } from 'react-icons/cg'

interface IBuscador {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

function Buscador({busca, setBusca }: IBuscador) {
  return (
    <div className={styles.buscador}>
      <input
        placeholder='Buscar'
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
      />
      <CgSearch 
        size={20}
        color='#221F3B'
      />     
    </div>
  )
}

export default Buscador