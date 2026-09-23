function App() {
    const isAdmin = true;

    return (
        <div>
            <h1>Dashboard</h1>

            {isAdmin && (
                <button>Admin Panel</button>
            )}
        </div>
    );
}

export default App;