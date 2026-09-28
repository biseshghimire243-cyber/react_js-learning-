function Book({ title, author, available }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Author: {author}</p>
            <p>
                Status: {available ? "Available" : "Borrowed"}
            </p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Library Books</h1>

            <Book
                title="Clean Code"
                author="Robert C. Martin"
                available={true}
            />

            <Book
                title="The Alchemist"
                author="Paulo Coelho"
                available={false}
            />
        </div>
    );
}

export default App;