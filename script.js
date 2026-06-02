async function buscarCEP() {

    const cep = document.getElementById("cep").value;
    const resultado = document.getElementById("resultado");

    // Validação
    if (cep.value === "" || cep.trim() === "") {
        resultado.innerHTML =
        `<p class="erro">Digite um CEP!</p>`;
        return;
    }

    try {

        const resposta = await fetch(
            `https://viacep.com.br/ws/${cep}/json/`
        );

        const dados = await resposta.json();

        if (dados.erro) {
            resultado.innerHTML =
            `<p class="erro">CEP não encontrado!</p>`;
            return;
        }

        resultado.innerHTML = `
            <div class="card">
                <p><strong>Rua:</strong> ${dados.logradouro}</p>
                <p><strong>Bairro:</strong> ${dados.bairro}</p>
                <p><strong>Cidade:</strong> ${dados.localidade}</p>
                <p><strong>Estado:</strong> ${dados.uf}</p>
                <hr>
                <p><strong>CEP:</strong> ${dados.cep}</p>
                <p><strong>Complemento:</strong> ${dados.complemento}</p>
                <p><strong>DDD:</strong> ${dados.ddd}</p>
                <p><strong>IBGE:</strong> ${dados.ibge}</p>
                <p><strong>GIA:</strong> ${dados.gia}</p>
                <p><strong>SIAFI:</strong> ${dados.siafi}</p>
            </div>
        `;

    } catch {
        resultado.innerHTML =
        `<p class="erro">Erro ao consultar a API!</p>`;
    }
}