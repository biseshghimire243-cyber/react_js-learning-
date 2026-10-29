function InfoPanel({ title, description, status }) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>
        Status: <strong>{status}</strong>
      </p>
      <hr />
    </section>
  );
}

function App() {
  return (
    <div>
      <h1>Project Information</h1>

      <InfoPanel
        title="Green Nepal"
        description="An environmental awareness website."
        status="Completed"
      />

      <InfoPanel
        title="Guider Nepal AI"
        description="An AI-assisted travel guide for Nepal."
        status="In Progress"
      />

      <InfoPanel
        title="EducationHub"
        description="A platform for discovering learning courses."
        status="Planning"
      />
    </div>
  );
}

export default App;