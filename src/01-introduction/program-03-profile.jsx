function App() {
    const name = "Bishesh Ghimire";
    const age = 23;
    const profession = "student";
    const experience = "Beginners";

    return (
        <div>
            <h1>{name}</h1>

            <h2>Personal Information</h2>

            <p>Age: {age}</p>
            <p>Profession: {profession}</p>
            <p>Experience: {experience} learning</p>

            <h3>About Me</h3>

            <p>
                My name is {name}. I am a {profession}.
                
            </p>
        </div>
    );
}

export default App;