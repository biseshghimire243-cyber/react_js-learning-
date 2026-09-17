import { useState } from "react";

function App() {
    const [name, setName] = useState("Bishesh");
    const [age, setAge] = useState(23);

    return (
        <div>
            <h1>Student Information</h1>

            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>

            <button onClick={() => setName("Rahul")}>
                Change Name
            </button>

            <button onClick={() => setAge(age + 1)}>
                Increase Age
            </button>
        </div>
    );
}

export default App;