const Navbar = () => (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">FECIN</h1>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about-fecin" className="hover:underline">About FECIN</a></li>
          <li><a href="/leadership" className="hover:underline">Leadership</a></li>
          <li><a href="/events" className="hover:underline">Events</a></li>
          <li><a href="/prayer-request" className="hover:underline">Prayer Requests</a></li>
          <li><a href="/donate" className="hover:underline">Donate</a></li>
        </ul>
      </div>
    </nav>
  );
  export default Navbar;
  