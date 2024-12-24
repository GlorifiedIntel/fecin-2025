const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = React.useState(false);
  
    React.useEffect(() => {
      document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);
  
    return (
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    );
  };
  
  export default DarkModeToggle;
  