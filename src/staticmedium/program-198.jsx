function Appointment({ patient, doctor, time, status }) {
  return (
    <div>
      <h3>{patient}</h3>
      <p>Doctor: {doctor}</p>
      <p>Appointment Time: {time}</p>
      <p>Status: {status}</p>
      <p>
        {status === "Confirmed"
          ? "Please arrive on time."
          : "Please contact the hospital."}
      </p>
    </div>
  );
}

export default function App() {
  const appointments = [
    { id: 1, patient: "Aarav", doctor: "Dr. Sharma", time: "10:00 AM", status: "Confirmed" },
    { id: 2, patient: "Sita", doctor: "Dr. Rai", time: "11:30 AM", status: "Pending" },
    { id: 3, patient: "Rohan", doctor: "Dr. Thapa", time: "02:00 PM", status: "Confirmed" },
  ];

  return (
    <div>
      <h1>Hospital Appointment List</h1>
      {appointments.map((appointment) => (
        <Appointment key={appointment.id} {...appointment} />
      ))}
    </div>
  );
}