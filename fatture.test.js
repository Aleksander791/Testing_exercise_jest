const { Fattura, aggiungiFattura, modificaFattura, eliminaFattura, recuperaFatture } = require('./fatture');

describe('Sistema di Gestione Fatture', () => {
  beforeEach(() => {
    // Ripulisci i dati prima di ogni test
    while (recuperaFatture().length > 0) {
      eliminaFattura(recuperaFatture()[0].id);
    }
  });

  test('Aggiungere una nuova fattura valida', () => {
    const nuovaFattura = new Fattura(1, 'Cliente A', 100.50, '2025-01-01');
    const aggiunta = aggiungiFattura(nuovaFattura);
    expect(aggiunta).toEqual(nuovaFattura);
    expect(recuperaFatture().length).toBe(1);
  });

  test('Modificare una fattura esistente', () => {
    const nuovaFattura = new Fattura(1, 'Cliente A', 100.50, '2025-01-01');
    aggiungiFattura(nuovaFattura);
    const modificata = modificaFattura(1, { cliente: 'Cliente B', importo: 200 });
    expect(modificata.cliente).toBe('Cliente B');
    expect(modificata.importo).toBe(200);
  });

  test('Eliminare una fattura esistente', () => {
    const nuovaFattura = new Fattura(1, 'Cliente A', 100.50, '2025-01-01');
    aggiungiFattura(nuovaFattura);
    const eliminata = eliminaFattura(1);
    expect(eliminata).toEqual(nuovaFattura);
    expect(recuperaFatture().length).toBe(0);
  });

  test('Recuperare tutte le fatture', () => {
    aggiungiFattura(new Fattura(1, 'Cliente A', 100.50, '2025-01-01'));
    aggiungiFattura(new Fattura(2, 'Cliente B', 200.00, '2025-02-01'));
    const tutteFatture = recuperaFatture();
    expect(tutteFatture.length).toBe(2);
  });

  test('Gestire errori per dati mancanti', () => {
    expect(() => new Fattura()).toThrow();
    expect(() => aggiungiFattura({ id: 1 })).toThrow();
    expect(() => modificaFattura(99, { cliente: 'Cliente X' })).toThrow('Fattura non trovata');
    expect(() => eliminaFattura(99)).toThrow('Fattura non trovata');
  });
});
