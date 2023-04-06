![Alt text](src/assets/logoLithtleZ.svg)

&nbsp;


<img align="left" width="50%" style="margin-top:-20px" src="public/assets/eu.png">

</br>
</br>

<div dsplay="inline-block">

<h2 align="justify">React: conhecendo a biblioteca React Router</h2>
<h2 align="justify">Feito por : Thiago Zambelli</h2>
<h3 align="justify">Projeto elaborado para ser uma refatoração do cardapio criado com React e TypeScript, saindo de um projeto estatico para um com rotas dinamocas.</h3>
 
  <a href="https://www.linkedin.com/in/thiagozambelli">
    <img width="80px" src="https://i.ibb.co/RyZx12b/linkedin.png" alt="linkedin" style="vertical-align:top;">
  </a>
</div>

&nbsp;

---

# Problemass e soluções:

&nbsp;

---

# Aulas:

&nbsp;

---

# P.S -> Por se tratar de uma Refatoração de um projeto antigo, toda a documentação do anterios se encontra deste ponto em diante !

&nbsp;

---

# Problemass e soluções:

## Criação do projeto:
  > `npx create-react-app ./ --template typescript --use-npm`

&nbsp;

## Instalação do css module e do SASS:
  > `npm install -D typescript-plugin-css-modules sass`

&nbsp;

## SVGs:
  > SVGs  podem ser utilizadas como componentes React ao importalas como React.Components:
  - Ex. `import {ReactComponent as nomeDaSVG} from 'caminho/para/SVG'`
  > SVGs não podem ser usadas como imgs normais pois o build interpreta elas como uma `string` e não uma imagem.

&nbsp;

## Importação absoluta:
  > De maneira geral, as importações em Javascript são feitas de maneira `Relativa`, ou seja: O caminho da importação é feito relativo ao componente onde a importação esta sendo feita.

  > Mas podemos mudar isso com o `Absolut Import`, criando uma Url padrao como caminho de inicio para as importações. No JavaScript normal isso é feito criando um arquivo `jsConfig.js`. No TypeScript nos podemos apenas colocar `"baseUrl": "src"` no arquivo `tsconfig.json` que ja é gerado por padrão pelo `create-react-app` com modulo de TypeScript.

&nbsp;

## Normalize.css:
  > Devido a algum erro na importação do Normalize, foi feito o comando `npm i normalize.css` e em seguida foi importado o mesmo no index.tsx do src, antes do arquivi css normal do index (`import "normalize.css"`);

&nbsp;

## `react-icons`:
  > A biblioteca `react-icons` tras uma variação gigantesca de icones que podem ser utilizados pelo React.

  - E.x:

  ~~~JavaScript
    <CgSearch 
        size={20}
        color='#221F3B'
      /> 
  ~~~


  - E.x de `import`:

  ~~~JavaScript
    import { CgSearch } from 'react-icons/cg' 
  ~~~
  
&nbsp;


## `type` / `typeof`:
  > Como interface das opções de filtros foi utilizado um `type` passando um `typeof` do JSON filtros.

  >Assim o type ja codificou a interface com tudo que tinha no JSON e deixando facil de atualizar, pois caso o JSON mude a interface tambem vai mudar.

  - E.x:

  ~~~JavaScript
    type IOpcao = typeof filtros[0]; 
  ~~~

&nbsp;

## `classNames`:
  > Biblioteca utilizada para fazer a concatenação dos styles do projeto

  - Instalando a biblioteca com o comando:

  ~~~JavaScript
    npm i classnames
  ~~~

 - Import:

  ~~~JavaScript
    import classNames from 'classnames';
  ~~~

&nbsp;

## `!aberto`:
  > Com um valor booleano que precisa manter um estado (`useState`) e possivel por no set um `!valor`, pois assim ele vai setar o valos oposto ao que ja se encontra.

  - E.x :

  ~~~JavaScript
    const [aberto, setAberto] = useState(false);

    onClick={() => setAberto(!aberto)}
  ~~~ 

&nbsp;

## Menu aberto e fechado:
  > Com o css selecionamos o display aberto ou fechado do elemento com um booleano e dando `onClick` e `onBlur`

  - E.x :

  ~~~JavaScript
    <button 
      className={styles.ordenador} 
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
  ~~~ 

&nbsp;

## Passando um Obj inteiro como prop:
  > Para passar todo o Obj como prop, basta dar um spread dele dentro do componente

  - E.x :

  ~~~JavaScript
     {cardapio.map((item)=> (
            <Item 
              key={item.id}
              {...item}
            />
      ))}
  ~~~ 

&nbsp;

