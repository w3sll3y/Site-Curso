//  API
var url = "https://akicursosapi.herokuapp.com/api/cursos";

// DIVS DAS CATEGORIAS DO INDEX
var cursosProgramacao = document.getElementById("cursos-programacao");
var cursosMarketing = document.getElementById("cursos-marketing");
var cursosGames = document.getElementById("cursos-games");
var cursosInvestimentos = document.getElementById("cursos-investimentos");

//  LISTA DOS CURSOS
var listaCursosProgramacao = [];
var listaCursosMarketing = [];
var listaCursosGames = [];
var listaCursosInvestimentos = [];

//  PASSANDO RESULTADOS DA API PARA UMA FUNCAO
function main() {
    requestApi().then(res => mostrarCursos(res));
}

//  MOSTRAR CURSOS
async function mostrarCursos(res) {

    //  TEMPLATES
    let templateProgramacao = "";
    let templateMarketing = "";
    let templateInvestimentos = "";
    let templateGames = "";

    //  VERIFICANDO A CATEGORIA DO CURSO
    for (var i in res) {
        if (res[i].categoria === "Programação") {
            listaCursosProgramacao.push(res[i]);
        } else if (res[i].categoria === "Marketing") {
            listaCursosMarketing.push(res[i]);
        } else if (res[i].categoria === "Games") {
            listaCursosGames.push(res[i]);
        } else if (res[i].categoria === "Investimentos") {
            listaCursosInvestimentos.push(res[i]);
        }
    }

    // MOSTRANDO A LISTA DE CURSOS
    for (var i in listaCursosProgramacao) {
        templateProgramacao = `
                <div class="column">
                    <div class="card">
                        <div class="card-content">
                            <figure class="image is-4by3">
                                <img src="${listaCursosProgramacao[i].urlImagem}">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <h5>${listaCursosProgramacao[i].nome}</h5>
                            </div>
                            <a href="${listaCursosProgramacao[i].urlCurso}" target="blank"><button class="button is-fullwidth is-dark" id="button">Ver curso</button></a>
                        </div>
                    </div>
                </div>
            `;
        cursosProgramacao.innerHTML += templateProgramacao;
    }

    // MOSTRANDO A LISTA DE CURSOS
    for (var i in listaCursosMarketing) {
        templateMarketing = `
                <div class="column">
                    <div class="card">
                        <div class="card-content">
                            <figure class="image is-4by3">
                                <img src="${listaCursosMarketing[i].urlImagem}">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <h5>${listaCursosMarketing[i].nome}</h5>
                            </div>
                            <a href="${listaCursosMarketing[i].urlCurso}" target="blank"><button class="button is-fullwidth is-dark" id="button">Ver curso</button></a>
                        </div>
                    </div>
                </div>
            `;
        cursosMarketing.innerHTML += templateMarketing;
    }

    // MOSTRANDO A LISTA DE CURSOS
    for (var i in listaCursosInvestimentos) {
        templateInvestimentos = `
                <div class="column">
                    <div class="card">
                        <div class="card-content">
                            <figure class="image is-4by3">
                                <img src="${listaCursosInvestimentos[i].urlImagem}">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <h5>${listaCursosInvestimentos[i].nome}</h5>
                            </div>
                            <a href="${listaCursosInvestimentos[i].urlCurso}" target="blank"><button class="button is-fullwidth is-dark" id="button">Ver curso</button></a>
                        </div>
                    </div>
                </div>
            `;
        cursosInvestimentos.innerHTML += templateInvestimentos;
    }

    // MOSTRANDO A LISTA DE CURSOS
    for (var i in listaCursosGames) {
        templateGames = `
                <div class="column">
                    <div class="card">
                        <div class="card-content">
                            <figure class="image is-4by3">
                                <img src="${listaCursosGames[i].urlImagem}">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <h5>${listaCursosGames[i].nome}</h5>
                            </div>
                            <a href="${listaCursosGames[i].urlCurso}" target="blank"><button class="button is-fullwidth is-dark" id="button">Ver curso</button></a>
                        </div>
                    </div>
                </div>
            `;
        cursosGames.innerHTML += templateGames;
    }

}

//  REQUISITANDO API
async function requestApi() {
    let response = await fetch(url);
    response = await response.json();
    return response;
}

//  FUNCAO PRINCIPAL PARA INICIAR TUDO
main();