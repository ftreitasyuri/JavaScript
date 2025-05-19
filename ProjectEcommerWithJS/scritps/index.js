// ALL FUNCTIONS ARE CALLED WITH ENGLISH NAME
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

        eventForm.addEventListener("submit", function (e) {
            e.preventDefault();

            var email = document.getElementById('email').value;
            var password = document.getElementById('senha').value;

            // console.log('Email:' + email, 'Password: ' + password);
            login(email, password);



        })
    }
}

checkLocation();
/************************************************************************* */

// FUNCTION LOGIN
async function login(username, passs) {
    try {
        axios.post('https://dummyjson.com/auth/login', {
            headers: { 'Content-Type': 'application/json' },
            username: username,
            password: passs
        })
            .then(function (res) {
                console.log(res.data);
                const userData = res.data;
                const userCredentials = { id: userData.id, firstname: userData.firstName, image: userData.image };
                // const dadosUser = { email: email, senha: password };

                var data = JSON.stringify(userCredentials);


                localStorage.setItem('token', userData.accessToken);
                localStorage.setItem('user', data);

                if (localStorage.getItem('token')) {

                    location.replace('http://127.0.0.1:5500/ProjectEcommerWithJS/index.html');
                }



            })
    } catch (error) {
        console.log(error);
    }
}

// END LOGIN FUNCTION

