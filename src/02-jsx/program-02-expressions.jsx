function App() {
    const firstNumber = 20;
    const secondNumber = 10;

    return (
        <div>
            <h1>Calculator</h1>

            <p>Addition: {firstNumber + secondNumber}</p>
            <p>Subtraction: {firstNumber - secondNumber}</p>
            <p>Multiplication: {firstNumber * secondNumber}</p>
            <p>Division: {firstNumber / secondNumber}</p>
        </div>
    );
}

export default App;