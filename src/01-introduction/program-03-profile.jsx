function App() {
    const name = "Bishesh Ghimire";
    const age = 23;
    const profession = "Web Developer";
    const experience = 2;

    return (
        <div>
            <h1>{name}</h1>

            <h2>Personal Information</h2>

            <p>Age: {age}</p>
            <p>Profession: {profession}</p>
            <p>Experience: {experience} years</p>

            <h3>About Me</h3>

            <p>
                My name is {name}. I am a {profession}.
                I have {experience} years of experience.
            </p>
        </div>
    );
}

export default App;