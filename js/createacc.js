let user = document.querySelector('#input-user')
let pass = document.querySelector('#input-pass')
let cpf = document.querySelector('#input-cpf')
let submit = document.querySelector('#button-submit')

// Armanezar valores dos inputs no local storage

const setLocalStorageData = () => { 
    if (user.value.length > 1 && pass.value.length >= 5) { //Validação
        localStorage.setItem('name', user.value)
        localStorage.setItem('password', pass.value)
        localStorage.setItem('cpf', cpf.value)
        alert('Conta criada com sucesso')
    }
    else {
        alert('Insira todos os campos corretamente para criar a conta')
    }
}


submit.addEventListener('click', setLocalStorageData) //Invocar função setLocalStorage ao clicar no botão submit