import React, { useState } from 'react';
import InputError from '../../components/InputError';
import InputLabel from '../../components/InputLabel';
import PrimaryButton from '../../components/PrimaryButton';
import TextInput from '../../components/TextInput';
import GuestLayout from '../../layout/GuestLayout';
import { useNavigate } from 'react-router-dom';

const ResetPassword = ({ token, email }) => {
    const [data, setData] = useState({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate();
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const submit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        try {
            const response = await fetch('/password/reset', {
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
                navigate('/login'); // Redirect to login after reset success
            }
        } catch (error) {
            console.error('Error during password reset:', error);
        } finally {
            setProcessing(false);
        }
    };

    return (
        <GuestLayout>
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={data.email}
                        className="mt-1 block w-full p-3 rounded-lg bg-transparent border-[#353434] border backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-white"
                        autoComplete="username"
                        onChange={handleInputChange}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={data.password}
                        className="mt-1 block w-full p-3 rounded-lg bg-transparent border-[#353434] border backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-white"
                        autoComplete="new-password"
                        isFocused={true}
                        onChange={handleInputChange}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        type="password"
                        id="password_confirmation"
                        name="password_confirmation"
                        placeholder="Confirm your password"
                        value={data.password_confirmation}
                        className="mt-1 block w-full p-3 rounded-lg bg-transparent border-[#353434] border backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-white"
                        autoComplete="new-password"
                        onChange={handleInputChange}
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Reset Password
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
};

export default ResetPassword;
