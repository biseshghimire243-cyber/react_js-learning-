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
    return (
        <div>
            <BookCard
                title="Clean Code"
                author="Robert C. Martin"
                price={1800}
            />

            <BookCard
                title="JavaScript Guide"
                author="John Smith"
                price={1200}
            />
        </div>
    );
}

export default App;