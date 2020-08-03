const DATOS_FORMULARIO = [
    {
        datos_propietario : {
            nombre : "Juan", 
            documento : "Perez", 
            genero : "M", 
            fech_nac : "10-10-1980"
        }, 
        datos_inmueble : {
            metos_cuadrados : 30, 
            tipo : "C", 
            numero_habitantes : 10, 
            fech_mensualidad : "10-0-2020"
        }
    }
];
/*
numeros.map(function(elemento, p){  
	console.log("=====");
    console.log(p, elemento);
	console.log("=====");
    return "posición: "+elemento;
})

[1,2,3,4,5]
["posición: 1","posición: 2","posición: 3","posición: 4","posición: 5"]
*/
	
document.getElementById("btn-guardar-inmueble").addEventListener('click', (e) =>{
	let nombre_almacenado, documento_almacenado, 
            genero_almacenado, fecha_nac_almacenada,mt_inmueble_almacenado,tipo_inmueble_almacenado, 
            num_habitantes_inmueble_almacenado, fech_men_inmueble_almacenado;
    let inmueble = {
        datos_propietario : {
            nombre : null, 
            documento : null, 
            genero : null, 
            fech_nac : null
        }, 
        datos_inmueble : {
            metos_cuadrados : null, 
            tipo : null, 
            numero_habitantes : 0, 
            fech_mensualidad : null
        }
    };
	if(document.getElementById("frm-mensualidad").reportValidity()){
        
        inmueble.datos_propietario.nombre = document.getElementById("nombre-propietario").value;
        inmueble.datos_propietario.documento = document.getElementById("doc-propietario").value;
        inmueble.datos_propietario.fech_nac = document.getElementById("fecha-nac-propietario").value;
        inmueble.datos_propietario.genero = document.getElementById("genero-propietario").value;
        
        inmueble.datos_inmueble.metos_cuadrados = document.getElementById("metros-cuadrados").value;
        inmueble.datos_inmueble.numero_habitantes = document.getElementById("numero-habitantes").value;
        inmueble.datos_inmueble.fech_mensualidad = document.getElementById("fecha-mensualidad").value;
        
        if(document.getElementById("tipo_apartamento").checked){
            inmueble.datos_inmueble.tipo = document.getElementById("tipo_apartamento").value;
        }else{
            inmueble.datos_inmueble.tipo = document.getElementById("tipo_casa").value;
        }
    }else{
        alert("Error de validación de campos.")
    }
    DATOS_FORMULARIO.push(inmueble);
    document.getElementById("frm-mensualidad").reset();
    alert("Los datos fueron almacenados");
    $('#modal-adicionar').modal('toggle');
        
});
   	
$(document).ready((e) => {
    $("#btn-adicionar").click((e) => {
        $('#modal-adicionar').modal('toggle');
    });
});

function recorrerVector(){
    let arreglo = [3,5,6,8,1];
    // for (let i = 0; i < arreglo.length; i++) {
    //     console.log(arreglo[i]);      
    // }
    //let r =  arreglo.forEach( x => console.log(x) );
    let r =  arreglo.map( x => x + 1);
    console.log(arreglo);
    console.log(r);
}

