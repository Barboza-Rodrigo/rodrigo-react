import { Link, useParams } from "react-router-dom";
import { sola } from "../data/Sola";
import "./Sola.css";

function Sola() {

    const { reformaId } = useParams();

    const reforma = sola.find(
        (reforma) => reforma.id === Number(reformaId)
    );

    return (
        <>
           

            <div
            className="bannerSola"
             style={{
         backgroundImage: `url(${reforma.caminhoImagem})`
    }}
>
        <h1>{reforma.nome}</h1>

          
            </div>


            <img
                src={reforma.caminhoImagem}
                alt={reforma.nome}
            />
            
              <p>{reforma.descrição}</p>

            <br />
            <br />

             <Link to="/rodrigo-react">
                <button className="botaoVoltar">
                    ← Inicio
                </button>
            </Link>
        </>
    );
}

export default Sola;