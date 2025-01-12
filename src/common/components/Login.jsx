import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import { toast } from "react-toastify";
import { setCredentials } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [verified, setVerified] = useState(false);
  const [loginUser, { isLoading, isError, error, isSuccess, data }] = useLoginMutation();
  const from = location.state?.from?.pathname || "/";
  console.log(from);
  console.log('this is data from login the user', data);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!email || !password) {
        setErrMsg("all fields are required");
        return;
      }
      const userData = await loginUser(formData).unwrap();
      console.log('thisis userData from login', userData)
      dispatch(setCredentials(userData?.Data));
      setFormData({
        email: "",
        password: ""
      })
      navigate(from, { replace: true });
    } catch (error) {
      console.log("this is", error);
      toast.error(error?.data?.message);
    }
  };

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }

  return (
    <div className="w-full max-w-md p-6 bg-gray-100 shadow-md rounded-md text-black border border-gray-400">
      <h2 className="text-2xl font-bold mb-4">Log-In</h2>
      <p className="mb-4">
        Do not have an account?{" "}
        <Link to="/signup" className="text-blue-500">
          Sign-up
        </Link>
      </p>
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
          {errors.password && <span className="text-red-500">{errors.password}</span>}
          <Link to="/forgot-password" className="text-blue-500 ml-auto">
            Forgot Password?
          </Link>
        </div>
        {/* <ReCAPTCHA
          sitekey="6Lcg-qsqAAAAAFnSuLxrec8J4UxSkZ1ibuf734e0"
          onChange={onChange}
        /> */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md mt-10"
          // disabled={!verified}
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Login;
