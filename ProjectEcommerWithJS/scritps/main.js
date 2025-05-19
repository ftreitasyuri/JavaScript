/**
 *
 * This script file is focused in user authentication check
 */

document.addEventListener('DOMContentLoaded', () => {
    const myCar = document.getElementById('carrinho');
    const userLogged = document.getElementById('entrar');
    const userLogout = document.getElementById('sair');

    // se existir token, apresenta #carrinho
    if (localStorage.getItem('token') && myCar) {
        myCar.style.display = 'grid';
        userLogged.style.display = 'none';
        userLogout.style.display = 'grid'
    }else{
        myCar.style.display = 'none';
        userLogged.style.display = 'grid';
        userLogout.style.display = 'none';
    }

})

// LOGOUT FUNCTION
function logout() {
    localStorage.clear();
    sessionStorage.clear();
    location.replace('http://127.0.0.1:5500/ProjectEcommerWithJS/index.html');

}
// END LOGOUT FUNCTION
