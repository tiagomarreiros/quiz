import { fetchBookRecommendation } from "../api/getBooks";

export default async function RecommendationPage() {
  // Simulação: Resultado do quiz (idealmente isto seria dinâmico)
  const quizResult = "auto coaching";

  // Obtém o livro recomendado com base no resultado
  const book = await fetchBookRecommendation(quizResult);

  return (
    <div className="recommendation-page">
      <h1>Recomendação de Livro</h1>
      {book ? (
        <div className="book-card">
          <img src={book.thumbnail} alt={book.title} />
          <h2>{book.title}</h2>
          <p>Autor(es): {book.authors.join(", ")}</p>
          <p>{book.description}</p>
          <a href={book.infoLink} target="_blank" rel="noopener noreferrer">
            Saiba mais
          </a>
        </div>
      ) : (
        <p>
          Não conseguimos encontrar uma recomendação no momento. Tenta novamente
          mais tarde!
        </p>
      )}
    </div>
  );
}
