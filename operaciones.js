//Esperamos que se cargue todo el documento.
window.addEventListener('load', ()=> { 

    //Guardamos los elementos display y el elemento tecla en las siguientes const
    const displayI = document.querySelector('.displayI'); 
    const displayR = document.querySelector('.displayR');
    const tecla = document.getElementsByClassName('tecla');

    //Convertimos en array los elementos
    const arrayTeclas = Array.from(tecla);

    //Recorre el listado de elementos con un forEach para luego iterar sobre
    arrayTeclas.forEach( boton => {

        boton.addEventListener('click', ()=> {//Cuando la tecla sea pulsada 'click

            calculadora(boton, displayI);
        })
    })
});

function calculadora(boton, displayI) {

    switch (boton.innerHTML) { //Indicamos el nº que se presiona
        case 'C':
            borrar(displayI);
            break;
        
        case '=':
            calcular(displayI);
            break;
        
        default:
            actualizar(displayI, boton);
            break;
    }
}

function calcular(displayI) {
    //Toma el string y lo guarda en el display resolviendolo con la propiedad eval
    displayI.innerHTML = eval(displayI.innerHTML) 
}

function actualizar(displayI, boton) {

    if(displayI.innerHTML == 0) displayI.innerHTML = '';
    displayI.innerHTML += boton.innerHTML; //Ponemos un numero detás de otro
}

function borrar(displayI) {

    displayI.innerHTML = 0;
}



