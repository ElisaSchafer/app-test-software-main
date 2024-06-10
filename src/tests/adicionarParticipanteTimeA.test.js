const turmaManager = require('../turmaManager');

describe('Teste de Adição de Participante ao Time A', () => {
  beforeEach(() => {
    turmaManager.reset();
    turmaManager.criarTurma('UNASP');
  });

  it('deve adicionar um participante ao Time A', () => {
    const participanteNome = 'Elisa Schafer';
    const result = turmaManager.adicionarParticipante('UNASP', 'A', participanteNome);
    expect(result).toBe('Participante adicionado ao Time A');
    expect(turmaManager.visualizarParticipantes('UNASP', 'A')).toContain(participanteNome);
  });
});
