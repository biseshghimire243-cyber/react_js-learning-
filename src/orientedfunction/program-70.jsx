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
    const members = [
        {
            id: 1,
            name: "Bishesh Ghimire",
            position: "Frontend Developer",
            experience: 2
        },
        {
            id: 2,
            name: "Aarav Sharma",
            position: "Backend Developer",
            experience: 3
        },
        {
            id: 3,
            name: "Sita Rai",
            position: "UI Designer",
            experience: 2
        }
    ];

    return (
        <div>
            <h1>Our Team</h1>

            {members.map((member) => (
                <TeamMember
                    key={member.id}
                    name={member.name}
                    position={member.position}
                    experience={member.experience}
                />
            ))}
        </div>
    );
}

export default App;