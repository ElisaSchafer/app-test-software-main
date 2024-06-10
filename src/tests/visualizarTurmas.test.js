const turmaManager = require('../turmaManager');

describe('Teste de Visualização das Turmas Criadas', () => {
  beforeEach(() => {
    turmaManager.reset();
    turmaManager.criarTurma('UNASP');
    turmaManager.criarTurma('ADS');
  });

  it('deve visualizar todas as turmas criadas', () => {
    const turmas = turmaManager.visualizarTurmas();
    expect(turmas).toContain('UNASP');
    expect(turmas).toContain('ADS');
  });
});
