//helpers es un archivo que contiene ciertas funciones que puedes utilizar en diferentes lados, evita que los componentes queden muy cargados

export const revisarPresupuesto = (presupuesto,restante) => {
    let clase;

    if( (presupuesto / 4) > restante ){
        clase = 'alert alert-danger';
    }else if ( (presupuesto / 2) > restante){
        clase = 'alert alert-warning';
    }else{
        clase = 'alert alert-success';
    }

    return clase;
}