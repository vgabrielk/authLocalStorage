let userLogin = document.querySelector('#input-user')
let passLogin = document.querySelector('#input-pass')
let submitLogin = document.querySelector('#button-submit')

function auth() {
    if (userLogin.value === localStorage.getItem('name') //Resposta caso os campos se coincidirem com os do localStorage
        && passLogin.value === localStorage.getItem('password')) {
        alert(`Olá ${localStorage.getItem('name')}, você foi logado `)
        let nameLog = document.querySelector('.user-name-logged').innerHTML = `${localStorage.getItem('name')}`
    }
    else {
        alert('Nome de usuário ou senha incorreta') //Caso a senha ou nome não esteja no localStorage
    };
}
submitLogin.addEventListener('click', auth) //Invocar função de auth ao clicar no botão submit
