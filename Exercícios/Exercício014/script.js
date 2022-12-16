function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    //var hora = 16
    msg.innerHTML = `agora são ${hora} : ${minuto} : ${segundo}.`
    if (hora >= 6 && hora < 12) {
        img.src = 'fotodamanha.png'
        document.body.style.background = 'yellow'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fotodatarde.png'
        document.body.style.background = 'brown'
    } else {
        img.src = 'fotodanoite.png'
        document.body.background = 'black'
    }
       
    
}


