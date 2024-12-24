const Testimonials = () => {
    const testimonials = [
      {
        name: "Kevin Cross Minchakpu",
        feedback: "FECIN has been a great blessing in my life!",
      },
      {
        name: "Luka Ebega",
        feedback: "A wonderful community to grow spiritually.",
      },
    ];
  
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-600 italic">"{t.feedback}"</p>
                <p className="text-blue-600 mt-4 font-bold">- {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  export default Testimonials;
  