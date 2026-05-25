import { useState, useEffect} from 'react';
import "./App.css";
import RodrigoCard from './Components/RodrigoCard/RodrigoCard';
import RodrigoButton from './Components/RodrigoButton/RodrigoButton';
import Christus from './assets/christus.png';
import DeoGloria from  './assets/deo gloria.png';
import Fide from './assets/fide.png'
import Gratia from './assets/gratia.png'
import Scriptura from './assets/sola-scriptura.png'



function App() {
   const [listaSola, setlistaSola] = useState([
        {nome:"Fide", importancia: "Fé", caminhoImagem:Fide, nomeButton:"Fide"},
        {nome:"Gratia", importancia: "Graca", caminhoImagem:Gratia, nomeButton: "Gratia"},
        {nome: "Christus", importancia: "Filho" , caminhoImagem:Christus, nomeButton: "Christus"},
        {nome: "Scriptura", importancia: "Escrituras", caminhoImagem:Scriptura, nomeButton: "Scriptura"},
        {nome: "Deo Gloria", importancia: "Somente a Deus Gloria", caminhoImagem: DeoGloria, nomeButton: "Deo Glória" },
    ]);


  const [pilaresReforma, setpilaresReforma ] = useState(0)

  
    useEffect(() => {
      console.log('Executa toda vez que o valor da dependencia é alterado')
      console.log(listaSola)

    // //   let pokemonsEvoluidos = listaSola.filter(sola => sola.importancia=== 1)

    //   // eslint-disable-next-line react-hooks/set-state-in-effect
    //   setpilaresReforma(pokemonsEvoluidos.length)

    },[listaSola])




  function reforma(nomeSola){

    const novaLista = listaSola.map((sola) => {

      // console.log(sola)

      // Verificar qual sola foi clicado.
      if (sola.nome === nomeSola){

        // Pega a próxima evolução no nosso "Banco de dados"
        const proximaEvolucao = pokemons[sola.nome].evolucao;

        // console.log(proximaEvolucao)

        // Caso nao exista proxima evolução, retorna o mesmo sola (ele nao evoluira).
        if(!proximaEvolucao){
          return sola;
        }

        // Retorna o Pokemon evoluido caso atenda as condições
        return {
          nome: proximaEvolucao,
          fundamento: sola.fundamento + 1,
        //   caminhoImagem: sola[proximaEvolucao].imagem
        }

      }
      // Só retorna o sola que nao foi clicado
      return sola

    })

    setlistaSola(novaLista)
  }

  return (
    <>
      <h1>Sola!</h1>

      <h2>Pilares da Reforma: {listaSola.length}</h2>
     

      <section id="center">
        {
        listaSola.map((sola,index) => (
          <RodrigoCard
            key={index}
            nome={sola.nome}
            fundamento={sola.fundamento}
            caminhoImagem={sola.caminhoImagem}
            pontoReforma={() => reforma(sola.nome)}
            nomeButton={sola.nomeButton}
          />
        ))
        }


       

        <RodrigoButton  
          titulo={'Somente a Graça!'}
          cor='red'
        />

        <RodrigoButton  
          titulo={'Somente a Fé!'}
          cor='white'
          corDaLetra={'black'}
        />

        <RodrigoButton  
          titulo={'Somente o Filho!'}
          cor='yellow'
          corDaLetra={'black'}
        />

        <RodrigoButton/>


      </section>
    </>
  );


}

export default App;
