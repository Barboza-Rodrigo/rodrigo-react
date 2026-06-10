import "./RodrigoCard.css";
import { Link } from "react-router-dom";
import RodrigoButton from "../RodrigoButton/RodrigoButton";




function RodrigoCard({sola,caminhoImagem,importancia, pontoReforma, nomeButton, id= 'Botão Padrão' }){
    return (
         <div className='CardReforma'>
            <Link to={`/rodrigo-react/${id}`}>

            

            <img
                 
                    className="imagemCard"
                    src={caminhoImagem}
                    width={260}
                    height={280}
                    alt={sola}
                    title={sola}
/>
            
             
            </Link>
            
            <h2>{sola}</h2>
            <p>Fundamento: {importancia}</p>
            <div onClick={() => pontoReforma(sola)}>
            <RodrigoButton
              titulo={nomeButton}
              cor="#acb8ee"
              corDaFonte="#f4d03f"
              onClick={() => pontoReforma(sola)}
            />
            
        </div>
          </div>
    )
}
export default RodrigoCard
