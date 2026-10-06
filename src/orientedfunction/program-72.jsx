function JobCard({ title, company, location, remote }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Company: {company}</p>
            <p>Location: {location}</p>

            {remote && <p>🏠 Remote Available</p>}
        </div>
    );
}

function App() {
    const jobs = [
        {
            id: 1,
            title: "React Developer",
            company: "Tech Nepal",
            location: "Kathmandu",
            remote: true
        },
        {
            id: 2,
            title: "Python Developer",
            company: "Code House",
            location: "Pokhara",
            remote: false
        },
        {
            id: 3,
            title: "UI Designer",
            company: "Creative Studio",
            location: "Lalitpur",
            remote: true
        }
    ];

    return (
        <div>
            <h1>Available Jobs</h1>

            {jobs.map((job) => (
                <JobCard
                    key={job.id}
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    remote={job.remote}
                />
            ))}
        </div>
    );
}

export default App;