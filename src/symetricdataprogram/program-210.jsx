function Book({ title, author, pages, available }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Pages: {pages}</p>
      <p>{available ? "Available" : "Borrowed"}</p>
      <p>{pages > 300 ? "Long Read" : "Short Read"}</p>
    </div>
  );
}

export default function App() {
  const books = [
    { id: 1, title: "Clean Code", author: "Robert Martin", pages: 450, available: true },
    { id: 2, title: "Atomic Habits", author: "James Clear", pages: 320, available: false },
    { id: 3, title: "The Alchemist", author: "Paulo Coelho", pages: 180, available: true },
  ];

  return (
    <div>
      <h1>My Book Collection</h1>
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </div>
  );
}