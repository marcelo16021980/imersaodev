

function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos pelo ID "resultados__pesquisa"
    let section = document.getElementById("resultados__pesquisa");
    
    let campoPesquisa = document.getElementById("campo__pesquisa").value;
    
    campoPesquisa = campoPesquisa.toLowerCase()

    if (!campoPesquisa){
        section.innerHTML = "<p>Voce nao realizou a busca</p>"
        return 
    }
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = ""
  
    // Itera sobre cada elemento do array 'dados'
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase()
        //se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += 
            `<div class="quimica__organica">
              <a class="Quimica__organica-titulo" target="_blank" href="#">${dado.titulo}</a>
              <p>${dado.descricao}</p>
              <a href="${dado.link}" target="_blank">Saiba mais</a>
            </div>`
        }
        if (!resultados){
            resultados = "<p>Nada foi encontrado</p>";
        }
    }


  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }
  //console.log(dados); // Comentado para não ser executado neste contexto