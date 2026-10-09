function CinemaTicket({ movie, seat, price, booked }) {
    return (
        <div>
            <h2>{movie}</h2>
            <p>Seat: {seat}</p>
            <p>Price: Rs. {price}</p>

            {booked ? <p>Seat Booked</p> : <p>Seat Available</p>}
        </div>
    );
}

function App() {
    return (
        <div>
            <CinemaTicket movie="Avengers" seat="A1" price={350} booked={true} />
            <CinemaTicket movie="Batman" seat="B2" price={300} booked={false} />
        </div>
    );
}

export default App;