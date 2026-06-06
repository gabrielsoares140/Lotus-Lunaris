const membrosLunaris = {

    "Astraelis":"estrela123",
    "Ovelha":"ovelha123",
    "Sirius":"sirius123",
    "Lyra":"lyra123",
    "Noctis":"noctis123"

};

function login(){

    const user =
    document.getElementById("user").value;

    const password =
    document.getElementById("password").value;

    if(membrosLunaris[user] === password){

        document.getElementById("loginBox")
        .style.display = "none";

        document.getElementById("loadingScreen")
        .style.display = "flex";

        setTimeout(() => {

            document.getElementById("loadingScreen")
            .style.display = "none";

            document.getElementById("mainBox")
            .style.display = "flex";

        },3000);

    }else{

        document.getElementById("loginMsg")
        .innerText =
        "Usuário ou senha incorretos.";

    }
}

function abrirPerfil(id){

    document
    .getElementById("salaoCelestial")
    .style.display = "none";

    const perfis =
    document.querySelectorAll(".perfil");

    perfis.forEach(perfil => {

        perfil.classList.remove("ativo");

        perfil.style.display = "none";

    });

    const perfil =
    document.getElementById(id);

    perfil.classList.add("ativo");

    perfil.style.display = "block";
}

function voltarSalao(){

    const perfis =
    document.querySelectorAll(".perfil");

    perfis.forEach(perfil => {

        perfil.classList.remove("ativo");

        perfil.style.display = "none";

    });

    document
    .getElementById("salaoCelestial")
    .style.display = "flex";
}

function salvarHistoria(nome){

    const campo =
    document.getElementById(
        "historia-" + nome
    );

    if(!campo){
        alert("Campo de história não encontrado.");
        return;
    }

    localStorage.setItem(
        "historia-" + nome,
        campo.value
    );

    alert("História salva com sucesso!");
}

function salvarNota(nome){

    const campo =
    document.getElementById(
        "nota-" + nome
    );

    if(!campo){
        alert("Campo de anotação não encontrado.");
        return;
    }

    localStorage.setItem(
        "nota-" + nome,
        campo.value
    );

    alert("Anotação salva com sucesso!");
}

window.onload = () => {

    document
    .getElementById("salaoCelestial")
    .style.display = "flex";

    for(let i = 0; i < 150; i++){

        const estrela =
        document.createElement("div");

        estrela.style.position = "fixed";
        estrela.style.width = "2px";
        estrela.style.height = "2px";
        estrela.style.background = "white";
        estrela.style.borderRadius = "50%";

        estrela.style.left =
        Math.random() * 100 + "%";

        estrela.style.top =
        Math.random() * 100 + "%";

        estrela.style.opacity =
        Math.random();

        document.body.appendChild(estrela);
    }

    const perfis = [

        "astraelis",
        "ovelha",
        "sirius",
        "lyranoctis"

    ];

    perfis.forEach(nome => {

        const nota =
        localStorage.getItem(
            "nota-" + nome
        );

        const campoNota =
        document.getElementById(
            "nota-" + nome
        );

        if(nota && campoNota){

            campoNota.value = nota;

        }

        const historia =
        localStorage.getItem(
            "historia-" + nome
        );

        const campoHistoria =
        document.getElementById(
            "historia-" + nome
        );

        if(historia && campoHistoria){

            campoHistoria.value =
            historia;

        }

    });

};