import { useState, useEffect} from 'react';
import { sola } from "../data/Sola";

import RodrigoCard from '../Components/RodrigoCard/RodrigoCard';
import RodrigoButton from '../Components/RodrigoButton/RodrigoButton';
import bannerReforma from "../assets/banner-reforma.jpg"; 




function Home() {
   const [listaSola, setlistaSola] = useState(sola);


  const [pilaresReforma, setpilaresReforma ] = useState(0)

  
    useEffect(() => {
      console.log('Executa toda vez que o valor da dependencia é alterado')
      console.log(listaSola)



    },[listaSola])




  function reforma(nomeSola){

    const novaLista = listaSola.map((sola) => {

      

      // Verificar qual sola foi clicado.
      if (sola.nome === nomeSola){

  
        if(!proximaEvolucao){
          return sola;
        }

       
        return {
          nome: proximaEvolucao,
          importancia: sola.importancia + 1,
        
        }

      }
  
      return sola

    })

    setlistaSola(novaLista)
  }

  return (
    <>


    
{/* 
      <div className="bannerPrincipal"
    style={{ backgroundImage: `url(${bannerReforma})`
    }}
>
    <div className="bannerConteudo">
        <h1>As Cinco Solas</h1>
        <p>Os princípios fundamentais da Reforma Protestante</p>
    </div>
</div> */}

      <h1>Sola!</h1>

      <h2>Pilares da Reforma: {listaSola.length}</h2>
     

     

      <section className="containerCards">
      {
        listaSola.map((sola, index) => (
         <RodrigoCard
          key={index}
          sola={sola.nome}
          importancia={sola.importancia}
          caminhoImagem={sola.caminhoImagem}
          pontoReforma={() => reforma(sola.nome)}
          nomeButton={sola.nomeButton}
          id={sola.id}
        />
        ))
      }
    </section>


    </>
  )
}





export default Home;