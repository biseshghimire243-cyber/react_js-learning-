import React from "react";

function TeamMember({ member }) {
    return (
        <div style={{
            border: "1px solid #ddd",
            padding: "20px",
            margin: "12px",
            borderRadius: "10px"
        }}>
            <h2>{member.name}</h2>
            <h4>{member.role}</h4>
            <p>{member.bio}</p>
            <p>Experience: {member.experience} years</p>
        </div>
    );
}

function App() {
    const team = [
        {
            id: 1,
            name: "Bishesh Ghimire",
            role: "Full Stack Developer",
            bio: "Develops modern web applications.",
            experience: 2
        },
        {
            id: 2,
            name: "Rahul Sharma",
            role: "UI Designer",
            bio: "Designs attractive user interfaces.",
            experience: 3
        },
        {
            id: 3,
            name: "Sita Thapa",
            role: "Backend Developer",
            bio: "Builds server-side applications.",
            experience: 4
        }
    ];

    return (
        <div>
            <h1>Our Development Team</h1>

            {team.map(member => (
                <TeamMember key={member.id} member={member} />
            ))}
        </div>
    );
}

export default App;