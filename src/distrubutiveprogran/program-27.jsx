function JobCard({ title, company, salary }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Company: {company}</p>
            <p>Salary: Rs. {salary}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Available Jobs</h1>

            <JobCard
                title="Frontend Developer"
                company="Tech Nepal"
                salary={50000}
            />

            <JobCard
                title="Backend Developer"
                company="Code House"
                salary={60000}
            />
        </div>
    );
}

export default App;