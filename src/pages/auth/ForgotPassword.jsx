import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputError from "../../components/InputError";
import PrimaryButton from "../../components/PrimaryButton";
import TextInput from "../../components/TextInput";
import GuestLayout from "../../layout/GuestLayout";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate an API call for password reset
    try {
      // Replace with your actual API request
      // const response = await yourApiCallHere({ email });

      // On success, navigate to another page (e.g., confirmation page)
      navigate("/some-other-page");
    } catch (error) {
      // Handle any errors
      setErrors({ email: "There was an error with the request." });
    } finally {
      setProcessing(false);
    }
  };

  return (
    <GuestLayout>
      <div className="mb-4 text-sm text-white">
        Forgot your password? No problem. Just let us know your email
        address and we will email you a password reset link that will
        allow you to choose a new one.
      </div>

      {errors.email && (
        <div className="mb-4 text-sm font-medium text-red-600">
          {errors.email}
        </div>
      )}

      <form onSubmit={submit}>
        <TextInput
          id="email"
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={email}
          className="mt-1 block w-full p-3 rounded-lg bg-transparent border-[#353434] border backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-white"
          isFocused={true}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputError message={errors.email} className="mt-2" />

        <div className="mt-4 flex items-center justify-end">
          <PrimaryButton className="ms-4" disabled={processing}>
            Email Password Reset Link
          </PrimaryButton>
        </div>
      </form>
    </GuestLayout>
  );
};

export default ForgotPassword;
