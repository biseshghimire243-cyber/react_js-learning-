function JobCard({ title, company, location, remote }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Company: {company}</p>
            <p>Location: {location}</p>

            {remote ? (
                <p>Remote Available</p>
            ) : (
                <p>Office Based</p>
            )}
        </div>
    );
}

function App() {
    return (
        <div>
            <JobCard
                title="Frontend Developer"
                company="Tech Nepal"
                location="Kathmandu"
                remote={true}
            />

            <JobCard
                title="Backend Developer"
                company="Code House"
                location="Lalitpur"
                remote={false}
            />
        </div>
    );
}

export default App;