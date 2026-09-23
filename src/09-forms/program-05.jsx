function App() {
    const marks = 75;

    return (
        <div>
            <h1>Student Result</h1>

            <h2>Marks: {marks}</h2>

            {marks >= 40 ? (
                <h2>Result: Pass ✅</h2>
            ) : (
                <h2>Result: Fail ❌</h2>
            )}
        </div>
    );
}

export default App;