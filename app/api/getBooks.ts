import { Book } from "../types/book";

export async function fetchBookRecommendation(
  query: string
): Promise<Book | null> {
  const apiKey = process.env.GOOGLE_BOOKS_API_KEY;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
    query
  )}&key=${apiKey}&maxResults=1`;

  const response = await fetch(url);

  if (!response.ok) {
    console.error("Erro ao obter os dados da Google Books API.");
    return null;
  }

  const data = await response.json();

  if (data.items && data.items.length > 0) {
    const book = data.items[0].volumeInfo;

    return {
      title: book.title,
      authors: book.authors || ["Autor desconhecido"],
      description: book.description || "Sem descrição disponível.",
      thumbnail: book.imageLinks?.thumbnail || "/placeholder-image.png",
      infoLink: book.infoLink || "#",
    };
  }

  return null;
}
