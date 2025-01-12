import React from 'react';
import logo from '../../assets/logo.svg';

const ElectionCommissionCard = () => {
  return (
    <div className="max-w-full mx-auto overflow-hidden md:max-w-screen-lg  md:pl-20 md:pr-20">
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src={logo} alt="Election Commission Logo" />
        </div>
        <div className="p-4 flex flex-col items-center mb-4">
          <div className="uppercase tracking-wide text-xl text-[#0c4b7b] font-semibold">Election Commission of India</div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-[#0c4b7b]">भारत निर्वाचन आयोग</h1>
          <p className="mt-4 text-gray-500 text-center">
            The Election Commission of India is an autonomous constitutional authority responsible for administering Union and State election processes in India. The body administers elections to the Lok Sabha, Rajya Sabha, State Legislative Assemblies in India, and the offices of the President and Vice President in the country.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ElectionCommissionCard;
