// 1. Setup iniziale e struttura dati
class Fattura {
    constructor(id, cliente, importo, data) {
        if (!id || !cliente || !importo || !data) {
            throw new Error("Tutti i campi sono obbligatori");
        }
        this.id = id;
        this.cliente = cliente;
        this.importo = importo;
        this.data = data;
    }
}

// In memoria array per le fatture
const fatture = [];

// Funzioni CRUD
function aggiungiFattura(fattura) {
    if (!(fattura instanceof Fattura)) {
        throw new Error("L'oggetto fornito non è una fattura valida");
    }
    fatture.push(fattura);
    return fattura;
}

function modificaFattura(id, datiModificati) {
    const fattura = fatture.find(f => f.id === id);
    if (!fattura) {
        throw new Error("Fattura non trovata");
    }
    if (datiModificati.cliente !== undefined) fattura.cliente = datiModificati.cliente;
    if (datiModificati.importo !== undefined) fattura.importo = datiModificati.importo;
    if (datiModificati.data !== undefined) fattura.data = datiModificati.data;
    return fattura;
}

function eliminaFattura(id) {
    const index = fatture.findIndex(f => f.id === id);
    if (index === -1) {
        throw new Error("Fattura non trovata");
    }
    return fatture.splice(index, 1)[0];
}

function recuperaFatture() {
    return fatture;
}

// Export per i test
module.exports = {
    Fattura,
    aggiungiFattura,
    modificaFattura,
    eliminaFattura,
    recuperaFatture
};