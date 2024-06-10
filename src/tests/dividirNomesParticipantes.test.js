const turmaManager = require('../turmaManager');

describe('Teste do Botão Divisor dos Nomes dos Participantes de Cada Time', () => {
  beforeEach(() => {
    turmaManager.reset();
    turmaManager.criarTurma('UNASP');
    turmaManager.adicionarParticipante('UNASP', 'A', 'Elisa Schafer');
    turmaManager.adicionarParticipante('UNASP', 'B', 'Luiza');
  });

  it('deve dividir os participantes nos times corretos', () => {
    const timeA = turmaManager.visualizarParticipantes('UNASP', 'A');
    const timeB = turmaManager.visualizarParticipantes('UNASP', 'B');
    expect(timeA).toContain('Elisa Schafer');
    expect(timeB).toContain('Luiza');
  });
});
