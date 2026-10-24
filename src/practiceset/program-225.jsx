function Savings({ name, income, expenses }) {
  const savings = income - expenses;
  const percentage = (savings / income) * 100;

  return (
    <div>
      <h3>{name}</h3>
      <p>Monthly Income: Rs. {income}</p>
      <p>Monthly Expenses: Rs. {expenses}</p>
      <p>Monthly Savings: Rs. {savings}</p>
      <p>Savings Rate: {percentage.toFixed(1)}%</p>
      <p>
        {savings < 0
          ? "Expenses Exceed Income"
          : percentage >= 20
          ? "Excellent Savings"
          : "Try to Save More"}
      </p>
    </div>
  );
}

export default function App() {
  const people = [
    { id: 1, name: "Aarav", income: 40000, expenses: 28000 },
    { id: 2, name: "Sita", income: 35000, expenses: 30000 },
    { id: 3, name: "Rohan", income: 25000, expenses: 27000 },
  ];

  return (
    <div>
      <h1>Monthly Savings Calculator</h1>
      {people.map((person) => (
        <Savings key={person.id} {...person} />
      ))}
    </div>
  );
}