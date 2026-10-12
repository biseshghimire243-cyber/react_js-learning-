function LibraryBook({ student, book, lateDays }) {
  const finePerDay = 10;
  const fine = lateDays * finePerDay;

  return (
    <div>
      <h3>{book}</h3>
      <p>Student: {student}</p>
      <p>Days Late: {lateDays}</p>
      <p>Fine: Rs. {fine}</p>
      <p>
        {lateDays === 0
          ? "Book returned on time."
          : `Please pay Rs. ${fine} as a late fee.`}
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Library Fine Calculator</h1>
      <LibraryBook student="Aarav" book="Java Programming" lateDays={0} />
      <LibraryBook student="Sita" book="Learning React" lateDays={4} />
      <LibraryBook student="Rohan" book="Python Basics" lateDays={7} />
    </div>
  );
}