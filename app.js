let amigos = [];

function adicionarAmigo() {
  let amigo = document.getElementById("amigo").value.trim(); //.trim remove espaços
  console.log(amigo);

  if (amigo == "") {
    alert("Por favor, insera um nome para o sorteio!");  

  }else if(amigos.includes(amigo)){ //verifica se o nome ja existe na lista
    alert("Esse nome já foi adicionado!.");
    limparCampo();
  }
    else {
    amigos.push(amigo);//adicona o amigo ao array
    console.log(amigos);

    limparCampo();
    atualizarListaAmigos();//chama a função para atualizar a lista
  }
}

function limparCampo() {
  let campo = document.querySelector("input");
  campo.value = "";
  
}

function atualizarListaAmigos () {
  let lista = document.getElementById("listaAmigos");

  lista.innerHTML= "";//limpa a lista antes de adionar novos itens a lista

  amigos.forEach((amigo) => {
    let li = document.createElement("li"); //cria um novo elemento li
    li.textContent = amigo;//define o texto do <li> com o nome do amigo
    lista.appendChild(li); //adicona o <li> à lista
  });
}

function sortearAmigo(){
  if (amigos.length === 0) { //esta condicão impede o sorteio caso a lista esteja vazia
    alert("A lista de amigos está vazia. Adicione amigos antes de sortear.");
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * amigos.length); //é gerado um indice aleatorio
  let amigoSorteado = amigos[indiceSorteado];// pega o nome correspondente

  document.getElementById("resultado").innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}