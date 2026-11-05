import React from "react";

function BookCard({ book }) {
    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "15px",
            margin: "12px",
            borderRadius: "8px"
        }}>
            <h2>📖 {book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Published: {book.year}</p>
        </div>
    );
}

function App() {
    const books = [
        {
            id: 1,
            title: "The Alchemist",
            author: "Paulo Coelho",
            genre: "Adventure",
            year: 1988
        },
        {
            id: 2,
            title: "Atomic Habits",
            author: "James Clear",
            genre: "Self-help",
            year: 2018
        },
        {
            id: 3,
            title: "Rich Dad Poor Dad",
            author: "Robert Kiyosaki",
            genre: "Finance",
            year: 1997
        }
    ];

    return (
        <div>
            <h1>My Book Library</h1>

            {books.map(book => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    );
}

export default App;