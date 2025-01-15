import React, { useRef, useState, useTransition } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import { toast } from "react-toastify";
import { setCredentials } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { SiVectorlogozone } from "react-icons/si";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const recaptchaRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [isPending, startTransition] = useTransition();

  const [verified, setVerified] = useState(false);
  const [loginUser, { isLoading, isError, error, isSuccess, data }] =
    useLoginMutation();
  const from = location.state?.from?.pathname || "/";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // console.log('this is error', error)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrMsg("all fields are required");
      return;
    }

    startTransition(async () => {
      const recaptchaToken = recaptchaRef.current.getValue();
      const formDataWithRecaptcha = { ...formData, recaptchaToken };

      const userData = await loginUser(formDataWithRecaptcha);
      console.log("this is userData", userData);
      if (userData?.data?.success) {
        dispatch(setCredentials(userData?.data?.Data));
        setFormData({
          email: "",
          password: "",
        });
        navigate(from, { replace: true });
      }
      if (userData?.error) {
        toast.error(userData?.error?.data?.message);
        recaptchaRef.current.reset();
        setVerified(false);
      }
    });
  };

  function onChange(value) {
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
          {errors.password && (
            <span className="text-red-500">{errors.password}</span>
          )}
          <Link to="/forgot-password" className="text-blue-500 ml-auto">
            Forgot Password?
          </Link>
        </div>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          onChange={onChange}
          onExpired={() => {
            recaptchaRef.current.reset();
            setVerified(false);
            alert("reCAPTCHA expired. Please complete it again.");
          }}
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md mt-10"
          disabled={!verified}
        >
          {isLoading ? "please wait" : "Continue"}
        </button>
      </form>
    </div>
  );
};

export default Login;
