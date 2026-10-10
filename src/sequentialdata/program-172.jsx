function MembershipCard({ name, membership, points }) {
    let reward;

    if (points >= 1000) {
        reward = "Gold Reward";
    } else if (points >= 500) {
        reward = "Silver Reward";
    } else {
        reward = "Basic Reward";
    }

    return (
        <div>
            <h2>{name}</h2>
            <p>Membership: {membership}</p>
            <p>Reward Points: {points}</p>
            <p>Reward Level: {reward}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <MembershipCard name="Bishesh" membership="Premium" points={1200} />
            <MembershipCard name="Rahul" membership="Standard" points={700} />
            <MembershipCard name="Sita" membership="Basic" points={250} />
        </div>
    );
}

export default App;