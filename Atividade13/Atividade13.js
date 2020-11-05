function valida() {

    var e = document.getElementById("cursos");
    var opcao = e.options[e.selectedIndex].text;
    if (opcao == "Sistemas Biomédicos") {
        AbrirBiomedicos();
    } else if (opcao == "Logística") {
        AbrirLogistica();
    } else if (opcao == "Fabricação Mecânica") {
        AbrirFabricacao();
    }
}



function AbrirBiomedicos() {
    window.open("Biomedicos.html", "testWindow", "width=250, height=150, left=10, top=10");
}

function AbrirFabricacao() {
    window.open("Fabricacao.html", "testWindow", "width=250, height=150, left=10, top=10");
}

function AbrirLogistica() {
    window.open("Logistica.html", "testWindow", "width=250, height=150, left=10, top=10");
}
