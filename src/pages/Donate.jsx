import React from 'react';

const Donate = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Make a Donation</h2>
        <input type="number" placeholder="Donation Amount" className="block w-full p-2 border rounded mb-4" />
        <select className="block w-full p-2 border rounded mb-4">
          <option>Select Payment Method</option>
          <option>Credit Card</option>
          <option>PayPal</option>
        </select>
        <button className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600">Donate</button>
      </form>
    </div>
  );
  export default Donate;
  