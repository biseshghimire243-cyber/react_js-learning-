// program-10.jsx

function Card({ children }) {
    return (
        <div>
            <h2>Card</h2>
            {children}
        </div>
    );
}

function App() {
    return (
        <div>
            <Card>
                <p>This is the first card.</p>
            </Card>

            <Card>
                <p>This is the second card.</p>
            </Card>
        </div>
    );
}

export default App;