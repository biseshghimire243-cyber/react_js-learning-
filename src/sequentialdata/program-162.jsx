function MovieTicketBooking({ movie, tickets, price }) {
    const total = tickets * price;

    return (
        <div>
            <h2>{movie}</h2>
            <p>Tickets: {tickets}</p>
            <p>Price per Ticket: Rs. {price}</p>
            <p>Total Amount: Rs. {total}</p>

            {tickets >= 5 && <p>Group Booking!</p>}
        </div>
    );
}

function App() {
    return (
        <div>
            <MovieTicketBooking movie="Avengers" tickets={5} price={350} />
            <MovieTicketBooking movie="Inception" tickets={2} price={300} />
        </div>
    );
}

export default App;