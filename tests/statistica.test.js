// ### Esercizio di Programmazione: Test Driven Development per un Sistema di Analisi Statistica
 
// **Obiettivo**: Sviluppare una libreria JavaScript per analisi statistiche utilizzando il metodo Test Driven Development (TDD).
 
// #### Descrizione del Progetto
// L'obiettivo di questo esercizio Ã¨ creare una libreria JavaScript che fornisca funzionalitÃ  statistiche di base come media, mediana, moda, varianza e deviazione standard. L'esercizio si concentra sullo sviluppo guidato dai test (TDD), dove i test per ciascuna funzionalitÃ  sono scritti prima dell'implementazione effettiva.
 
// #### Tecnologie Suggerite
// - **Linguaggio**: JavaScript.
// - **Testing**: Jest per i test unitari.
 
// #### Milestones
// 1. **Setup Iniziale del Progetto**
//    - Inizializzare un nuovo progetto Node.js.
//    - Installare Jest e configurare l'ambiente di test.
 
// 2. **Scrittura dei Test Unitari**
//    - Scrivere test per la funzione della **media** basati su scenari attesi.
//    - Scrivere test per la **mediana**.
//    - Scrivere test per la **moda**.
//    - Scrivere test per la **varianza**.
//    - Scrivere test per la **deviazione standard**.
 
// 3. **Implementazione delle Funzioni Statistiche**
//    - Implementare la funzione per calcolare la media per passare i test scritti.
//    - Implementare le funzioni successive per mediana, moda, varianza, e deviazione standard seguendo l'approccio TDD.
 
// 4. **Refinamento e Ottimizzazione**
//    - Rifinire il codice per migliorare l'efficienza dopo che tutti i test di una funzione sono passati.
//    - Aggiungere test aggiuntivi per coprire casi limite e migliorare la robustezza del codice.
 
// #### Checklist del Progetto
// - [ ] Setup del progetto completato.
// - [ ] Test unitari per tutte le funzioni scritti.
// - [ ] Tutte le funzioni implementate e test passati.
// - [ ] Codice ottimizzato e privo di bug.
 
// #### Consegnabile Finale
// - Un repository Git con il codice sorgente completo.
// - Una suite di test unitari che verifica tutte le funzionalitÃ . 



describe('Statistica',() => {

    describe('Media Function',() => {
        test('Should thow error if is not an array',() => {
            expect();
        });

        test('Should throw error if array contains strings',() => {
            expect();
        });

        test('Should throw error if the array is empty',() => {
            expect();
        });

        test('Should throw error if the divider is 0',() => {
            expect();
        });
    });

    describe('Mediana Function',() => {
        test('Should throw error if the array is not ASC sorted',() => {
            expect();
        });

        test('Should throw error if array contains strings',() => {
            expect();
        });
    });

    describe('Varianza Function',() => {

        test('Should thow error if is not an array',() => {
            expect();
        });

        test('Should throw error if array contains strings',() => {
            expect();
        });

        test('Should throw error if  varianza < 0',() => {
            expect();
        });
    });

    describe('Moda Function',() => {

        test('Should thow error if is not an array',() => {
            expect();
        });

        test('Should throw error if array contains strings',() => {
            expect();
        });

        test('Should throw error if array contains more than 1 element and all items are different on each other',() => {});
    })

    describe('Deviazione',() => {

        test('Should thow error if is not an array',() => {
            expect();
        });

        test('Should throw error if array contains strings',() => {
            expect();
        });

        test('Should throw error if there is a negative number when square root',() =>{
            expect();
        });
    }


});