const turmaManager = require('../turmaManager.js');

describe('Teste do Botão de "+" para Adicionar Mais Participantes', () => {
  beforeEach(() => {
    turmaManager.reset();
    turmaManager.criarTurma('UNASP');
  });

  it('deve adicionar novos participantes com sucesso', () => {
    turmaManager.adicionarParticipante('UNASP', 'A', 'Mateus');
    turmaManager.adicionarParticipante('UNASP', 'B', 'Lucas');
    const timeA = turmaManager.visualizarParticipantes('UNASP', 'A');
    const timeB = turmaManager.visualizarParticipantes('UNASP', 'B');
    expect(timeA).toContain('Mateus');
    expect(timeB).toContain('Lucas');
  });
});
