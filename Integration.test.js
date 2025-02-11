// Integration.test.js
import { render, fireEvent, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("Flusso completo di ricerca", () => {
  const items = ["Apple", "Banana", "Orange", "Avocado", "Pineapple"];

  test("Flusso completo di ricerca", () => {
    render(<SearchBar items={items} />);

    // Verifica che tutti gli elementi siano visibili inizialmente
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();
    expect(screen.getByText("Orange")).toBeInTheDocument();
    expect(screen.getByText("Avocado")).toBeInTheDocument();
    expect(screen.getByText("Pineapple")).toBeInTheDocument();

    // Simula la digitazione di un termine di ricerca
    fireEvent.change(screen.getByPlaceholderText("Cerca..."), {
      target: { value: "Ap" },
    });

    // Verifica che vengano mostrati solo gli elementi che corrispondono alla ricerca
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Avocado")).toBeInTheDocument();
    expect(screen.queryByText("Banana")).toBeNull(); // 'Banana' non deve essere mostrata

    // Simula la ricerca con un termine che non corrisponde a nessun elemento
    fireEvent.change(screen.getByPlaceholderText("Cerca..."), {
      target: { value: "Z" },
    });

    // Verifica che venga mostrato il messaggio "Nessun risultato trovato"
    expect(screen.getByText("Nessun risultato trovato")).toBeInTheDocument();

    // Simula la ricerca vuota
    fireEvent.change(screen.getByPlaceholderText("Cerca..."), {
      target: { value: "" },
    });

    // Verifica che tutti gli elementi vengano mostrati
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();
    expect(screen.getByText("Orange")).toBeInTheDocument();
    expect(screen.getByText("Avocado")).toBeInTheDocument();
    expect(screen.getByText("Pineapple")).toBeInTheDocument();

    // Simula la ricerca con un termine che restituisce più di 5 risultati
    fireEvent.change(screen.getByPlaceholderText("Cerca..."), {
      target: { value: "A" },
    });

    // Verifica che vengano mostrati solo 5 risultati al massimo
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(5); // Limite di 5 risultati
  });
});
