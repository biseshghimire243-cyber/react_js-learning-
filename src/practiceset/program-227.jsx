function Language({ name, creator, year, difficulty }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Creator: {creator}</p>
      <p>First Released: {year}</p>
      <p>Difficulty: {difficulty}</p>
      <p>
        {difficulty === "Beginner"
          ? "Good for Starting"
          : difficulty === "Intermediate"
          ? "Practice Regularly"
          : "Advanced Learning Recommended"}
      </p>
    </div>
  );
}

export default function App() {
  const languages = [
    { id: 1, name: "Python", creator: "Guido van Rossum", year: 1991, difficulty: "Beginner" },
    { id: 2, name: "JavaScript", creator: "Brendan Eich", year: 1995, difficulty: "Intermediate" },
    { id: 3, name: "C++", creator: "Bjarne Stroustrup", year: 1985, difficulty: "Advanced" },
    { id: 4, name: "Java", creator: "James Gosling", year: 1995, difficulty: "Intermediate" },
  ];

  return (
    <div>
      <h1>Programming Language Catalog</h1>
      {languages.map((language) => (
        <Language key={language.id} {...language} />
      ))}
    </div>
  );
}