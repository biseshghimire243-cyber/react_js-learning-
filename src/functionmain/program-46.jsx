function JobCard({ title, company, location, remote }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Company: {company}</p>
            <p>Location: {location}</p>
            <p>
                Work Type: {remote ? "Remote" : "Office"}
            </p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Job Opportunities</h1>

            <JobCard
                title="Frontend Developer"
                company="Tech Nepal"
                location="Kathmandu"
                remote={true}
            />

            <JobCard
                title="Backend Developer"
                company="Code House"
                location="Biratnagar"
                remote={false}
            />
        </div>
    );
}

export default App;