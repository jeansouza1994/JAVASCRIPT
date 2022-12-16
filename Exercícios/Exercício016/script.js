function calcular() {
    var inicio2 = document.getElementById('inicio')
    var inicio = Number(inicio2.value)

    var fim2 = document.getElementById('fim')
    var fim = Number(fim2.value)

    var passo2 = document.getElementById('passo')
    var passo = Number(passo2.value)

    var res = document.getElementById('res')

    

    if(inicio2.value.length == 0 || fim2.value.length == 0 || passo2.value.length == 0) {
        alert('Faltam dados')

    } else {
        res.innerHTML = "Contando: <br>"
        if (passo <= 0) {
            alert('Seu burro, o passo não pode ser 0 ou número negativo')
            alert('Agora o passo vale 1')
            passo = 1
        }
        if (inicio < fim) {
            for(var c = inicio ; (c <= fim) ; c += passo) {
                res.innerHTML += ` ${c} \u{1F643}`
            }
            
        } else {
            for(var c = inicio ; (c >= fim) ; c -= passo) {
                res.innerHTML += ` ${c} \u{1F643}`
            }
        }
    
    }

    /*
    c = inicio
    while (c <= fim) {
        res.innerHTML = `Contando: ${c}`
        c = c + passo
    }
    */
    
    /*
    do {
        res.innerHTML= `Contando: ${inicio}`
        inicio = inicio + passo
    } while (inicio <= fim)
    */
}