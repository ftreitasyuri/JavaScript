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
    if (!Array.isArray(products)) {
        throw new TypeError("Esperado um array de produtos.");
    }

    if (products.length === 0) {
        return "Nenhum produto disponível.";
    }

    const ulElement = document.getElementById('listarProdutos'); // Corrigido para o UL real

    products.forEach(product => {
        // Cria o li principal
        const listItem = document.createElement('li');
        listItem.className = 'listaItem';

        // Desconto
        const hSix = document.createElement('h6');
        hSix.className = 'descontoItem';
        const desconto = product.price * product.discountPercentage / 100;
        hSix.textContent = `-R$${desconto.toFixed(2)} (${product.discountPercentage}%)`;
        listItem.appendChild(hSix);

        // Imagem
        const imgItem = document.createElement('img');
        imgItem.className = 'imagemItem';
        imgItem.src = product.thumbnail;
        imgItem.alt = product.title;
        listItem.appendChild(imgItem);

        // Div infosItem
        const divInfos = document.createElement('div');
        divInfos.className = 'infosItem';

        // Título
        const pItem = document.createElement('p');
        pItem.className = 'tituloItem';
        pItem.textContent = product.title;
        divInfos.appendChild(pItem);

        // Preço antigo
        const spanItem = document.createElement('span');
        spanItem.className = 'valorItem';
        spanItem.textContent = 'de R$ ' + product.price.toFixed(2);
        divInfos.appendChild(spanItem);

        // Texto "Por:"
        const pPer = document.createElement('p');
        pPer.textContent = 'Por:';
        divInfos.appendChild(pPer);

        // Preço com desconto
        const pDiscount = document.createElement('p');
        pDiscount.className = 'valorTotalItem';
        const valorFinal = product.price - desconto;
        pDiscount.textContent = `R$ ${valorFinal.toFixed(2)}`;
        divInfos.appendChild(pDiscount);

        // button
        const btnItem = document.createElement('button');
        btnItem.className = 'adicionarCarrinho';
        btnItem.textContent = "Add Car";
        divInfos.appendChild(btnItem);

        // Adiciona a div com info ao li
        listItem.appendChild(divInfos);

        // Adiciona o li ao UL principal
        ulElement.appendChild(listItem);
    });
}


// END FUNCTION TO LIST ALL PRODUCTS



