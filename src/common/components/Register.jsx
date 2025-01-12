import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useRegisterUserMutation } from "../../features/auth/authApiSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  // const [verified, setVerified] = useState(false);
  const [registerUser, { isLoading, isError, error, isSuccess, data }] =  useRegisterUserMutation();
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!validateEmail(formData.email)) {
      validationErrors.email = "Invalid email format";
    }

    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    // if (!verified) {
    //   console.log("Please verify the CAPTCHA");
    //   validationErrors.recaptcha = "Please Verify the Captcha";
    // }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    registerUser(formData);
  };

  // const onChange = (value) => {
  //   console.log("Captcha value:", value);
  //   setVerified(true);
  // };

  useEffect(() => {
    if (isError && error) {
      toast.error(error.data?.message || "An error occurred");
    }
    if (isSuccess && data) {
      toast.success(data?.message || "Registration successful!");
      navigate('/login');
    }
  }, [isError, isSuccess, error]);

  return (
    <div className="w-full max-w-md p-6 bg-gray-100 shadow-md rounded-md text-black border border-gray-400">
      <h2 className="text-2xl font-bold mb-4">Sign-Up</h2>
      <p className="mb-4">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500">
          Login
        </a>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col items-start">
          <label className="block text-gray-700" htmlFor="email">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            className="w-full px-4 py-2 border rounded-md"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>
        <div className="mb-4 flex flex-col items-start">
          <label className="block text-gray-700" htmlFor="password">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            className="w-full px-4 py-2 border rounded-md"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {errors.password && (
            <span className="text-red-500">{errors.password}</span>
          )}
        </div>
        <div className="mb-4 flex flex-col items-start">
          <label className="block text-gray-700" htmlFor="confirmPassword">
            Confirm Password<span className="text-red-500">*</span>
          </label>
          <input
            className="w-full px-4 py-2 border rounded-md"
            type="confirmPassword"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          {errors.confirmPassword && (
            <span className="text-red-500">{errors.confirmPassword}</span>
          )}
        </div>
        <div className="mb-4 flex flex-col items-start">
          {/* <ReCAPTCHA
            sitekey="6Lcg-qsqAAAAAFnSuLxrec8J4UxSkZ1ibuf734e0"
            onChange={onChange}
          /> */}
          {/* {errors.recaptcha && (
            <span className="text-red-500">{errors.recaptcha}</span>
          )} */}
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
