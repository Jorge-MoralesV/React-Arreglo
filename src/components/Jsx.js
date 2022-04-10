import React from 'react'
import { Fragment } from 'react';

const Jsx = () => {

    //const saludo= 'Hola JSX'

    const temperatura = 21;

    return (
        //<h2>Soy un componente {saludo}</h2>
        <Fragment>
            <h2>Soy un componente</h2>
            <h2> Frio o calor</h2>
            <h4>
                {temperatura < 20 ? 'Calor' : 'Frio'}
            </h4>
        </Fragment>
    )
}

export default Jsx;