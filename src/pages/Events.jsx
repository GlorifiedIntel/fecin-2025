const Events = () => {
  const [loading, setLoading] = React.useState(true);
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      setEvents([
        { id: 1, title: "Sunday Service", date: "Dec 31, 2024", description: "Join us for worship." },
        { id: 2, title: "Youth Fellowship", date: "Jan 5, 2025", description: "A gathering for youth." },
        
      ]);
      setLoading(false);
    }, 2000); // Simulate API call
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map(event => (
          <div key={event.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">{event.title}</h3>
            <p className="text-gray-600">{event.date}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
