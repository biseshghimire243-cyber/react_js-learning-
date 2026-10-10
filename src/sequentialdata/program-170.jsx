function CharityDonation({ donor, amount, cause }) {
    return (
        <div>
            <h2>Donation Receipt</h2>
            <p>Donor: {donor}</p>
            <p>Amount: Rs. {amount}</p>
            <p>Cause: {cause}</p>

            {amount >= 5000 && <p>Thank you for your generous donation!</p>}
        </div>
    );
}

function App() {
    return (
        <div>
            <CharityDonation donor="Bishesh" amount={6000} cause="Education" />
            <CharityDonation donor="Sita" amount={2000} cause="Healthcare" />
        </div>
    );
}

export default App;