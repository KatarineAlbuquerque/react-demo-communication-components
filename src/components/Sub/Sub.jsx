import React from 'react';

const Sub = (props) => {
    return (
        <div className='card'>
            <h3>Contador</h3>
            <h3>{props.numero}</h3>
            <button onClick={props.incrementar}>Mais</button>
            <button onClick={props.decrementar}>Menos</button>
        </div>
    )
}

export default Sub;