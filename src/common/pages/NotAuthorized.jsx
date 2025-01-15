import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotAuthorized = () => {

    const navigate = useNavigate();
  // This will navigate to the previous page };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="text-center p-6 bg-white shadow-md rounded-md">
        <div className="text-gray-300 text-5xl mb-4">
          <i className="fa fa-lock"></i>
        </div>
        <h2 className="text-orange-500 text-2xl font-bold mb-4">
          You are not authorized to perform this action
        </h2>
        <button onClick={()=>navigate(-1)} className="text-blue-500 flex items-center">
          <i className="fa fa-angle-left mr-2"></i> Back
        </button>
      </div>
    </div>
  );
};

export default NotAuthorized;
