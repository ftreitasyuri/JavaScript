
/***
 * Função para verificar se pode assistir o evento submit. 
 * No caso, só pode na tela login.html
 * 
 * **/
function checkLocation() {
    const local = location.href;
    // console.log(local);

    if (local === 'http://127.0.0.1:5500/ProjectEcommerWithJS/login.html') {
        const eventForm = document.getElementById('formularioLogin');

        eventForm.addEventListener("submit", function(e){
            e.preventDefault();

            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            console.log('Email:' + email, 'Password: ' + password);

        })
    }
}

checkLocation();
