import React, { useState } from 'react';

const AddCandidateForm = ({ onAddCandidate }) => {
  const [candidateName, setCandidateName] = useState('');
  const [party, setParty] = useState('');
  const [aadhaarId, setAadhaarId] = useState('');
  const [electionIcon, setElectionIcon] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (candidateName && party && electionIcon) {
      onAddCandidate({ candidateName, party, electionIcon });
      setCandidateName('');
      setParty('');
      setElectionIcon(null);
    }
  };

  const handleFileChange = (e) => {
    setElectionIcon(e.target.files[0]);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md mt-20">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Add Candidate</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="candidateName">
            Aadhaar Id
          </label>
          <input
            type="number"
            id="aadhaarId"
            value={aadhaarId}
            onChange={(e) => setAadhaarId(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="candidateName">
            Candidate Name
          </label>
          <input
            type="text"
            id="candidateName"
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="party">
            Party
          </label>
          <input
            type="text"
            id="party"
            value={party}
            onChange={(e) => setParty(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="electionIcon">
            Election Icon
          </label>
          <input
            type="file"
            id="electionIcon"
            onChange={handleFileChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-end mt-10">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCandidateForm;
