function UserProfile({ name, email, role }) {
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
            <h1>User Profiles</h1>

            <UserProfile
                name="Bishesh Ghimire"
                email="bishesh@example.com"
                role="Developer"
            />

            <UserProfile
                name="Rahul Sharma"
                email="rahul@example.com"
                role="Designer"
            />
        </div>
    );
}

export default App;