function UserCard({ name, email, role }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>User Information</h1>

            <UserCard
                name="Bishesh Ghimire"
                email="bishesh@example.com"
                role="Developer"
            />

            <UserCard
                name="Rahul Sharma"
                email="rahul@example.com"
                role="Designer"
            />
        </div>
    );
}

export default App;