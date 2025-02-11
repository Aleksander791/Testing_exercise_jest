// filterResults.test.js
import { filterResults } from "./utils";

describe("filterResults", () => {
  const items = ["Apple", "Banana", "Orange", "Avocado", "Pineapple"];

  test("Filtraggio dei risultati", () => {
    expect(filterResults(items, "Ap")).toEqual(["Apple", "Avocado"]);
    expect(filterResults(items, "an")).toEqual(["Banana", "Orange"]);
  });

  test("Ordinamento alfabetico", () => {
    const filtered = filterResults(items, "A");
    expect(filtered).toEqual(["Apple", "Avocado"]); // Verifica che siano ordinati
  });

  test("Limite massimo di risultati", () => {
    const filtered = filterResults(items, "A");
    expect(filtered.length).toBeLessThanOrEqual(5); // I risultati devono essere limitati a 5
  });

  test("Messaggio quando non ci sono risultati", () => {
    const filtered = filterResults(items, "Z");
    expect(filtered).toBe("Nessun risultato trovato"); // Verifica il messaggio di errore
  });

  test("Ricerca vuota", () => {
    const filtered = filterResults(items, "");
    expect(filtered).toEqual([
      "Apple",
      "Avocado",
      "Banana",
      "Orange",
      "Pineapple",
    ]); // Tutti gli elementi devono essere mostrati
  });
});
