import PrimaryButton from '@/components/Button/PrimaryButton';
import Input from '@/components/Froms/Input';
import { errorNotify } from '@/utils/hooks/notify';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Login = () => {

    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const data = {
            phone: e.target.phone.value,
            password: e.target.password.value,
        }

        if (!data.phone && !data.password)
            return errorNotify('Fields are requried')

        router.push('/panel/dashboard')

        console.log(data)
    }

    return (
        <div className="h-screen f-center flex-col bg-primary">

            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden  min-w-[800px]">
                <div className="hidden lg:block lg:w-1/2 bg-cover bg-center bg-no-repeat min-h-full"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                </div>

                <div className="w-full p-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">Brand</h2>
                    <p className="text-xl text-gray-600 text-center">Welcome back!</p>

                    <form action="" className='my-8' onSubmit={handleLoginSubmit}>
                        <div className='flex flex-col gap-y-4 '>
                            <Input
                                label="Mobile Number"
                                id="phone"
                            />

                            <Input
                                label="Password"
                                id="password"
                                type={showPassword ? "text" : "password"}
                                passwordToggle
                                showPassword={showPassword}
                                setShowPassword={setShowPassword}
                            />
                        </div>

                        <PrimaryButton text="Login" css="!w-full mt-8" />
                    </form>


                </div>
            </div>
        </div>
    );
};

export default Login;
