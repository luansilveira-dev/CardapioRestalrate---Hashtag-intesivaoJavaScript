function Navegacao({alterarPaginaSelecionada}){
    return (
        <div className="navegacao">
            <button className="botao-navegacao" onClick={() => alterarPaginaSelecionada(0)}>Pratos Principas</button>
            <button className="botao-navegacao" onClick={() => alterarPaginaSelecionada(1)}>Sobremesas</button>
            <button className="botao-navegacao" onClick={() => alterarPaginaSelecionada(2)}>Bebidas</button>
        </div>
    )
}

export default Navegacao