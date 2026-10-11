function GymMembership({ name, plan, months, monthlyFee }) {
    const total = months * monthlyFee;

    return (
        <div>
            <h2>{name}</h2>
            <p>Plan: {plan}</p>
            <p>Duration: {months} months</p>
            <p>Total Fee: Rs. {total}</p>
            {months >= 12 && <p>Annual Member</p>}
        </div>
    );
}

function App() {
    return (
        <div>
            <GymMembership name="Bishesh" plan="Premium" months={12} monthlyFee={2500} />
            <GymMembership name="Rahul" plan="Basic" months={3} monthlyFee={1800} />
        </div>
    );
}

export default App;