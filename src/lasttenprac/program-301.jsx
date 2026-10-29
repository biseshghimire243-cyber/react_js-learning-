function Notification({ type, message }) {
  const symbols = {
    success: "✓",
    warning: "!",
    error: "✕",
    info: "i",
  };

  return (
    <div>
      <h3>
        {symbols[type] || "•"} {type.toUpperCase()}
      </h3>
      <p>{message}</p>
    </div>
  );
}

function App() {
  const notifications = [
    { id: 1, type: "success", message: "Your profile was updated." },
    { id: 2, type: "warning", message: "Your storage is almost full." },
    { id: 3, type: "error", message: "Unable to save your changes." },
    { id: 4, type: "info", message: "A new course is available." },
  ];

  return (
    <div>
      <h1>Notification Center</h1>

      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          type={notification.type}
          message={notification.message}
        />
      ))}
    </div>
  );
}

export default App;