document.addEventListener('DOMContentLoaded', function () {
    const cepInput = document.getElementById('cep');
    const ruaInput = document.getElementById('rua');
    const bairroInput = document.getElementById('bairro');
    const cidadeInput = document.getElementById('cidade');
    const estadoInput = document.getElementById('estado');
    const complementoInput = document.getElementById('complemento');

    cepInput.addEventListener('blur', function () {
        let cep = cepInput.value.replace(/\D/g, '');
        if (cep.length === 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => {
                    if (!data.erro) {
                        ruaInput.value = data.logradouro || '';
                        bairroInput.value = data.bairro || '';
                        cidadeInput.value = data.localidade || '';
                        estadoInput.value = data.uf || '';
                        complementoInput.value = data.complemento || '';
                    } else {
                        alert('CEP não encontrado.');
                    }
                })
                .catch(() => alert('Erro ao buscar o CEP.'));
        }
    });
});