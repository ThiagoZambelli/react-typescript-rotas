import Buscador from './Buscador';
import styles from './Cardapio.module.scss';
import { ReactComponent as Logo } from 'assets/logoLithtleZ.svg'
import { useState } from 'react'
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';


function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null)
  const [ordenador, setOrdenador] = useState("")

  return (
    <main>
      <nav className={styles.nav}>
        <Logo className={styles.logo} />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>Codificando a sua fome!</div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardapio</h3>
        <Buscador 
          busca={busca} 
          setBusca={setBusca} 
        />
        <div className={styles.cardapio__filtros}>
            <Filtros
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <Ordenador
              ordenador={ordenador}
              setOrdenador={setOrdenador}
            />
        </div>
        <Itens 
          ordenador={ordenador}
          filtro={filtro}
          busca={busca}
        />
      </section>
    </main>
  )
}

export default Cardapio