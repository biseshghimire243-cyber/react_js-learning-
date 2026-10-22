function Employee({ name, basicSalary }) {
  const allowance = basicSalary * 0.15;
  const bonus = basicSalary * 0.1;
  const tax = basicSalary * 0.05;
  const netSalary = basicSalary + allowance + bonus - tax;

  return (
    <div>
      <h3>{name}</h3>
      <p>Basic Salary: Rs. {basicSalary}</p>
      <p>Allowance: Rs. {allowance}</p>
      <p>Bonus: Rs. {bonus}</p>
      <p>Tax: Rs. {tax}</p>
      <h4>Net Salary: Rs. {netSalary}</h4>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Employee Salary Calculator</h1>
      <Employee name="Ram Sharma" basicSalary={30000} />
      <Employee name="Sita Thapa" basicSalary={40000} />
      <Employee name="Hari Rai" basicSalary={25000} />
    </div>
  );
}