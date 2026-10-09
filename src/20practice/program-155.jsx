function LibraryCard({ member, borrowed, limit }) {
    const remaining = limit - borrowed;

    return (
        <div>
            <h2>Member: {member}</h2>
            <p>Books Borrowed: {borrowed}</p>
            <p>Borrowing Limit: {limit}</p>
            <p>Remaining Allowance: {remaining}</p>

            {remaining > 0 ? (
                <p>You can borrow more books.</p>
            ) : (
                <p>Borrowing limit reached.</p>
            )}
        </div>
    );
}

function App() {
    return (
        <div>
            <LibraryCard member="Bishesh" borrowed={2} limit={5} />
            <LibraryCard member="Sita" borrowed={5} limit={5} />
        </div>
    );
}

export default App;