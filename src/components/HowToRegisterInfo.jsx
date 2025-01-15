import React from "react";

const HowToRegisterInfo = () => {
  return (
    <div className="max-w-lg">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">How to Register</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-3">
        <li >First you need to login in application</li>
        <li >Go to fill form.</li>
        <li >Provide a valid Aadhar ID for verification.</li>
        <li >Provide your name, date of birth, state and district.</li>
        <li >Ensure your state is up to date for the electoral roll.</li>
        <li >Fill out the online registration form.</li>
        <li >Submit your application before the registration deadline.</li>
      </ul>
      <h3 className="text-xl font-semibold text-blue-500 mt-6 mb-3">Requirements</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-3">
        <li>You must be 18 years or older to register.</li>
        </ul>
    </div>
  );
};

export default HowToRegisterInfo;
