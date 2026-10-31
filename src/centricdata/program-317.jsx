import React from "react";

function ScheduleCard({ schedule }) {
    return (
        <div style={{
            padding: "15px",
            margin: "10px",
            borderLeft: "5px solid steelblue",
            backgroundColor: "#f2f2f2"
        }}>
            <h3>{schedule.subject}</h3>
            <p>Day: {schedule.day}</p>
            <p>Time: {schedule.time}</p>
            <p>Room: {schedule.room}</p>
        </div>
    );
}

function App() {
    const schedules = [
        {
            id: 1,
            subject: "Web Technology",
            day: "Sunday",
            time: "10:00 AM",
            room: "Room 101"
        },
        {
            id: 2,
            subject: "Database Management",
            day: "Monday",
            time: "11:00 AM",
            room: "Room 202"
        },
        {
            id: 3,
            subject: "Artificial Intelligence",
            day: "Tuesday",
            time: "12:00 PM",
            room: "Room 303"
        }
    ];

    return (
        <div>
            <h1>Weekly Class Schedule</h1>

            {schedules.map(schedule => (
                <ScheduleCard
                    key={schedule.id}
                    schedule={schedule}
                />
            ))}
        </div>
    );
}

export default App;