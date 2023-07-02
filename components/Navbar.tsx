import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-4 py-2">
      <div className="flex items-center">
        <div className="mr-4">
          <button
            type="button"
            className="block focus:outline-none"
            onClick={toggleMenu}>
            <svg
              className={`w-8 h-8 ${isOpen ? 'text-white' : 'text-gray-200'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"/>
                </>
              ) : (
                <>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </>
              )}
            </svg>
          </button>
        </div>
        <img src="/logo.png" alt="Logo" className="w-12 h-12" />
        <span className="ml-2 text-white font-lexend text-lg">Sign in</span>
      </div>
    </nav>
  );
};

export default Navbar;
