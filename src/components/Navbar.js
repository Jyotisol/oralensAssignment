import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-red-700 p-4 text-white">
      <ul className="flex space-x-6 justify-center">

      <li><a href="#home" className="hover:underline">HOME</a></li>
        <li><a href="#gallery" className="hover:underline">GALLERY </a></li>
        <li><a href="#information" className="hover:underline">INFORMATION </a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
