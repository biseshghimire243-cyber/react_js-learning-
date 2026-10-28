function App() {
  const patients = [
    { name: "Ram", consultation: 800, medicine: 1200, room: 2000 },
    { name: "Sita", consultation: 1000, medicine: 800, room: 1500 },
    { name: "Hari", consultation: 500, medicine: 600, room: 1000 },
  ];

  return (
    <div>
      <h1>Hospital Patient Billing System</h1>

      {patients.map((patient) => {
        const total = patient.consultation + patient.medicine + patient.room;

        return (
          <div key={patient.name}>
            <h3>Patient: {patient.name}</h3>
            <p>Consultation: Rs. {patient.consultation}</p>
            <p>Medicine: Rs. {patient.medicine}</p>
            <p>Room Charges: Rs. {patient.room}</p>
            <h4>Total Bill: Rs. {total}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default App;