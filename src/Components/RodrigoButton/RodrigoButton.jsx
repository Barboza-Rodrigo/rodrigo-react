import "./RodrigoButton.css";

function RodrigoButton({
    titulo = 'Botão Padrão',
    cor = 'orange',
    corDaFonte = 'black',
    onClick
}) {
    return (
        <button
            className="rodrigoButton"
            onClick={onClick}
            style={{
                backgroundColor: cor,
                color: corDaFonte
            }}
        >
            {titulo}
        </button>
    );
}

export default RodrigoButton;