import React from "react";

function Header({ name, profession }) {
    return (
        <header>
            <h1>{name}</h1>
            <h3>{profession}</h3>
        </header>
    );
}

function About({ description }) {
    return (
        <section>
            <h2>About Me</h2>
            <p>{description}</p>
        </section>
    );
}

function Education({ education }) {
    return (
        <section>
            <h2>Education</h2>

            {education.map((item, index) => (
                <p key={index}>
                    {item.degree} - {item.institute}
                </p>
            ))}
        </section>
    );
}

function Contact({ email, location }) {
    return (
        <section>
            <h2>Contact</h2>
            <p>Email: {email}</p>
            <p>Location: {location}</p>
        </section>
    );
}

function App() {
    const education = [
        {
            degree: "B.Sc. CSIT",
            institute: "Godawari College"
        },
        {
            degree: "Higher Secondary",
            institute: "Bright Future"
        }
    ];

    return (
        <div style={{ padding: "25px" }}>
            <Header
                name="Bishesh Ghimire"
                profession="Full Stack Developer"
            />

            <hr />

            <About description="I am a CSIT student interested in web development, Python, and modern technologies." />

            <hr />

            <Education education={education} />

            <hr />

            <Contact
                email="bishesh@example.com"
                location="Nepal"
            />
        </div>
    );
}

export default App;



// the different things are done on the demand ofit and managed on it 

// the managed well are also place on the different thigs on it
// the different thdfawfb WJHFLw,fh