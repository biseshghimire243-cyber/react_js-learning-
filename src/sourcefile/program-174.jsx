function BookCard({ title, author, pages }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Author: {author}</p>
            <p>Pages: {pages}</p>
        </div>
    );
}

function App() {
    const books = [
        { id: 1, title: "Atomic Habits", author: "James Clear", pages: 320 },
        { id: 2, title: "Deep Work", author: "Cal Newport", pages: 296 },
        { id: 3, title: "Clean Code", author: "Robert Martin", pages: 464 }
    ];

    return (
        <div>
            <h1>Library Books</h1>
            {books.map((book) => (
                <BookCard
                    key={book.id}
                    title={book.title}
                    author={book.author}
                    pages={book.pages}
                />
            ))}
        </div>
    );
}

export default App;