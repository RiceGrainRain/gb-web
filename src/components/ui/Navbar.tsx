import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-6">
        <li>
            <a href="#upcoming" className="text-white hover:text-gray-400">Upcoming</a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-gray-400">About</a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-400">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
