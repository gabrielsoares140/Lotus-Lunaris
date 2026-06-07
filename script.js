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

    /* Fecha as subpastas ao trocar de perfil */

    const subpastas =
    document.querySelectorAll(".subperfil");

    subpastas.forEach(sub => {

        sub.style.display = "none";

    });

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
    "lyranoctis",

    "obsessao",
    "desejo",

    "aelari",

    "alfabeto",
    "simbolos",
    "pontuacao",
    "regras",
    "exemplos",
    "niveis",
    "sagrado",
    "tradutor"

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

function abrirSubpasta(id){

    const subpastas =
    document.querySelectorAll(
        ".subperfil"
    );

    subpastas.forEach(p => {

        p.style.display = "none";

    });

    document
    .getElementById(id)
    .style.display = "block";
}

let modoTraducao = "normal";

function traduzirTexto(){

    if(modoTraducao === "normal"){

        traduzirParaAelari();

    }else{

        traduzirParaPortugues();

    }
}

function traduzirParaAelari(){

    const texto =
    document.getElementById(
        "textoEntrada"
    ).value.toUpperCase();

    const glifos = {

        A:"𖤓",
        B:"𖤐",
        C:"𖤔",
        D:"𖤕",
        E:"𖤖",
        F:"𖤗",
        G:"𖤘",
        H:"𖤙",
        I:"𖤚",
        J:"𖤛",
        K:"𖤜",
        L:"𖤝",
        M:"𖤞",
        N:"𖤟",
        O:"𖤠",
        P:"𖤡",
        Q:"𖤢",
        R:"𖤣",
        S:"𖤤",
        T:"𖤥",
        U:"𖤦",
        V:"𖤧",
        W:"𖤨",
        X:"𖤩",
        Y:"𖤪",
        Z:"𖤫",
        " ":" ○ "
    };

    let resultado = "";

    for(let letra of texto){

        resultado +=
        glifos[letra] || letra;

    }

    document
    .getElementById("textoSaida")
    .value = resultado;

    document
    .getElementById("textoSaida")
    .style.fontSize = "28px";
}

function traduzirParaPortugues(){

    let texto =
    document.getElementById(
        "textoEntrada"
    ).value;

    const letras = {

        "𖤓":"A",
        "𖤐":"B",
        "𖤔":"C",
        "𖤕":"D",
        "𖤖":"E",
        "𖤗":"F",
        "𖤘":"G",
        "𖤙":"H",
        "𖤚":"I",
        "𖤛":"J",
        "𖤜":"K",
        "𖤝":"L",
        "𖤞":"M",
        "𖤟":"N",
        "𖤠":"O",
        "𖤡":"P",
        "𖤢":"Q",
        "𖤣":"R",
        "𖤤":"S",
        "𖤥":"T",
        "𖤦":"U",
        "𖤧":"V",
        "𖤨":"W",
        "𖤩":"X",
        "𖤪":"Y",
        "𖤫":"Z"
    };

    let resultado = texto;

    for(const glifo in letras){

        resultado =
        resultado.split(glifo)
        .join(letras[glifo]);

    }

    resultado =
    resultado.split("○")
    .join(" ");

    document
    .getElementById("textoSaida")
    .value = resultado;
}

function inverterTradutor(){

    const entrada =
    document.getElementById("textoEntrada");

    const saida =
    document.getElementById("textoSaida");

    if(modoTraducao === "normal"){

        modoTraducao = "reverso";

        document.getElementById("tituloEntrada")
        .innerText = "Aelari";

        document.getElementById("tituloSaida")
        .innerText = "Português";

    }else{

        modoTraducao = "normal";

        document.getElementById("tituloEntrada")
        .innerText = "Português";

        document.getElementById("tituloSaida")
        .innerText = "Aelari";

    }

    entrada.value = saida.value;
    traduzirTexto();
}
