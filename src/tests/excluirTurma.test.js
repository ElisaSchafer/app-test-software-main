const turmaManager = require('../turmaManager');

describe('Teste de Exclusão de Turma', () => {
  beforeEach(() => {
    turmaManager.reset();
    turmaManager.criarTurma('UNASP');
  });

  it('deve excluir uma turma', () => {
    const result = turmaManager.excluirTurma('UNASP');
    expect(result).toBe('Turma removida da lista');
    expect(turmaManager.visualizarTurmas()).not.toContain('UNASP');
  });
});
