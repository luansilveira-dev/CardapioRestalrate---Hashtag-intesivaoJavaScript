import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import hashtauranteImg from "./assets/hashtaurante.webp"
import Navegacao from './navegacao'
import ItemCardapio from './itemCardapio'
import { pratosPrincipais, sobremesas, bebidas } from './cardapio'

function App() {
  const [paginaSelecionada, alterarPaginaSelecionada] = React.useState(0);
  const secoesMenu = [pratosPrincipais, sobremesas, bebidas]

  return (
    <>
      <img src={hashtauranteImg} className="capa"/>
      <Navegacao alterarPaginaSelecionada={alterarPaginaSelecionada} />

      <dir className="menu" > {secoesMenu[paginaSelecionada].map((prato) => (

          <ItemCardapio 
          nome={prato.nome}
          preco={prato.preco}
          descricao={prato.descricao}
          imagem={prato.imagem}
          />

      ))}
      
      </dir>
    </>
  )
}
export default App
