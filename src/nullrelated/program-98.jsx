function ProfileCard({ name, role, verified }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Role: {role}</p>

            {verified ? (
                <p>✓ Verified User</p>
            ) : (
                <p>Unverified User</p>
            )}
        </div>
    );
}

function App() {
    const users = [
        {
            id: 1,
            name: "Bishesh Ghimire",
            role: "Developer",
            verified: true
        },
        {
            id: 2,
            name: "Rahul Sharma",
            role: "Designer",
            verified: false
        },
        {
            id: 3,
            name: "Sita Rai",
            role: "Manager",
            verified: true
        }
    ];

    return (
        <div>
            <h1>User Profiles</h1>

            {users.map((user) => (
                <ProfileCard
                    key={user.id}
                    name={user.name}
                    role={user.role}
                    verified={user.verified}
                />
            ))}
        </div>
    );
}

export default App;