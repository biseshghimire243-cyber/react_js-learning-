function BookCard({ title, author, price }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Author: {author}</p>
            <p>Price: Rs. {price}</p>
        </div>
    );
}

function App() {
    const books = [
        {
            id: 1,
            title: "Atomic Habits",
            author: "James Clear",
            price: 900
        },
        {
            id: 2,
            title: "Rich Dad Poor Dad",
            author: "Robert Kiyosaki",
            price: 700
        },
        {
            id: 3,
            title: "Clean Code",
            author: "Robert Martin",
            price: 1200
        }
    ];

    return (
        <div>
            {books.map((book) => (
                <BookCard
                    key={book.id}
                    title={book.title}
                    author={book.author}
                    price={book.price}
                />
            ))}
        </div>
    );
}

export default App;