function ProgressBar({ label, completed, total }) {
  const percentage =
    total > 0 ? Math.min((completed / total) * 100, 100) : 0;

  return (
    <div>
      <h3>{label}</h3>
      <progress value={percentage} max="100" />
      <p>
        {completed} of {total} — {percentage.toFixed(1)}%
      </p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Learning Progress</h1>

      <ProgressBar label="HTML" completed={10} total={10} />
      <ProgressBar label="CSS" completed={7} total={10} />
      <ProgressBar label="JavaScript" completed={6} total={12} />
      <ProgressBar label="React" completed={3} total={15} />
    </div>
  );
}

export default App;