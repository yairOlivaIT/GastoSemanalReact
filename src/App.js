import React , { useState , useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {

  // Definir el state
  const [ presupuesto , guardarPresupuesto ] = useState (0); 
  const [ restante , guardarRestante ] = useState (0);
  const [ mostrarpregunta, actualizarPregunta ] = useState(true);
  const [ gastos, guardarGastos ] = useState([]);
  const [ gasto , guardarGasto ] = useState({});
  //creamos este state para cuando le demos al boton de definir presupuesto no me aparezca el signo de dolar en el margen derecho por eso cuando mandamos false esto no aparece
  const [creargasto,guardarCrearGasto ] = useState(false);

  //UseEffect que actualiza el restante
  useEffect(() => {
    if(creargasto){
      // agrega el nuevo presupuesto
        guardarGastos([
          ...gastos,
          gasto
        ]);

        //resta del presupuesto actual
        const presupuestoRestante = restante - gasto.cantidad;
        guardarRestante(presupuestoRestante);

        //resetear a false
        guardarCrearGasto(false);
    }
  }, [gasto , creargasto , gastos ,presupuesto , restante ]);


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        
        <div className="contenido-principal contenido">
          {/* carga condicional de componente, cuando esta en TRUE se muestra el primer componente de pregunta, ahora cuando se le ingresa por primera ves el presupuesto, este lo guarda en el state y a su vez pasa a valer FALSE el state de actualizarPregunta, por eso muestra el segundo componente de agregar los Gasto suplantando el de coloca tu presupuesto */}
          { mostrarpregunta ?
            (
              <Pregunta
                guardarPresupuesto = {guardarPresupuesto}
                guardarRestante = {guardarRestante}
                actualizarPregunta = {actualizarPregunta}
            />
            ) : (
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    guardarGasto = {guardarGasto}
                    guardarCrearGasto = {guardarCrearGasto}
                  />
                </div>
              <div className="one-half column">
                  <Listado
                    gastos = {gastos}
                  />  

                  <ControlPresupuesto 
                     presupuesto = {presupuesto}
                     restante = {restante}
                  />
              </div>
            </div>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
