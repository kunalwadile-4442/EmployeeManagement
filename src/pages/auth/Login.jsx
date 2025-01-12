// import Checkbox from '../../components/Checkbox';
// import InputError from '../../components/InputError';
// import InputLabel from '../../components/InputLabel';
// import PrimaryButton from '../../components/PrimaryButton';
// import TextInput from '../../components/TextInput';
// import GuestLayout from '../../layout/GuestLayout';
// import { Link } from 'react-router-dom';

// export default function Login({  canResetPassword }) {
//     return (
//         <GuestLayout>

//             <form>
//                 <div>
//                     <InputLabel htmlFor="email" className="text-white" value="Email" />
//                     <TextInput
//                         id="email"
//                         type="email"
//                         name="email"
//                         placeholder="Enter Your Email"
//                         className="mt-1 block w-full p-3 rounded-lg bg-transparent border-[#353434] border backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-white"
//                         autoComplete="username"
//                         isFocused={true}
//                     />
//                     <InputError className="mt-2" />
//                 </div>

//                 {/* Password Field */}
//                 <div className="mt-4 relative">
//                     <InputLabel htmlFor="password" className="text-white" value="Password" />
//                     <TextInput
//                         id="password"
//                         type="password"
//                         name="password"
//                         placeholder="Enter Your Password"
//                         className="mt-1 block w-full p-3 rounded-lg bg-transparent border-[#353434] border backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-white"
//                         autoComplete="current-password"
//                     />
//                     <button
//                         type="button"
//                         className="absolute right-4 top-11 transform -translate-y-1/2 text-gray-600"
//                     >
//                     </button>
//                     <InputError className="mt-2" />
//                 </div>

//                 <div className="mt-4 block">
//                     <label className="flex items-center">
//                         <Checkbox className="focus:ring-light-logo-color" />
//                         <span className="ms-2 text-sm text-white">
//                             Remember me
//                         </span>
//                     </label>
//                 </div>

//                 <div className="mt-4 flex items-center justify-end">
//                     {canResetPassword && (
//                         <Link
//                             to="/password/reset"
//                             className="rounded-md text-sm text-white underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                         >
//                             Forgot your password?
//                         </Link>
//                     )}

//                     <PrimaryButton className="ms-4">
//                         Log in
//                     </PrimaryButton>
//                 </div>
//             </form>
//         </GuestLayout>
//     );
// }

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../../redux/reducers/userReducer";
import Checkbox from "../../components/Checkbox";
import InputError from "../../components/InputError";
import InputLabel from "../../components/InputLabel";
import PrimaryButton from "../../components/PrimaryButton";
import TextInput from "../../components/TextInput";
import GuestLayout from "../../layout/GuestLayout";
import { Link } from "react-router-dom";

export default function Login({ canResetPassword }) {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(loginStart());

    const staticEmail = "kunal@appristine.in";
    const staticPassword = "kunal@123";

    if (email === staticEmail && password === staticPassword) {
      dispatch(loginSuccess({ user: { email }, token: "sample_token" }));

      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
      dispatch(loginFailure());
    }
  };

  return (
    <GuestLayout>
      <form onSubmit={handleLogin} id="login">
        <div>
          <InputLabel htmlFor="email" className="text-white" value="Email" />
          <TextInput
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="mt-1 block w-full p-3 rounded-lg bg-transparent border-[#353434] border backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-white"
            autoComplete="username"
            isFocused={true}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                document.getElementById("password").focus();
              }
            }}
          />
          {error && <InputError className="mt-2">{error}</InputError>}
        </div>

        <div className="mt-4 relative">
          <InputLabel
            htmlFor="password"
            className="text-white"
            value="Password"
          />
          <TextInput
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
            className="mt-1 block w-full p-3 rounded-lg bg-transparent border-[#353434] border backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-white"
            autoComplete="current-password"
          />
          <button
            type="button"
            className="absolute right-4 top-11 transform -translate-y-1/2 text-gray-600"
          ></button>
          {error && <InputError className="mt-2">{error}</InputError>}
        </div>

        <div className="mt-4 block">
          <label className="flex items-center">
            <Checkbox className="focus:ring-light-logo-color" />
            <span className="ms-2 text-sm text-white">Remember me</span>
          </label>
        </div>

        <div className="mt-4 flex items-center justify-end">
   
            <Link
              to="/forgot-password"
              className="rounded-md text-sm text-white underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Forgot your password?
            </Link>
    
          <PrimaryButton className="ms-4">Log in</PrimaryButton>
        </div>
      </form>
    </GuestLayout>
  );
}
