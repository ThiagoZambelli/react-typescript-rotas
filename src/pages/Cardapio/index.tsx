import Buscador from './Buscador';
import styles from './Cardapio.module.scss';
import { useState } from 'react';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';
import stylesTema from 'styles/Tema.module.scss';



function Cardapio() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');

  return (  
        
    <section className={styles.cardapio}>
      <h3 className={stylesTema.titulo}>Cardapio</h3>
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
  );
}

export default Cardapio;