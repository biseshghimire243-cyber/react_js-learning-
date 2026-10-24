function Project({ name, totalTasks, completedTasks, deadline }) {
  const remaining = totalTasks - completedTasks;
  const progress = (completedTasks / totalTasks) * 100;

  return (
    <div>
      <h3>{name}</h3>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <p>Remaining Tasks: {remaining}</p>
      <p>Progress: {progress.toFixed(1)}%</p>
      <p>Deadline: {deadline}</p>
      <p>
        {remaining === 0
          ? "Project Completed"
          : progress >= 70
          ? "Project Near Completion"
          : "Project In Progress"}
      </p>
    </div>
  );
}

export default function App() {
  const projects = [
    { id: 1, name: "Portfolio Website", totalTasks: 10, completedTasks: 10, deadline: "November 10" },
    { id: 2, name: "College Assistant", totalTasks: 20, completedTasks: 15, deadline: "November 20" },
    { id: 3, name: "Tourism Website", totalTasks: 15, completedTasks: 6, deadline: "December 5" },
  ];

  return (
    <div>
      <h1>Project Task Progress Report</h1>
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
}