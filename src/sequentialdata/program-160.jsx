function BusTicket({ passenger, destination, seat, price }) {
    return (
        <div>
            <h2>Bus Ticket</h2>
            <p>Passenger: {passenger}</p>
            <p>Destination: {destination}</p>
            <p>Seat Number: {seat}</p>
            <p>Ticket Price: Rs. {price}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <BusTicket
                passenger="Bishesh"
                destination="Kathmandu"
                seat="A12"
                price={1200}
            />
            <BusTicket
                passenger="Sita"
                destination="Pokhara"
                seat="B05"
                price={900}
            />
        </div>
    );
}

export default App;