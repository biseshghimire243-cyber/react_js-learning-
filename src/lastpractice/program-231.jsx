function FreelanceProject({ title, budget, hours, hourlyRate }) {
  const estimatedCost = hours * hourlyRate;
  const difference = budget - estimatedCost;

  return (
    <div>
      <h3>{title}</h3>
      <p>Client Budget: Rs. {budget.toLocaleString()}</p>
      <p>Estimated Hours: {hours}</p>
      <p>Hourly Rate: Rs. {hourlyRate}</p>
      <p>Estimated Cost: Rs. {estimatedCost.toLocaleString()}</p>
      <p>Budget Difference: Rs. {difference.toLocaleString()}</p>
      <p>
        {difference >= 0
          ? "Project Within Budget"
          : "Project Exceeds Budget"}
      </p>
    </div>
  );
}

export default function App() {
  const projects = [
    { id: 1, title: "Business Website", budget: 30000, hours: 40, hourlyRate: 600 },
    { id: 2, title: "E-commerce Website", budget: 50000, hours: 80, hourlyRate: 700 },
    { id: 3, title: "Portfolio Website", budget: 15000, hours: 20, hourlyRate: 500 },
  ];

  return (
    <div>
      <h1>Freelance Project Budget</h1>
      {projects.map((project) => (
        <FreelanceProject key={project.id} {...project} />
      ))}
    </div>
  );
}