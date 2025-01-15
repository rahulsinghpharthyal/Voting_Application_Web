import React from 'react'
import formImg from '../assets/form.svg';
import { Link } from 'react-router-dom';

const RegistrationCard = () => {
  return (
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
  )
}

export default RegistrationCard
