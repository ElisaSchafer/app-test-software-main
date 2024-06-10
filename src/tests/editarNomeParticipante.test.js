const turmaManager = require('../turmaManager');

describe('Teste de Edição dos Nomes dos Participantes', () => {
  beforeEach(() => {
    turmaManager.reset();
    turmaManager.criarTurma('UNASP');
    turmaManager.adicionarParticipante('UNASP', 'A', 'Luiza');
  });

  it('deve editar o nome de um participante', () => {
    const result = turmaManager.editarParticipante('UNASP', 'A', 'Luiza', 'Luiza Silva');
    expect(result).toBe('Nome do participante atualizado');
    expect(turmaManager.visualizarParticipantes('UNASP', 'A')).toContain('Luiza Silva');
  });
});
