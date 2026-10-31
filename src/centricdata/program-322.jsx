import React from "react";

function ProfileHeader({ developer }) {
    return (
        <header>
            <h1>{developer.name}</h1>
            <h3>{developer.role}</h3>
            <p>{developer.location}</p>
        </header>
    );
}

function SkillSection({ skills }) {
    return (
        <section>
            <h2>Technical Skills</h2>

            {skills.map((skill, index) => (
                <span
                    key={index}
                    style={{
                        display: "inline-block",
                        backgroundColor: "#e0e7ff",
                        padding: "8px 12px",
                        margin: "5px",
                        borderRadius: "5px"
                    }}
                >
                    {skill}
                </span>
            ))}
        </section>
    );
}

function ProjectSection({ projects }) {
    return (
        <section>
            <h2>Recent Projects</h2>

            {projects.map(project => (
                <article key={project.id}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p>Technology: {project.technology}</p>
                </article>
            ))}
        </section>
    );
}

function App() {
    const developer = {
        name: "Bishesh Ghimire",
        role: "Full Stack Developer",
        location: "Nepal"
    };

    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Python",
        "Node.js",
        "MySQL"
    ];

    const projects = [
        {
            id: 1,
            title: "Guider Nepal AI",
            description: "AI-powered travel and tourism platform.",
            technology: "Python, Flask, JavaScript"
        },
        {
            id: 2,
            title: "FoodShala",
            description: "Online cloud kitchen ordering system.",
            technology: "HTML, CSS, JavaScript, Node.js"
        },
        {
            id: 3,
            title: "AI Face Scanner",
            description: "Face analysis application.",
            technology: "Python, OpenCV, Flask"
        }
    ];

    return (
        <div style={{ padding: "20px" }}>
            <ProfileHeader developer={developer} />

            <hr />

            <SkillSection skills={skills} />

            <hr />

            <ProjectSection projects={projects} />
        </div>
    );
}

export default App;