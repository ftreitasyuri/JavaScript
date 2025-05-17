
const loginForm = document.getElementById('formLogin');


loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // console.log('Email: ', email, 'Senha: ', password);

    const dadosUser = { email: email, senha: password };
    // console.log(dadosUser);

    var jdados = JSON.stringify(dadosUser);
    // console.log(typeof(jdados));
    localStorage.setItem('data', jdados);

    // sessionStorage.setItem('data', jdados);
    // localStorage.setItem('password', password);



    var saudacao = document.createElement('h3');
    saudacao.innerText = "Seja bem vindo ", email;
    // document.body.appendChild(saudacao);

    checkUser();
});

tema.addEventListener('change', function (e) {
    var temaEscolhido = document.getElementById('tema').value;

    // console.log(temaEscolhido);
    localStorage.setItem('tema', temaEscolhido);
})
checkUser();

function checkUser() {
    const logado = localStorage.getItem('data');

    if (logado) {
        document.getElementById('formLogin').style.display = 'none';
        // document.getElementById('principal').style.background = '#000';
        document.getElementById('principal').style.color = '#fff';

    } else {
        document.getElementById('formLogin').style.display = 'grid';

    }

}



// Verifica thema
function temaCheck() {
    var tema = localStorage.getItem('tema');


    if (tema === 'dark') {
        document.getElementById('principal').style.background = '#000';
    } else {
        document.getElementById('principal').style.background = '#fff';
    }



}


function logout() {
    // localStorage.removeItem('data');

    // sessionStorage.removeItem('data');
    localStorage.clear();
    sessionStorage.clear();

    location.reload()
}


