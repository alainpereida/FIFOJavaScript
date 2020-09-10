// Variables Globales
let list = document.getElementById('list');
let nodes = list.childNodes; //Obtenemos los hijos de la lista

// Animations Timeouts

let nodeAnimationTimeout = 1000;
let pointerAnimationTimeout = 500;
let deleteTimeout = 1000;


function add(data) {

    //Creamos en Nodo con JavaScript
    let element = document.createElement('div');
    element.classList.add('element');

    let number = document.createElement('p');
    let text = document.createTextNode(data);

    number.appendChild(text);
    element.appendChild(number);

    let pointer = document.createElement('div');
    pointer.classList.add('pointer');

    let img = document.createElement('img');
    img.src = './img/pointer.png';

    pointer.appendChild(img);

    let node = document.createElement('div');
    node.classList.add('node');
    node.appendChild(element);
    node.appendChild(pointer);

    //Ya generamos el objeto div con la class node de css y la informacion

    animationNodes(node);
    list.appendChild(node);
    //await animationNodes(posicion, nodes.length - 1);

    // node.style.animation = "grow " + nodeAnimationTimeout / 1000 + "s" + "ease";
}

function earse(posicion) {
    let elemento = list.childNodes[posicion - 1];
    list.removeChild(elemento);
}

function animationNodes(node) {
    animateElement(node.children[0]);
    animatePointer(node.children[1]);
}

async function animateElement(node) {
    return new Promise((resolve, reject) => {
        node.style.animation =
            "grow " +
            nodeAnimationTimeout / 1000 + "s " +
            "ease";
        setTimeout(function () {
            resolve();
        }, 1000);
    });
}

async function animatePointer(pointer) {
    return new Promise((resolve, reject) => {
        pointer.style.animation =
            "highlightNode " +
            nodeAnimationTimeout / 1000 + "s " +
            "ease";
        setTimeout(function () {
            resolve();
        }, 1000);
    });
}
