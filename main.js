function tocaSomPom (idElementoAudio){

document.querySelector(idElementoAudio).play();

}

let contador = 0

const listaDeteclas=document. querySelectorAll ('.tecla');

//enquanto
while(contador < listaDeteclas.length) {

    listaDeteclas[contador].onclick = tocaSom;

    contador = contador + 1;

    console.log(contador);
}