function App() {
  const books = [
    { title: "Learn Python", sold: 25, price: 500 },
    { title: "React Guide", sold: 18, price: 800 },
    { title: "Java Basics", sold: 30, price: 600 },
    { title: "Web Design", sold: 12, price: 450 },
  ];

  const revenue = books.reduce(
    (sum, book) => sum + book.sold * book.price,
    0
  );

  const mostSold = books.reduce((best, book) =>
    book.sold > best.sold ? book : best
  );

  return (
    <div>
      <h1>Bookstore Sales Report</h1>

      {books.map((book) => (
        <div key={book.title}>
          <h3>{book.title}</h3>
          <p>Books Sold: {book.sold}</p>
          <p>Price per Book: Rs. {book.price}</p>
          <p>Revenue: Rs. {book.sold * book.price}</p>
        </div>
      ))}

      <h2>Total Revenue: Rs. {revenue}</h2>
      <h3>Best Seller: {mostSold.title}</h3>
    </div>
  );
}

export default App;