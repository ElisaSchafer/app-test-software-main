const turmaManager = require('../turmaManager');

describe('Teste de Criação de Turma', () => {
  beforeEach(() => {
    turmaManager.reset(); 
  });

  afterEach(() => {
  });

  it('deve criar uma turma com sucesso', () => {
    const turmaNome = 'UNASP';
    const result = turmaManager.criarTurma(turmaNome);
    expect(result).toBe('Turma criada com sucesso');
    expect(turmaManager.visualizarTurmas()).toContain(turmaNome);
  });
});
