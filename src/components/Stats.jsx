
export default function Stats({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;

  const stats = [
    { label: "Total Tasks", count: total, icon: "▤" },
    { label: "Pending", count: pending, icon: "⌛" },
    { label: "Completed", count: completed, icon: "✓" },
  ];

  return (
    <section className="stats">
      {stats.map((stat) => (
        <div className="stat-card" key={stat.label}>
          <div className="stat-icon">{stat.icon}</div>

          <div>
            <p>{stat.label}</p>
            <h2>{stat.count}</h2>
          </div>
        </div>
      ))}
    </section>
  );
}
