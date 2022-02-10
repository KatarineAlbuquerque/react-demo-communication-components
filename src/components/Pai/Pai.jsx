import React from 'react';
import Filho from '../Filho/Filho';

const Pai = (props) => {
    return (
        <div className='card'>
            <h3>Exemplo de Comunicação entre Componentes</h3>
            <p>Demonstração Simples</p>
            <hr />

            <Filho nome="Paulo" sobrenome="Souza" />

            {props.children}
        </div>
    )
}

export default Pai;
