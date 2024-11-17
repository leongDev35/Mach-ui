"use client"

import React, { useEffect, useState } from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import Image from 'next/image';
import { useDispatch } from "react-redux";
import { login } from '@/service/userService';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function LoginComponent() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const router = useRouter();

    const user = useSelector(({ users }) => {
        console.log(JSON.stringify(users), 11);
        console.log(JSON.stringify(users.error));
        return users.user

    })
    useEffect(() => {
        if (user) {
            router.push("/"); // Redirect if already logged in
        } else {
            setIsLoading(false); // Set loading to false if not logged in
        }
    }, [user, router]);

    if (isLoading) {
        return (
            <div className='flex w-screen h-screen justify-center items-center'>
                <div className="loader"></div>
            </div>
        )
    }

    const handleChange = (event, setFuncChange) => {
        setFuncChange(event.target.value);
    };
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    const handleLogin = async () => {
        if (!email || !password) {
            setErrorMessage('Please fill in the information');
        } else {
            try {
                if (!isValidEmail(email)) {
                    setErrorMessage("Email not valid")
                    return;
                }
                setErrorMessage('');
                const user = {
                    email: email,
                    password: password
                }
                const resultAction = await dispatch(login(user));

                if (login.fulfilled.match(resultAction)) {

                    // Xử lý khi login thành công
                    console.log('Login successful:', resultAction.payload);
                    router.push('/');
                } else if (login.rejected.match(resultAction)) {
                    // Xử lý khi login thất bại
                    console.log('Login failed:', resultAction.payload.error);
                    setErrorMessage(resultAction.payload.error);

                }

            } catch (error) {

                console.log(error);


            }
        }

    }


    return (
        <>
            <div className='flex'>
                <div className="flex-1 relative w-full h-screen hidden for-auth-page:block">
                    <Image className="object-cover"
                        src={"/ace.jpg"}
                        alt="Picture of the author"
                        fill={true}
                        quality={100}
                    />
                </div>
                <div className="flex-1 w-full h-screen bg-white flex justify-center items-center border-l border-black border-opacity-50">
                    <div >
                        <Card color="transparent" shadow={false}>
                            <Typography variant="h4" color="blue-gray">
                                Login
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                Nice to meet you! Enter your details to login.
                            </Typography>
                            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                                <div className="mb-1 flex flex-col gap-6">
                                    {/* Email */}
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Your Email
                                    </Typography>
                                    <Input
                                        size="lg"
                                        placeholder="name@mail.com"
                                        className={` focus:!border-gray-900 !border ${errorMessage && !email ? `!border-red-200` : `!border-t-blue-gray-200` }`}
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                        onChange={(e) => {
                                            handleChange(e, setEmail)
                                        }}
                                    />
                                    {/* Password */}
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Password
                                    </Typography>
                                    <Input
                                        type="password"
                                        size="lg"
                                        placeholder="********"
                                        className={` focus:!border-gray-900 !border ${errorMessage && !password ? `!border-red-200` : `!border-t-blue-gray-200` }`}
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                        onChange={(e) => {
                                            handleChange(e, setPassword)
                                        }}
                                    />
                                </div>
                                <div className="text-red-400">{errorMessage}</div>

                                <div>
                                    <Checkbox
                                        label={
                                            <Typography
                                                variant="small"
                                                color="gray"
                                                className="flex items-center font-normal"
                                            >
                                                I agree the
                                                <a
                                                    href="#"
                                                    className="font-medium transition-colors hover:text-gray-900"
                                                >
                                                    &nbsp;Terms and Conditions
                                                </a>
                                            </Typography>
                                        }
                                        containerProps={{ className: "-ml-2.5 checkbox-login" }}
                                    />
                                </div>

                                <Button className="mt-6" fullWidth
                                    onClick={handleLogin}
                                >
                                    sign in
                                </Button>
                                <Typography color="gray" className="mt-4 text-center font-normal">
                                    Don&apos;t have an account?{" "}
                                    <a href="/signup" className="font-medium text-gray-900">
                                        Sign up
                                    </a>
                                </Typography>
                            </form>
                        </Card>
                    </div>

                </div>
            </div>
        </>

    )
}
