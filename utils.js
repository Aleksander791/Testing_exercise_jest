// utils.js

export const filterResults = (items, query, limit = 5) => {
  if (!query) return items.sort().slice(0, limit); // Se la query è vuota, ritorna tutti gli elementi ordinati

  const filtered = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  ); // Filtra gli elementi in base alla query

  if (filtered.length === 0) {
    return "Nessun risultato trovato"; // Se non ci sono risultati, ritorna un messaggio
  }

  return filtered.sort().slice(0, limit); // Ordina i risultati alfabeticamente e limita il numero
};
