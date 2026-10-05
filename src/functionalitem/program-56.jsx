function SkillList({ skills }) {
    return (
        <div>
            <h2>My Skills</h2>

            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}

function App() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js"
    ];

    return <SkillList skills={skills} />;
}

export default App;