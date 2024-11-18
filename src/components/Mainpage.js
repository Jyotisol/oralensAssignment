import React from 'react';
import { useLocation } from 'react-router-dom';
import Gallery from './Gallery';
import Navbar from './Navbar';
const Mainpage = () => {
  const location = useLocation();
  const { name, age, file } = location.state || {};

  return (
    <>
    <Navbar />
    <div id="information" className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h1 className="text-xl font-bold mb-4 text-gray-700 text-center">
          Submitted Information
        </h1>
        <ul className="space-y-3 text-gray-600">
          <li>
            <strong>Name:</strong> {name}
          </li>
          <li>
            <strong>Age:</strong> {age}
          </li>
          <li>
            <strong>File Name:</strong> {file?.name || 'No File Uploaded'}
          </li>
        </ul>
      </div>
    </div>
   
    
    <Gallery />
    </>
  );
};

export default Mainpage;
