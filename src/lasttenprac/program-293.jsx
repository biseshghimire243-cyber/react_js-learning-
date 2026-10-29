function ProfileCard({ name, role, location }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Role: {role}</p>
      <p>Location: {location}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Team Profiles</h1>
      <ProfileCard name="Aarav" role="Frontend Developer" location="Pokhara" />
      <ProfileCard name="Sita" role="UI Designer" location="Kathmandu" />
      <ProfileCard name="Rohan" role="Backend Developer" location="Biratnagar" />
    </div>
  );
}

export default App;