function RodrigoCard({sola,caminhoImagem,importancia, pontoReforma, nomeButton= 'Botão Padrão' }){
    return (
         <div className='CardReforma'>
            <img src={caminhoImagem} width={260} height={280} alt={sola} title={sola} />
            <h2>{sola}</h2>
            <p>Fundamento: {importancia}</p>
            <button onClick={()=> pontoReforma(sola)}>{nomeButton}</button>
          </div>
    )
}
export default RodrigoCard
