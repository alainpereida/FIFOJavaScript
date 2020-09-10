/**
 * Documento main donde se declaran las funciones que escuchen 
 * cuando los botones son precionados
 */

//Generamos el primer elemento
add(1);


/**
 * Esta funcion esta asiganada al boton para inserter un nuevo elemento
 */
function addElement() {

    let valor = document.getElementById('newElement').value;
    add(valor);
}

/**
 * Esta funcion esta asiganada al boton para eliminar un
 * elemento de la FIFO
 */
function deleteElement() {
    let posicion = document.getElementById("deleteElement").value
    if (posicion > 0 && posicion <= list.childNodes.length) {
        earse(posicion);
    } else {
        alert('No existe esa posicion');
    }
}