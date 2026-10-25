function App() {
  const books = [
    { title: "Clean Code", author: "Robert Martin", available: true },
    { title: "Python Basics", author: "John Smith", available: false },
    { title: "Learning React", author: "Alex Johnson", available: true },
    { title: "Java Programming", author: "James Gosling", available: true },
  ];

  return (
    <div>
      <h1>Library Book Catalog</h1>

      {books.map((book, index) => (
        <div key={index}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Status: {book.available ? "Available" : "Borrowed"}</p>
        </div>
      ))}
    </div>
  );
}

export default App;