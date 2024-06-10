const turmaManager = require('../turmaManager');

describe('Teste de Exclusão de Participante', () => {
  beforeEach(() => {
    turmaManager.reset();
    turmaManager.criarTurma('UNASP');
    turmaManager.adicionarParticipante('UNASP', 'A', 'Elisa Schafer');
  });

  it('deve excluir um participante', () => {
    const result = turmaManager.excluirParticipante('UNASP', 'A', 'Elisa Schafer');
    expect(result).toBe('Participante removido da lista');
    expect(turmaManager.visualizarParticipantes('UNASP', 'A')).not.toContain('Elisa Schafer');
  });
});
