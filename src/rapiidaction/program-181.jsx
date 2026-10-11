function EmployeeCard({ name, tasksCompleted, target }) {
    const percentage = (tasksCompleted / target) * 100;

    return (
        <div>
            <h2>{name}</h2>
            <p>Tasks Completed: {tasksCompleted}</p>
            <p>Target: {target}</p>
            <p>Completion: {percentage.toFixed(0)}%</p>
            {percentage >= 100 ? <p>Target Achieved</p> : <p>Target Pending</p>}
        </div>
    );
}

function App() {
    return (
        <div>
            <EmployeeCard name="Bishesh" tasksCompleted={20} target={20} />
            <EmployeeCard name="Sita" tasksCompleted={15} target={20} />
        </div>
    );
}

export default App;