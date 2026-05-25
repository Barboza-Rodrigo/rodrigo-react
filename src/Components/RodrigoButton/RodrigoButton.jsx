// import './RodrigoButton.css'

function RodrigoButton ({titulo='Botão Padrão', cor ='orange', corDaFonte= 'black'}) {
    return (

        <button
        classNome="rodrigoButton"
        style={{backgroundColor: cor, color: corDaFonte}}>
            {titulo}
        </button>
    )
}

export default RodrigoButton