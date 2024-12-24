const Register = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input type="text" placeholder="Full Name" className="block w-full p-2 border rounded mb-4" />
        <input type="email" placeholder="Email" className="block w-full p-2 border rounded mb-4" />
        <input type="password" placeholder="Password" className="block w-full p-2 border rounded mb-4" />
        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
  export default Register;
  