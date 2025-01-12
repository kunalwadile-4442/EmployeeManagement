import React, { useState } from 'react';
import InputError from '../../components/InputError';
import InputLabel from '../../components/InputLabel';
import PrimaryButton from '../../components/PrimaryButton';
import TextInput from '../../components/TextInput';
import GuestLayout from '../../layout/GuestLayout';
import { Link } from 'react-router-dom';

const Register = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [processing, setProcessing] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const submit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        // Simulating form submission and error handling
        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const result = await response.json();
                setErrors(result.errors || {});
            } else {
                // Reset form after successful registration (if needed)
                setData({
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                });
            }
        } catch (error) {
            console.error('Error during registration:', error);
        } finally {
            setProcessing(false);
        }
    };

    return (
        <GuestLayout>
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" className="text-white" />
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        placeholder="Enter Your Name"
                        className="mt-1 block w-full p-3 rounded-lg bg-transparent border-[#353434] border backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-white"
                        autoComplete="name"
                        isFocused={true}
                        onChange={handleInputChange}
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" className="text-white" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        placeholder="Enter Your Email"
                        className="mt-1 block w-full p-3 rounded-lg bg-transparent border-[#353434] border backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-white"
                        autoComplete="username"
                        onChange={handleInputChange}
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" className="text-white" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        placeholder="Enter Your Password"
                        className="mt-1 block w-full p-3 rounded-lg bg-transparent border-[#353434] border backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-white"
                        autoComplete="new-password"
                        onChange={handleInputChange}
                        required
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                        className="text-white"
                    />
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        placeholder="Enter Confirm Password"
                        className="mt-1 block w-full p-3 rounded-lg bg-transparent border-[#353434] border backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-white"
                        autoComplete="new-password"
                        onChange={handleInputChange}
                        required
                    />
                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Link
                        to="/login"
                        className="rounded-md text-sm underline text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
};

export default Register;
