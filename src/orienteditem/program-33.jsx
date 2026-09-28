function UserCard({ name, email, city }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>City: {city}</p>
        </div>
    );
}

function App() {
    const users = [
        {
            id: 1,
            name: "Bishesh Ghimire",
            email: "bishesh@example.com",
            city: "Itahari"
        },
        {
            id: 2,
            name: "Rahul Sharma",
            email: "rahul@example.com",
            city: "Kathmandu"
        },
        {
            id: 3,
            name: "Suman Rai",
            email: "suman@example.com",
            city: "Dharan"
        }
    ];

    return (
        <div>
            <h1>User List</h1>

            {users.map((user) => (
                <UserCard
                    key={user.id}
                    name={user.name}
                    email={user.email}
                    city={user.city}
                />
            ))}
        </div>
    );
}

export default App;