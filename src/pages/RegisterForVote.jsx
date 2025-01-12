import React, { useState, useTransition } from "react";
import { useGetStatesQuery } from "../features/states/stateApliSlice";
import { useRegisterForVoterMutation } from "../features/voters/voterApiSlice";
import { selectCurrentUser } from "../features/auth/authSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const RegisterForVote = () => {
  const [formData, setFormData] = useState({
    name: "",
    aadharNo: "",
    state: "",
    district: "",
    dateOfBirth: "",
  });

  const [errors, setErrors] = useState({});

  const [isPending, startTransition] = useTransition();
  const { data: allStates } = useGetStatesQuery();
  const stateNames = allStates?.states[0].states.map(
    (stateObj) => stateObj.state
  );
  const [registerForVote, { isLoading, isError, error, data }] =
    useRegisterForVoterMutation();
  const user = useSelector(selectCurrentUser);

  console.log("this is data", error);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    // Validate Aadhar Number
    if (!/^\d{12}$/.test(formData.aadharNo)) {
      newErrors.aadharNo = "Aadhar number must be exactly 12 digits.";
    }
    // Validate Age
    const birthDate = new Date(formData.dateOfBirth);
    const ageDiff = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDiff);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    if (age < 18) {
      newErrors.dateOfBirth = "You must be at least 18 years old.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {return};
    startTransition(async () => {
      // Simulate form submission
      const data = await registerForVote({ id: user._id, data: formData });
      console.log('this is register data', data)
      if (data?.data?.success) {
        toast.success(data?.data?.message);
      }
      if(data.error){
        toast.error(data?.error?.data?.message);
      }
    });
  };

  // Find the districts for the selected state
  const selectedState = allStates?.states[0].states.find(
    (stateObj) => stateObj.state === formData.state
  );
  const districts = selectedState ? selectedState.districts : [];

  return (
    <form onSubmit={handleSubmit} className=" p-4 bg-[#3b83f64a]">
      <h2 className="text-4xl font-bold mb-9 text-center">Register For Vote</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border"
          />
        </div>
        <div>
          <label htmlFor="aadharNo">Aadhar No</label>
          <input
            type="text"
            placeholder="Enter Aadhar Number"
            id="aadharNo"
            name="aadharNo"
            value={formData.aadharNo}
            onChange={handleChange}
            required
            className="w-full p-2 border"
          />
          {errors.aadharNo && <p className="text-red-500">{errors.aadharNo}</p>}
        </div>
        <div>
          <label htmlFor="state">State</label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="w-full p-2 border"
          >
            <option value="">Select State</option>
            {stateNames &&
              stateNames.map((state, index) => (
                <option value={state} key={index}>
                  {state}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label htmlFor="district">District</label>
          <select
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
            className="w-full p-2 border"
            disabled={!formData.state}
          >
            <option value="">Select District</option>
            {districts.map((district, index) => (
              <option value={district} key={index}>
                {district}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            required
            onChange={handleChange}
            className="w-full p-2 border"
          />
          {errors.dateOfBirth && <p className="text-red-500">{errors.dateOfBirth}</p>}
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 shadow-md"
          disabled={isPending}
        >
          {/* {isPending ? "Submitting..." : "Submit"} */}
            Submit
        </button>
      </div>
    </form>
  );
};

export default RegisterForVote;
