const inputNome = document.getElementById("inptNome");
const inputIdade = document.getElementById("inptIdade");
const inputCPF = document.getElementById("inptCPF");
const btnSalvar = document.getElementById("btnSalvar");
const nomeExibido = document.getElementById("nomeExibido");
const idadeExibido = document.getElementById("idadeExibido");
const cpfExibido = document.getElementById("cpfExibido");

btnSalvar.addEventListener("click", btnAction);

function btnAction() {
    console.log("Teste");

    let nome = inputNome.value.trim();
    let idade = inputIdade.value.trim();
    let CPF = inputCPF.value.trim();

    if(nome=== "" || idade ===  "" || CPF === ""){
        alert("Por favor, preencha todos os campos!");
        return;
    }

    console.log(nome, idade, CPF);

    inputNome.value = "";
    inputIdade.value = "";
    inputCPF.value = "";

    // Exibindo os valores dentro da div
    nomeExibido.innerHTML = `<strong>${nome}</strong>`;
    idadeExibido.innerHTML = `<strong>${idade}</strong>`;
    cpfExibido.innerHTML = `<strong>${CPF}</strong>`;
}

