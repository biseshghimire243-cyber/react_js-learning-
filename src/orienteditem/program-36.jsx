function Header() {
    return (
        <header>
            <h1>Student Portal</h1>
        </header>
    );
}

function Student({ name, course }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Course: {course}</p>
        </div>
    );
}

function Footer() {
    return (
        <footer>
            <p>© 2026 Student Portal</p>
        </footer>
    );
}

function App() {
    return (
        <div>
            <Header />

            <Student
                name="Bishesh Ghimire"
                course="B.Sc. CSIT"
            />

            <Student
                name="Rahul Sharma"
                course="BCA"
            />

            <Footer />
        </div>
    );
}

export default App;