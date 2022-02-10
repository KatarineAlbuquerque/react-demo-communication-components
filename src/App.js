import React, { useState } from 'react';
import './App.css';
import Pai from './components/Pai/Pai';
import Sub from './components/Sub/Sub';

const App = (props) => {

  const [numero, setNumero] = useState(10);
    
  const incrementar = () => {
    let valor = numero + 1;
      setNumero(valor);  
  }

  const decrementar = () => {
    let valor = numero - 1;
      setNumero(valor);  
  }

  return (
    <div className="App">
      <h1>Comunicação</h1>
      <Pai>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus, odio eget tempor sagittis, quam sem mattis quam.</p>      
        <br/>
        <Sub numero={numero} incrementar={incrementar} decrementar={decrementar} />
      </Pai>
    </div>
  );
}

export default App;
