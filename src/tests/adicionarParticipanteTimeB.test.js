const turmaManager = require('../turmaManager');

describe('Teste de Adição de Participante ao Time B', () => {
  beforeEach(() => {
    turmaManager.reset();
    turmaManager.criarTurma('UNASP');
  });

  it('deve adicionar um participante ao Time B', () => {
    const participanteNome = 'Maria Antônia';
    const result = turmaManager.adicionarParticipante('UNASP', 'B', participanteNome);
    expect(result).toBe('Participante adicionado ao Time B');
    expect(turmaManager.visualizarParticipantes('UNASP', 'B')).toContain(participanteNome);
  });
});