## `npm run build`
  > O npm run build, gera uma pasta de build dentro do projeto, o que é muito util para verificar como as coisas estao sendo passadas e montadas na hora de rodar o codigo.

  - E.x :

  ~~~JavaScript
     npm run build
  ~~~ 

&nbsp;

## Filtros -> Filtro:
  > Usa um ID de filtro em botoes, com um useEffect escutando, para ordenar a lista de itens a ser renderizado pelos IDs de filtro.

  - E.x :

  ~~~JavaScript
      function testaFiltro(id: number) {
        if(filtro !== null) return filtro === id;
        return true;
      }
  ~~~ 

&nbsp;

## Filtros -> Busca:
  > O filtro de busca, passa o useEffects com um escutador no Busca do imput (que é um useState) para filtrar a lista de itens a ser renderizados

  - E.x :

  ~~~JavaScript
     function testaBusca(title: string) {
        const regex = new RegExp(busca, 'i');
        return regex.test(title);
      }
  ~~~ 
  > P.s.: O `'i'` dentro do `RegExp` é para ignirar o toUpercase

&nbsp;


## Filtros -> Ordenador:
  > O filtro de ordenador usa um `useEffects` escutando o Ordenador e passa toda a lista que ira ser renderizada por um `switch/case` e retornando uma nova lista ordenada (ou a original no caso do default)

  - E.x :

  ~~~JavaScript
     function ordenar(novaLista: typeof cardapio){
        switch(ordenador){
          case 'porcao':
            return novaLista.sort((a, b) => a.size > b.size ? 1 : -1);
          case 'qtd_pessoas':
            return novaLista.sort((a,b)=> a.serving > b.serving ? 1 : -1)
          case 'preco':
              return novaLista.sort((a,b)=> a.price > b.price ? 1 : -1)
          default:
            return novaLista
        }
      }
  ~~~ 

&nbsp;

---

# Aulas :

### Aula 1:

- Criar projetos usando Create React App;
- Vimos como podemos usar templates, como typescript para criar projetos com CRA e depois removemos o que não será utilizado neste projeto;
- Usar CSS Modules com TypeScript e Sass;
- Aplicamos estilos escritos em Sass via CSS Modules e adicionamos a capacidade do Visual Studio Code oferecer autocomplete dos módulos de estilos com typescript-plugin-css-modules.

### Aula 2:

- Importar um svg;
  - Vimos como o webpack entende aquela string que fornecemos ao src da tag img e porque não funciona, então, aprendemos como importar um svg da forma correta.
- Utilizar um svg como componente;
  - Melhoramos a nossa logo alterando a tag img por um componente que se torna um svg no final.
- Imports absolutos;
  - Aprendemos como configurar e utilizar os imports absolutos para evitar voltar muitas pastas ao importar um arquivo.
- Utilizar a biblioteca reset css para resetar o css;
  - Resetamos os estilos da nossa página utilizando uma biblioteca chamada reset.css que nos ajuda a limpar os estilos padrões de cada elemento de acordo com cada navegador.

### Aula 3:

- Importar fontes externas
  - Aprendemos como importar fontes externas no nosso projeto utilizando o google fonts.
- Utilizar o normalize.css
  - Utilizamos o normalize.css para padronizar os estilos da página html em cada navegador.
- Utilizar ícones
  - Aprendemos como é fácil utilizar ícones com a biblioteca react-icons.
- Ignorar arquivos para build
  - Vimos como ignorar arquivos no momentos de build para que sejam utilizados apenas quando os chamar.
- Criar variáveis css
  - Criamos variáveis css para nos auxiliar na padronização dos estilos da página, evitando repetição e facilitando na manutenção de código.

### Aula 4:

- Inferir o tipo de um objeto
  - O operador typeof nos permite inferir a tipagem de um objeto sem a necessidade de criar uma interface.
- Manipulação de objetos
  - Utilizamos [] em volta do nome da chave de um objeto quando o valor da chave é dinâmico.
- Biblioteca classnames
  - Essa biblioteca nos permite concatenar classes CSS utilizando sintaxe de objetos.

### Aula 4:

- Renderizar uma lista de componentes
  - Podemos utilizar o spread operator para não precisar passar as props manualmente quando temos total controle do componente.
- Utilizar a pasta public
  - Arquivos estáticos que devem ser referenciados dinamicamente precisam estar dentro dessa pasta.
- Gerar os arquivos utilizados em produção
  - Com o comando npm run build podemos verificar quais arquivos estarão presentes no ambiente de produção.

### Aula 4:

- Buscar com expressão regular
  - Utilizar expressões regulares em buscas de textos.
- Manipular elementos de uma lista
  - Alterar a quantidade ou ordenar os elementos de uma lista com métodos filter e sort.
- Tipar o useState
  - Escrever useState <Tipo> para tipar o state e o setState.