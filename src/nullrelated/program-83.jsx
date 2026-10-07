function UserCard({ name, age, city }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>City: {city}</p>
        </div>
    );
}

function App() {
    const users = [
        { id: 1, name: "Bishesh", age: 22, city: "Itahari" },
        { id: 2, name: "Rahul", age: 21, city: "Kathmandu" },
        { id: 3, name: "Sita", age: 23, city: "Pokhara" }
    ];

    return (
        <div>
            <h1>User List</h1>

            {users.map((user) => (
                <UserCard
                    key={user.id}
                    name={user.name}
                    age={user.age}
                    city={user.city}
                />
            ))}
        </div>
    );
}

export default App;