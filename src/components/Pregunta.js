import React , { Fragment , useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({guardarPresupuesto,guardarRestante,actualizarPregunta}) => {

    // Definir el state
    const [ cantidad , guardarCantidad ] = useState(0);
    const [ error , guardarError ] = useState(false);

    // Funcion que lee el presupuesto
    const definirPresupuesto = e => {
       guardarCantidad(
            parseInt(e.target.value,10)
       )
    }

    // Submit para definir el presupuesto
    const agregarPresupuesto = e =>{
        e.preventDefault();
        
        // Validar
        if (cantidad <= 0 || isNaN(cantidad)){
            guardarError(true);
            return;
        }
        // Si se pasa la validacion
        guardarError(false);
        //asignamos el presupuesto a los state del app
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }


    return (  
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {/* definiendo el mensaje dentro del ERROR puedo pasarle por props y reutilizarlo en diferentes lados del codigo */}
            {error ? <Error mensaje="El Presupuesto es Incorrecto"/> :null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto} 
                />

                <input 
                    type="submit"
                    className="button button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
};

Pregunta.protoTypes = {
    guardarPresupuesto : PropTypes.func.isRequired,
    guardarRestante : PropTypes.func.isRequired,
    actualizarPregunta : PropTypes.func.isRequired
}
 
export default Pregunta;