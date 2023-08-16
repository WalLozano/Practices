
// comprobando si es un numero 

function esNumero(num){
    return !isNaN(num);
}


// generando un numero al azar entre dos numeros pedidos por prompt

function generadorRandom(min, max){

    if (esNumero(min) && esNumero(max)) {
        min = parseInt(min)
        max = parseInt(max)

// de ser el numero min mayor que el max lo intercambiamos de lugar

        if(min > max){
            let aux = max;
                max = min;
                min = aux;
        }

        return Math.floor(Math.random()* (max - min)) + min;


    }else{
        console.error("Los caracteres introducidos no son numeros")
    }

}