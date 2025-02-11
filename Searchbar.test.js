// SearchBar.test.js
import { render, fireEvent, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("Test della parte visibile del componente SearchBar", () => {
  const items = ["Apple", "Banana", "Orange", "Avocado", "Pineapple"];

  test("Visualizzazione dei risultati iniziali", () => {
    render(<SearchBar items={items} />);

    // Verifica che tutti gli elementi siano visibili inizialmente
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();
    expect(screen.getByText("Orange")).toBeInTheDocument();
    expect(screen.getByText("Avocado")).toBeInTheDocument();
    expect(screen.getByText("Pineapple")).toBeInTheDocument();
  });

  test("Aggiornamento dinamico dei risultati", () => {
    render(<SearchBar items={items} />);

    // Simula la digitazione nel campo di ricerca
    fireEvent.change(screen.getByPlaceholderText("Cerca..."), {
      target: { value: "Ap" },
    });

    // Verifica che vengano mostrati solo gli elementi corrispondenti
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Avocado")).toBeInTheDocument();
    expect(screen.queryByText("Banana")).toBeNull(); // 'Banana' non deve essere mostrato
  });

  test("Gestione dei risultati vuoti", () => {
    render(<SearchBar items={items} />);

    // Simula una ricerca che non restituisce risultati
    fireEvent.change(screen.getByPlaceholderText("Cerca..."), {
      target: { value: "Z" },
    });

    // Verifica che venga mostrato "Nessun risultato trovato"
    expect(screen.getByText("Nessun risultato trovato")).toBeInTheDocument();
  });

  test("Limite dei risultati a 5", () => {
    render(<SearchBar items={items} />);

    // Simula una ricerca che restituisce più di 5 risultati
    fireEvent.change(screen.getByPlaceholderText("Cerca..."), {
      target: { value: "A" },
    });

    // Verifica che vengano mostrati solo 5 risultati
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(5); // Limite a 5 risultati
  });
});
