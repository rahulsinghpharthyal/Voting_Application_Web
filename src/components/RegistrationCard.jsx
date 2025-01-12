import React from 'react';
import formImg from '../assets/form.svg';
import leftImage from '../assets/building-banner-01.jpg'; // Your left-side image
import { Link } from 'react-router-dom';

const RegistrationCard = () => {
  return (
    <div className="grid grid-cols-2 h-screen bg-[#3b83f63e] w-full">
      <div className="grid grid-cols-2">
        <div className="w-[800px]">
          <img src={leftImage} alt="Left Side" className="max-w-full h-auto" />
        </div>
        <div className="w-[700px] ml-[500px]">
          <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden border border-black">
            <div className="p-4">
              <div className="flex items-center">   
                <div className="h-12 flex items-center justify-center">
                  <img src={formImg} alt='Form Image' width={200} />
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-800">New registration for general electors</h2>
                  <p className="text-gray-600">Fill Form if you are 18 years or above or you will turn 18 in a few months</p>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <Link to="/register-form" className="bg-green-500 text-white px-4 py-2 rounded-lg">Fill Form</Link>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Guidelines</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationCard;
