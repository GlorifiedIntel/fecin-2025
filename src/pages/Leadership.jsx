import React from "react";

const Leadership = () => {
  const leaders = [
    {
      name: "John Doe",
      position: "President",
      image: "https://via.placeholder.com/150",
      bio: "John has been leading our organization with passion and dedication for over 10 years.",
    },
    {
      name: "Jane Smith",
      position: "Vice President",
      image: "https://via.placeholder.com/150",
      bio: "Jane oversees strategic initiatives and ensures our mission is fulfilled.",
    },
    {
      name: "Michael Johnson",
      position: "Treasurer",
      image: "https://via.placeholder.com/150",
      bio: "Michael manages financial planning and ensures transparency in our operations.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Leadership Team
        </h1>
        <p className="text-gray-700 text-lg text-center mb-8">
          Meet the dedicated team leading our organization to achieve its goals
          and serve the community with excellence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-lg shadow-md text-center"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600">
                {leader.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{leader.position}</p>
              <p className="text-gray-700">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;

