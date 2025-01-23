function validateInput(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Input non valido: sono richiesti numeri');
    }
  }
  
  function add(a, b) {
    validateInput(a, b);
    return a + b;
  }
  
  function subtract(a, b) {
    validateInput(a, b);
    return a - b;
  }
  
  function multiply(a, b) {
    validateInput(a, b);
    return a * b;
  }
  
  function divide(a, b) {
    validateInput(a, b);
    if (b === 0) {
      throw new Error('Impossibile dividere per zero');
    }
    return a / b;
}
  
module.exports = { add, subtract, multiply, divide };
  