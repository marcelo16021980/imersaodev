
function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos pelo ID "resultados__pesquisa"
    let section = document.getElementById("resultados__pesquisa");
    
    let campoPesquisa = document.getElementById("campo__pesquisa").value;
    campoPesquisa = campoPesquisa.toLowerCase();

    if (!campoPesquisa) {
        section.innerHTML = "<p>Você não realizou a busca</p>";
        return;
    }
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada elemento do array 'dados'
    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tags.toLowerCase();
      
        // Verifica se o título, descrição ou tags incluem o texto da pesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += 
            `<div class="quimica__organica">
              <img src="${dado.imagem}" alt="${dado.titulo}" class="quimica__organica-imagem">
              <a class="Quimica__organica-titulo" target="_blank" href="${dado.link}">${dado.titulo}</a>
              <p>${dado.descricao}</p>
              <a href="${dado.link}" target="_blank">Saiba mais</a>
            </div>`;
        }
    }

    // Verifica se há resultados e atualiza o conteúdo da seção
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}

  //console.log(dados); // Comentado para não ser executado neste contexto
