const { add, subtract, multiply, divide } = require('./calculator');

describe('Funzioni della calcolatrice', () => {
  // Test per l'addizione
  test('l\'addizione di 2 e 3 deve restituire 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  // Test per la sottrazione
  test('la sottrazione di 5 e 2 deve restituire 3', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  // Test per la moltiplicazione
  test('la moltiplicazione di 4 e 3 deve restituire 12', () => {
    expect(multiply(4, 3)).toBe(12);
  });

  // Test per la divisione
  test('la divisione di 10 per 2 deve restituire 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

  // Controllo della divisione per zero
  test('la divisione per zero deve generare un errore', () => {
    expect(() => divide(10, 0)).toThrow('Impossibile dividere per zero');
  });

  // Controllo che i parametri non siano stringhe
  test('deve generare un errore se i parametri sono stringhe', () => {
    expect(() => add("2", 3)).toThrow('Input non valido: sono richiesti numeri');
    expect(() => subtract(5, "2")).toThrow('Input non valido: sono richiesti numeri');
    expect(() => multiply("4", "3")).toThrow('Input non valido: sono richiesti numeri');
    expect(() => divide("10", 2)).toThrow('Input non valido: sono richiesti numeri');
  });

  // Controllo che i parametri non siano null
  test('deve generare un errore se i parametri sono null', () => {
    expect(() => add(null, 3)).toThrow('Input non valido: sono richiesti numeri');
    expect(() => subtract(5, null)).toThrow('Input non valido: sono richiesti numeri');
    expect(() => multiply(null, 3)).toThrow('Input non valido: sono richiesti numeri');
    expect(() => divide(10, null)).toThrow('Input non valido: sono richiesti numeri');
  });

  // Controllo che i parametri siano numeri 
  test('deve generare un errore se i parametri sono undefined', () => {
    expect(() => add(undefined, 3)).toThrow('Input non valido: sono richiesti numeri');
    expect(() => subtract(5, undefined)).toThrow('Input non valido: sono richiesti numeri');
    expect(() => multiply(4, undefined)).toThrow('Input non valido: sono richiesti numeri');
    expect(() => divide(undefined, 2)).toThrow('Input non valido: sono richiesti numeri');
  });
});
