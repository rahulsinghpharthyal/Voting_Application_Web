import React, { useState, useTransition } from "react";
import { toast } from "react-toastify";
import { useSendLinkMutation } from "../../features/fotgotpassword/forgotPasswordApiSlice";

const SendLink = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [errors, setErrors] = useState({});
  const [isPending, startTransition] = useTransition();
  const [sendLink, { isLoading, isError, error, data }] = useSendLinkMutation();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email) {
      setErrors({ email: "Email is required" });
      return;
    }

    startTransition(async () => {
      // Send recovery link request
      const response = await sendLink(formData);
      if (response?.data) {
        toast.success(response?.data);
        setFormData({email: ""})
      }
      if (response?.error) {
        toast.error(response?.error?.data?.message);
      }
    });
  };

  return (
    <div className="w-full max-w-md p-6 bg-gray-100 shadow-md rounded-md text-black border border-gray-400">
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col items-start">
          <label className="block text-gray-700" htmlFor="email">
            Email: <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
          {data && <p className="text-green-400 font-bold text-center">{data}</p>}
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md mt-10"
        >
          {isPending ? "Please Wait" : "Send Recovery Link"}
        </button>
      </form>
    </div>
  );
};

export default SendLink;
