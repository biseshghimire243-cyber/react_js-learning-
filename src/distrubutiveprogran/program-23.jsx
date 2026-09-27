function TeamMember({ name, position, experience }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Position: {position}</p>
            <p>Experience: {experience} years</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Our Team</h1>

            <TeamMember
                name="Bishesh Ghimire"
                position="Frontend Developer"
                experience={2}
            />

            <TeamMember
                name="Rahul Sharma"
                position="Backend Developer"
                experience={3}
            />
        </div>
    );
}

export default App;