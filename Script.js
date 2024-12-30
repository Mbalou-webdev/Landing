function validateForm(){
    const inputEmail = document.getElementById("email")
    const inputError = document.getElementById("email-error")
    if(inputEmail.value === ""){
        inputError.textContent = "Le champ ne doit pas être vide"
        inputError.style.textAlign = "center"
        inputError.style.color = 'red'
        inputError.style.fontSize ="20px"
    }
    else if(inputEmail.value.length < 6 ){
        inputError.textContent = 'Le nombre de caractére doit être superieur a 6'
        inputError.style.textAlign = "center"
        inputError.style.color = 'red'
        inputError.style.fontSize ="20px"
    }
    else{
        inputError.textContent = ''
        textEmail.value = ''

    }
    inputEmail.addEventListener('input', () => {
        inputError.style.display =inputEmail.value === ''? 'block': 'none';
    } );
    inputEmail.addEventListener('blur', () => {
        inputError.style.display = inputEmail === ''? 'block': 'none';
    })

    const textMessage = document.getElementById('message')
    const texError = document.getElementById('message-error')
    if(textMessage.value === ''){
        texError.textContent = 'Le champ Messsage ne doit pas être vide'
        texError.style.Align = 'center'
        texError.style.color = 'red'
        texError.style.fontSize ='20px'
    }
    else{
        texError.textContent = ''
        textMessage.value = ''
        alert("votre message a ete anvoyer avec succes")
    }
    textMessage.addEventListener('input', () => {
        texError.style.display =textMessage.value === ''? 'block': 'none';
    } );
    textMessage.addEventListener('blur', () => {
        texError.style.display = textMessage === ''? 'block': 'none';
    })
    return false


}

