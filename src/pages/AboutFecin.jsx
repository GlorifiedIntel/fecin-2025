import React from 'react';

const AboutFecin = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="fecin-h1">
          About Us
        </h1>
        <p className="fecin-p">
          Welcome to the Fellowship of Eggon Christians in Nigeria (FECIN). We are a community 
          dedicated to spreading the Gospel, fostering unity, and promoting the spiritual growth 
          of believers. Our mission is to serve God by serving others, and to create a supportive 
          environment where individuals can come together to worship, learn, and grow in their faith.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-100 p-4 rounded-md shadow-sm">
            <h2 className="fecin-text-xl">
              Our Mission
            </h2>
            <p className="text-gray-700">
              To glorify God by reaching out to our communities, encouraging discipleship, and 
              empowering individuals to live Christ-centered lives.
            </p>
          </div>
          <div className="bg-blue-100 p-4 rounded-md shadow-sm">
            <h2 className="fecin-text-xl">
              Our Vision
            </h2>
            <p className="text-gray-700">
              To create a thriving, Christ-centered fellowship where every individual is valued, 
              supported, and inspired to fulfill their God-given purpose.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-2"
              />
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-sm text-gray-600">Founder & Pastor</p>
            </div>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-2"
              />
              <h3 className="text-lg font-semibold">Jane Smith</h3>
              <p className="text-sm text-gray-600">Youth Leader</p>
            </div>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-2"
              />
              <h3 className="text-lg font-semibold">Michael Johnson</h3>
              <p className="text-sm text-gray-600">Music Director</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700">
            Have questions or want to learn more? Reach out to us at:
          </p>
          <p className="text-gray-700 mt-2">
            Email: <a href="mailto:info@fecin.org" className="text-blue-500">info@fecin.org</a>
          </p>
          <p className="text-gray-700">
            Phone: <a href="tel:+2341234567890" className="text-blue-500">+234 123 456 7890</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutFecin;
