function UserProfile({ name, age, profession }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Profession: {profession}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <UserProfile
                name="Bishesh Ghimire"
                age={22}
                profession="Developer"
            />

            <UserProfile
                name="Rahul Sharma"
                age={24}
                profession="Designer"
            />
        </div>
    );
}

export default App;