let alunos = [];
let aulas = [];

function cadastrarAluno() {
  const nome = document.getElementById("nomeAluno").value;
  const nivel = document.getElementById("nivelAluno").value;
  const mensalidade = Number(document.getElementById("valorMensalidade").value);

  if (nome === "" || nivel === "" || mensalidade <= 0) {
    alert("Preencha todos os campos do aluno corretamente.");
    return;
  }

  const aluno = {
    nome: nome,
    nivel: nivel,
    mensalidade: mensalidade
  };

  alunos.push(aluno);

  document.getElementById("nomeAluno").value = "";
  document.getElementById("nivelAluno").value = "";
  document.getElementById("valorMensalidade").value = "";

  atualizarDashboard();
}

function registrarAula() {
  const aluno = document.getElementById("alunoAula").value;
  const data = document.getElementById("dataAula").value;
  const hora = document.getElementById("horaAula").value;

  if (aluno === "" || data === "" || hora === "") {
    alert("Preencha todos os campos da aula.");
    return;
  }

  const aula = {
    aluno: aluno,
    data: data,
    hora: hora
  };

  aulas.push(aula);

  document.getElementById("alunoAula").value = "";
  document.getElementById("dataAula").value = "";
  document.getElementById("horaAula").value = "";

  atualizarDashboard();
}

function atualizarDashboard() {
  document.getElementById("totalAlunos").innerText = alunos.length;
  document.getElementById("totalAulas").innerText = aulas.length;

  let receita = 0;

  alunos.forEach(function(aluno) {
    receita = receita + aluno.mensalidade;
  });

  document.getElementById("totalReceita").innerText =
    receita.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

  atualizarListaAlunos();
  atualizarListaAulas();
}

function atualizarListaAlunos() {
  const lista = document.getElementById("listaAlunos");
  lista.innerHTML = "";

  alunos.forEach(function(aluno) {
    const linha = document.createElement("tr");

    linha.innerHTML = `
      <td>${aluno.nome}</td>
      <td>${aluno.nivel}</td>
      <td>${aluno.mensalidade.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      })}</td>
    `;

    lista.appendChild(linha);
  });
}

function atualizarListaAulas() {
  const lista = document.getElementById("listaAulas");
  lista.innerHTML = "";

  aulas.forEach(function(aula) {
    const item = document.createElement("li");
    item.innerText = `${aula.aluno} - ${aula.data} às ${aula.hora}`;
    lista.appendChild(item);
  });
}