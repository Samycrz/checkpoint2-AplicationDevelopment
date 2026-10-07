const grid = document.querySelector(".grid-atores");
const campoBusca = document.querySelector(".busca");

// Função para desenhar os cards no ecrã
function renderizarAtores(lista) {
    grid.innerHTML = ""; // Limpa o conteúdo anterior

    lista.forEach((ator) => {
        grid.innerHTML += `
      <div class="ator">
        <img src="${ator.foto}" alt="${ator.nome}">
        <div class="info">
          <h2>${ator.nome}</h2>
          <p><strong>País:</strong> ${ator.pais}</p>
          <p><strong>Nascimento:</strong> ${ator.nascimento}</p>
        </div>
      </div>
    `;
    });
}

// Função acionada pelo 'oninput' no HTML
function filtrarAtores() {
    const termo = campoBusca.value.toLowerCase();

    // Filtra o array 'atores' do dados.js
    const filtrados = atores.filter((ator) => {
        return ator.nome.toLowerCase().includes(termo);
    });

    // Re-renderiza o grid apenas com os resultados da busca
    renderizarAtores(filtrados);
}

// Renderiza todos os atores e atrizes na primeira vez que a página carrega
renderizarAtores(atores);