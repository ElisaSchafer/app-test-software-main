let turmas = {};

function reset() {
  turmas = {};
}

function criarTurma(nome) {
  if (!turmas[nome]) {
    turmas[nome] = { timeA: [], timeB: [] };
    return 'Turma criada com sucesso';
  }
  return 'Turma já existe';
}

function visualizarTurmas() {
  return Object.keys(turmas);
}

function adicionarParticipante(turmaNome, time, participanteNome) {
  if (turmas[turmaNome]) {
    if (time === 'A') {
      turmas[turmaNome].timeA.push(participanteNome);
      return 'Participante adicionado ao Time A';
    } else if (time === 'B') {
      turmas[turmaNome].timeB.push(participanteNome);
      return 'Participante adicionado ao Time B';
    }
  }
  return 'Turma não encontrada';
}

function visualizarParticipantes(turmaNome, time) {
  if (turmas[turmaNome]) {
    if (time === 'A') {
      return turmas[turmaNome].timeA;
    } else if (time === 'B') {
      return turmas[turmaNome].timeB;
    }
  }
  return [];
}

function editarParticipante(turmaNome, time, nomeAtual, nomeNovo) {
  if (turmas[turmaNome]) {
    let index;
    if (time === 'A') {
      index = turmas[turmaNome].timeA.indexOf(nomeAtual);
      if (index !== -1) {
        turmas[turmaNome].timeA[index] = nomeNovo;
        return 'Nome do participante atualizado';
      }
    } else if (time === 'B') {
      index = turmas[turmaNome].timeB.indexOf(nomeAtual);
      if (index !== -1) {
        turmas[turmaNome].timeB[index] = nomeNovo;
        return 'Nome do participante atualizado';
      }
    }
  }
  return 'Participante não encontrado';
}

function excluirParticipante(turmaNome, time, participanteNome) {
  if (turmas[turmaNome]) {
    if (time === 'A') {
      turmas[turmaNome].timeA = turmas[turmaNome].timeA.filter(nome => nome !== participanteNome);
      return 'Participante removido da lista';
    } else if (time === 'B') {
      turmas[turmaNome].timeB = turmas[turmaNome].timeB.filter(nome => nome !== participanteNome);
      return 'Participante removido da lista';
    }
  }
  return 'Turma não encontrada';
}

function excluirTurma(turmaNome) {
  if (turmas[turmaNome]) {
    delete turmas[turmaNome];
    return 'Turma removida da lista';
  }
  return 'Turma não encontrada';
}

function contarParticipantes(turmaNome, time) {
  if (turmas[turmaNome]) {
    if (time === 'A') {
      return turmas[turmaNome].timeA.length;
    } else if (time === 'B') {
      return turmas[turmaNome].timeB.length;
    }
  }
  return 0;
}

module.exports = {
  reset,
  criarTurma,
  visualizarTurmas,
  adicionarParticipante,
  visualizarParticipantes,
  editarParticipante,
  excluirParticipante,
  excluirTurma,
  contarParticipantes
};
