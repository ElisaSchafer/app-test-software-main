const turmaManager = require('../turmaManager');

describe('Teste do Contador de Nomes dos Participantes', () => {
  beforeEach(() => {
    turmaManager.reset();
    turmaManager.criarTurma('UNASP');
  });

  it('deve atualizar o contador corretamente ao adicionar participantes', () => {
    turmaManager.adicionarParticipante('UNASP', 'A', 'Elisa Schafer');
    turmaManager.adicionarParticipante('UNASP', 'A', 'Maria Antônia');
    const contador = turmaManager.contarParticipantes('UNASP', 'A');
    expect(contador).toBe(2);
  });

  it('deve atualizar o contador corretamente ao remover participantes', () => {
    turmaManager.adicionarParticipante('UNASP', 'A', 'Elisa Schafer');
    turmaManager.excluirParticipante('UNASP', 'A', 'Elisa Schafer');
    const contador = turmaManager.contarParticipantes('UNASP', 'A');
    expect(contador).toBe(0);
  });
});
