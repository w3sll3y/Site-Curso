var url = "https://akicursosapi.herokuapp.com/api/cursos";
var listaCurso = [];
var api = document.getElementById("api");

function main() {
    requestApi().then(res => mostrarCursos(res));
}

async function mostrarCursos(res) {
    
    let template = "";

    for(var i in res) {
        template += `
            <div class="column">
                <div class="card">
                    <div class="card-content">
                        <figure class="image is-4by3">
                            <img src="${res[i].urlImagem}">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="content">
                            <h5>${res[i].nome}</h5>
                        </div>
                        <a href="${res[i].urlCurso}" target="blank"><button class="button is-fullwidth is-dark" id="button">Ver curso</button></a>
                    </div>
                </div>
            </div>
        `;
    }

    api.innerHTML += template;

}

async function requestApi() {
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    return response;
}

main();