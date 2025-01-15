import React, { useState, useTransition } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useResetPasswordMutation } from "../../features/fotgotpassword/forgotPasswordApiSlice";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    otp: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isPending, startTransition] = useTransition();
  const navigate = useNavigate();

  const [resetPassword, { isLoading, isError, error, data }] =
    useResetPasswordMutation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.otp) {
      setErrors({ otp: "OTP is required" });
      return;
    }

    if (!formData.password) {
      setErrors({ password: "Password is required" });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }

    startTransition(async () => {
      const data = await resetPassword(formData); //
      // console.log("data ", data);
      if (data?.data) {
        toast.success(data?.data);
        setFormData({
          otp: "",
          password: "",
          confirmPassword: "",
        });
        navigate("/login");
      }
      if (data?.error) {
        toast.error(data?.error?.data?.message);
      }
    });
  };

  return (
    <div className="w-full max-w-md p-6 bg-gray-100 shadow-md rounded-md text-black border border-gray-400">
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col items-start">
          <label className="block text-gray-700" htmlFor="otp">
            OTP: <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="otp"
            name="otp"
            placeholder="OTP"
            value={formData.otp}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          {errors.otp && <span className="text-red-500">{errors.otp}</span>}
        </div>
        <div className="mb-4 flex flex-col items-start">
          <label className="block text-gray-700" htmlFor="password">
            New Password: <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="New Password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          {errors.password && (
            <span className="text-red-500">{errors.password}</span>
          )}
        </div>
        <div className="mb-4 flex flex-col items-start">
          <label className="block text-gray-700" htmlFor="confirmPassword">
            Confirm Password: <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          {errors.confirmPassword && (
            <span className="text-red-500">{errors.confirmPassword}</span>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md mt-10"
        >
          {isPending ? "Please Wait" : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
