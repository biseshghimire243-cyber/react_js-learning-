function BookCard({ title, author, year }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Author: {author}</p>
            <p>Published: {year}</p>
        </div>
    );
}

function App() {
    const books = [
        {
            id: 1,
            title: "Clean Code",
            author: "Robert Martin",
            year: 2008
        },
        {
            id: 2,
            title: "The Pragmatic Programmer",
            author: "David Thomas",
            year: 1999
        },
        {
            id: 3,
            title: "JavaScript Guide",
            author: "John Smith",
            year: 2022
        }
    ];

    return (
        <div>
            <h1>Book Collection</h1>

            {books.map((book) => (
                <BookCard
                    key={book.id}
                    title={book.title}
                    author={book.author}
                    year={book.year}
                />
            ))}
        </div>
    );
}

export default App;