const arrayLugares = [];

let nome = prompt("Seja bem-vindo (a), qual é o seu nome?");

if (nome !== null) {
  let continuar = true;

  while (continuar) {
    let opcao = prompt(mostrarMenu(nome));

    if (opcao === "5") {
      continuar = false;
      alert("Saindo do programa. Até mais!");
    } else {
      chooseAnOption(opcao);
    }
  }
} else {
  console.log("Você cancelou");
}

function mostrarMenu(nome) {
  return (
    `${nome}, selecione uma opção no menu abaixo:\n\n` +
    "1 - Adicionar um lugar na lista de lugares visitados\n" +
    "2 - Remover um lugar da lista de lugares visitados\n" +
    "3 - Listar todos os lugares visitados (no prompt)\n" +
    "4 - Mostrar todos os lugares visitados no documento HTML (DOM)\n" +
    "5 - Sair do menu"
  );
}

function chooseAnOption(opcao) {
  switch (opcao) {
    case "1":
      append();
      break;
    case "2":
      remove();
      break;
    case "3":
      showList(arrayLugares);
      break;
    case "4":
      showListInDOM(arrayLugares);
      break;
    case "5":
      break;
    default:
      alert("Opção inválida. Tente novamente.");
  }
}

function append() {
  const lugar = prompt(
    "Qual nome do lugar que você gostaria de adicionar na lista de já visitados?"
  );
  if (lugar !== null) {
    const continuar = confirm("Você deseja continuar?");
    if (continuar) {
      arrayLugares.push(lugar);
    }
  }
}

function remove() {
  if (arrayLugares.length === 0) {
    alert("Você ainda não adicionou nenhum lugar na lista.");
  } else {
    const index = prompt(
      "Digite o índice do lugar que você deseja remover:" +
        showList(arrayLugares)
    );
    if (index !== null) {
      const position = parseInt(index, 10);
      if (!isNaN(position) && position >= 0 && position < arrayLugares.length) {
        arrayLugares.splice(position, 1);
      } else {
        alert("Índice inválido.");
      }
    }
  }
}

function showList(list) {
  if (list.length === 0) {
    alert("0 lugares adicionados");
  } else {
    const listString = list
      .map((item, index) => `${index + 1}. ${item}`)
      .join("\n");
    alert("Lista de lugares visitados:\n" + listString);
  }
}

function showListInDOM(list) {
  const listalugares = document.querySelector(".listadelugares");

  if (list.length === 0) {
    alert("Você ainda não tem nenhum lugar adicionado");
  } else {
    listalugares.innerHTML = list.map((lugar) => `<li>${lugar}</li>`).join("");
  }
}
