import React from 'react';

const ScrollToTop = () => {
    const [visible, setVisible] = React.useState(false);
  
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
  
    React.useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
  
    return (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg transition-opacity ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        ↑
      </button>
    );
  };
  
  export default ScrollToTop;
  