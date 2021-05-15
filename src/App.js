import React, { useEffect, useState } from 'react';
import './App.css';
import ListaMoedas from './componentes/ListaMoedas';
import hoc from './componentes/hoc';

function App() {
  const CarregandoProdutos = hoc(ListaMoedas);
  const [estadoDaAplicacao, setEstadoDaAplicacao] = useState({
    consultando: false,
    moedas: null,
  });

  useEffect(() => {
    setEstadoDaAplicacao({ consultando: true });
    const apiUrl = `https://economia.awesomeapi.com.br/usd`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setEstadoDaAplicacao({ consultando: false, moedas: repos});
      });
  }, [setEstadoDaAplicacao]);
  
  return (
    <div className='App'>
        <CarregandoProdutos isLoading={estadoDaAplicacao.consultando} moedas={estadoDaAplicacao.moedas} />
    </div>
  );
}
export default App;