let listaNumero = [1, 9, 5, 10, 3];
let huboIntercambio = true;

while (huboIntercambio) {
    huboIntercambio = false;

    for (let i = 0; i < listaNumero.length - 1; i++) {
        if (listaNumero[i] > listaNumero[i + 1]) {

            let Guardado = listaNumero[i];
    
            listaNumero[i] = listaNumero[i + 1];

            listaNumero[i + 1] = Guardado;

            huboIntercambio = true;
        }
    }

}
console.log(listaNumero)