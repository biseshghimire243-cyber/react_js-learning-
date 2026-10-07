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
    return (
        <div>
            <BookCard
                title="Clean Code"
                author="Robert C. Martin"
                available={true}
            />

            <BookCard
                title="The Alchemist"
                author="Paulo Coelho"
                available={false}
            />
        </div>
    );
}

export default App;