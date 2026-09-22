function App() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js"
    ];

    return (
        <div>
            <h1>My Skills</h1>

            <ul>
                {skills.map((skill) => (
                    <li>{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;