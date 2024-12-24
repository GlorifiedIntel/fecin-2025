import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Power of Faith",
      author: "John Doe",
      date: "December 20, 2024",
      image: "https://via.placeholder.com/600x400",
      excerpt:
        "Faith is the cornerstone of our lives. Explore how faith shapes our daily choices and actions.",
    },
    {
      title: "Community in Christ",
      author: "Jane Smith",
      date: "December 15, 2024",
      image: "https://via.placeholder.com/600x400",
      excerpt:
        "Discover the importance of building strong, Christ-centered communities.",
    },
    {
      title: "The Joy of Giving",
      author: "Michael Johnson",
      date: "December 10, 2024",
      image: "https://via.placeholder.com/600x400",
      excerpt:
        "Giving is not just about helping others; it enriches our own lives too. Learn more about the joy of giving.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Blog
        </h1>
        <p className="text-gray-700 text-lg text-center mb-8">
          Stay inspired with our latest posts and reflections.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  By {post.author} on {post.date}
                </p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

