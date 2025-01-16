import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../../redux/reducers/userReducer";
import Checkbox from "../../components/Checkbox";
import InputLabel from "../../components/InputLabel";
import PrimaryButton from "../../components/PrimaryButton";
import TextInput from "../../components/TextInput";
import GuestLayout from "../../layout/GuestLayout";
import { Link } from "react-router-dom";
import { LuEye, LuEyeOff } from "react-icons/lu";

export default function Login({ canResetPassword }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: null, password: null });
  const [touched, setTouched] = useState({ email: false, password: false });

    const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Invalid email format";
    return null;
  };

 
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}:;,.?<>]).{6,}$/;
    if (!password) return "Password is required";
    if (password.length < 6) return "Password must be at least 6 characters";
    if (!passwordRegex.test(password))
      return "Must include uppercase, lowercase, digit, and special character";
    return null; 
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setError({ email: emailError, password: passwordError });
      dispatch(loginFailure());
      return;
    }

    dispatch(loginStart());

    const staticEmail = "kunal@appristine.in";
    const staticPassword = "Kunal@123";

    if (email === staticEmail && password === staticPassword) {
      dispatch(loginSuccess({ user: { email }, token: "sample_token" }));
      navigate("/dashboard");
    } else {
      setError({ email: null, password: "Invalid email or password" });
      dispatch(loginFailure());
    }
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
    if (field === "email") {
      setError({ ...error, email: validateEmail(email) });
    } else if (field === "password") {
      setError({ ...error, password: validatePassword(password) });
    }
  };

  return (
    <GuestLayout>
      <form onSubmit={handleLogin} id="login">
        {/* Email Input */}
        <div>
          <InputLabel htmlFor="email" className="text-white" value="Email" />
          <TextInput
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (touched.email) {
                setError({ ...error, email: validateEmail(e.target.value) });
              }
            }}
            onBlur={() => handleBlur("email")}
            placeholder="Enter Your Email"
            className={`mt-1 block w-full p-3 rounded-lg bg-transparent border ${
              error.email && touched.email
                ? "border-red-500"
                : "border-[#353434]"
            } backdrop-blur-lg focus:outline-none focus:ring-2 ${
              error.email && touched.email
                ? "focus:ring-red-500"
                : "focus:ring-indigo-600"
            } text-white`}
            autoComplete="username"
            isFocused={true}
          />
          {error.email && touched.email && (
            <p className="text-red-600 mt-2 text-s">{error.email}</p>
          )}
        </div>

     
        <div className="mt-4 relative">
          <InputLabel
            htmlFor="password"
            className="text-white"
            value="Password"
          />
          <TextInput
            
            id="password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (touched.password) {
                setError({
                  ...error,
                  password: validatePassword(e.target.value),
                });
              }
            }}
            onBlur={() => handleBlur("password")}
            placeholder="Enter Your Password"
            className={`mt-1 block w-full p-3 rounded-lg bg-transparent border ${
              error.password && touched.password
                ? "border-red-500"
                : "border-[#353434]"
            } backdrop-blur-lg focus:outline-none focus:ring-2 ${
              error.password && touched.password
                ? "focus:ring-red-500"
                : "focus:ring-indigo-600"
            } text-white pr-10`}
            autoComplete="current-password"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-5 top-12 mt-0.5 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600 text-xl" // Increased size with text-2xl
          >
            {showPassword ? <LuEyeOff /> : <LuEye />}
          </span>

          {error.password && touched.password && (
            <p className="text-red-600 mt-2 text-s">{error.password}</p>
          )}
        </div>

       
        <div className="mt-4 block">
          <label className="flex items-center">
            <Checkbox className="focus:ring-light-logo-color" />
            <span className="ms-2 text-sm text-white">Remember me</span>
          </label>
        </div>


        <div className="mt-4 flex items-center justify-end">
          {canResetPassword && (
            <Link
              to="/forgot-password"
              className="rounded-md text-sm text-white underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Forgot your password?
            </Link>
          )}
          <PrimaryButton className="ms-4">Log in</PrimaryButton>
        </div>
      </form>
    </GuestLayout>
  );
}
