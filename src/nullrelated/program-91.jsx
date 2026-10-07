function BookCard({ title, author, available }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Author: {author}</p>

            {available ? (
                <p>Available for Borrowing</p>
            ) : (
                <p>Currently Borrowed</p>
            )}
        </div>
    );
}

function App() {
    const books = [
        {
            id: 1,
            title: "Clean Code",
            author: "Robert Martin",
            available: true
        },
        {
            id: 2,
            title: "The Alchemist",
            author: "Paulo Coelho",
            available: false
        },
        {
            id: 3,
            title: "JavaScript Basics",
            author: "John Smith",
            available: true
        }
    ];

    return (
        <div>
            <h1>Library Books</h1>

            {books.map((book) => (
                <BookCard
                    key={book.id}
                    title={book.title}
                    author={book.author}
                    available={book.available}
                />
            ))}
        </div>
    );
}

export default App;
