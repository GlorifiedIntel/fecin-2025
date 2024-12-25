import React, { useState } from 'react';
import { submitPrayerRequest } from '../services/api';

const PrayerRequest = () => {
  const [form, setForm] = useState({ name: '', request: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitPrayerRequest(form);
      alert('Prayer request submitted successfully!');
      setForm({ name: '', request: '' });
    } catch (error) {
      alert('Failed to submit prayer request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Submit a Prayer Request</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Prayer Request</label>
          <textarea
            className="w-full p-2 border rounded"
            value={form.request}
            onChange={(e) => setForm({ ...form, request: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default PrayerRequest;
