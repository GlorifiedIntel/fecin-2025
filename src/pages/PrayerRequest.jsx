import React from 'react';

const PrayerRequest = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Submit a Prayer Request</h2>
        <input type="text" placeholder="Your Name" className="block w-full p-2 border rounded mb-4" />
        <input type="email" placeholder="Your Email" className="block w-full p-2 border rounded mb-4" />
        <textarea placeholder="Your Prayer Request" rows="4" className="block w-full p-2 border rounded mb-4"></textarea>
        <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">Submit</button>
      </form>
    </div>
  );
  export default PrayerRequest;
  