function JobCard({ title, company, salary, remote }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Company: {company}</p>
            <p>Salary: Rs. {salary}</p>

            {remote ? (
                <p>Remote Job Available</p>
            ) : (
                <p>Office Job</p>
            )}
        </div>
    );
}

function App() {
    const jobs = [
        {
            id: 1,
            title: "Frontend Developer",
            company: "Tech Nepal",
            salary: 50000,
            remote: true
        },
        {
            id: 2,
            title: "Backend Developer",
            company: "Code House",
            salary: 60000,
            remote: false
        },
        {
            id: 3,
            title: "UI Designer",
            company: "Creative Studio",
            salary: 45000,
            remote: true
        }
    ];

    return (
        <div>
            <h1>Job Opportunities</h1>

            {jobs.map((job) => (
                <JobCard
                    key={job.id}
                    title={job.title}
                    company={job.company}
                    salary={job.salary}
                    remote={job.remote}
                />
            ))}
        </div>
    );
}

export default App;