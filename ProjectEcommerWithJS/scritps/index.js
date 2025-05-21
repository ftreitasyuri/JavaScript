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
async function login(username, pass) {
    try {
        axios.post('https://dummyjson.com/auth/login', {
            headers: { 'Content-Type': 'application/json' },
            username: username,
            password: pass
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

var allProducts = Array();
// START FUNCTION TO GET THE ALL ITEMS/PRODUCTS FROM API
async function getAllProducts() {
    try {
        const allProdutcsData = await axios.get('https://dummyjson.com/products');
        // console.log(allProdutcsData.data);
        // allProducts = allProdutcsData.data;
        listAllProducts(allProdutcsData.data.products);
    } catch (error) {
        console.log(error);
    }
}

getAllProducts();
// END FUNCTION TO LIST THE ITEMS FROM API


// START FUNCTION TO LIST ALL PRODUCTS

function listAllProducts(products) {

    console.log(products);

    if (!Array.isArray(products)) {
        throw new TypeError("Esperado um array de produtos.");
    }

    if (products.length === 0) {
        return "Nenhum produto disponível.";
    }

    /**
     *
     *  Listagem caso seja necessário futuramente
     * const listagem = products.map((produto, index) => `${index + 1}. ${JSON.stringify(produto)}`);
     * console.log(listagem);
    
     */

    products.forEach(product => {
        // // li
        // const listLi = document.createElement("li");
        // const valueText = document.createTextNode(product.title)
        // listLi.appendChild(valueText);
        // document.getElementById('listarProdutos').appendChild(listLi);

        // h6
        const hSix = document.createElement('h6');
        const valueHSix = document.createTextNode(product.title)
        hSix.appendChild(valueHSix);
        document.getElementById('listaItem').appendChild(hSix);

        // img
        const imgItem = document.createElement('img');
        // imgItem.src = product.images[0];
        imgItem.src = product.thumbnail;

        const listItem = document.getElementById('listaItem');

        if(listItem){
            listItem.appendChild(imgItem);
        }





    });

    // return listagem;
}

// END FUNCTION TO LIST ALL PRODUCTS



