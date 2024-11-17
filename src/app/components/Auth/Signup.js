"use client"

import React, { useState } from 'react'

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import Image from 'next/image';
import axios from 'axios';

export default function SignupComponent() {
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    const handleChange = (event, setFuncChange) => {
        setFuncChange(event.target.value);
    };
    const handleSignup = async () => {
        if (!email || !password || !firstname || !lastname) {
            setErrorMessage('Please fill in the information');
        } else {
            try {
                if (!isValidEmail(email)) {
                    setErrorMessage("Email not valid")
                    return;
                }
                if (password.length < 8) {
                    setErrorMessage("Password must be at least 8 characters long");
                    return;
                }
                setErrorMessage('');
                const newUser = { firstname: firstname, password: password, email : email, lastname: lastname }
                console.log(newUser);
                
                const response = await axios.post(`${process.env.NEXT_PUBLIC_SITE}/api/v1/auth/register`, newUser);
                console.log('User registered:', response);
                alert("Registration successful!");
            } catch (error) {
                setErrorMessage(error.response.data.error);
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
                                Sign Up
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                Nice to meet you! Enter your details to register.
                            </Typography>
                            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                                <div className="mb-1 flex flex-col gap-6">
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        First Name
                                    </Typography>
                                    <Input
                                        size="lg"
                                        placeholder="First Name"
                                        className={` focus:!border-gray-900 !border ${errorMessage && !firstname ? `!border-red-200` : `!border-t-blue-gray-200`}`}
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                        onChange={(e) => {
                                            handleChange(e, setFirstname)
                                        }}
                                    />
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Last Name
                                    </Typography>
                                    <Input
                                        size="lg"
                                        placeholder="Last Name"
                                        className={` focus:!border-gray-900 !border ${errorMessage && !lastname ? `!border-red-200` : `!border-t-blue-gray-200`}`}
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                        onChange={(e) => {
                                            handleChange(e, setLastname)
                                        }}
                                    />
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Email
                                    </Typography>
                                    <Input
                                        size="lg"
                                        placeholder="name@mail.com"
                                        className={` focus:!border-gray-900 !border ${errorMessage && !email ? `!border-red-200` : `!border-t-blue-gray-200`}`}
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                        onChange={(e) => {
                                            handleChange(e, setEmail)
                                        }}
                                    />
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Password
                                    </Typography>
                                    <Input
                                        type="password"
                                        size="lg"
                                        placeholder="********"
                                        className={` focus:!border-gray-900 !border ${errorMessage && !password ? `!border-red-200` : `!border-t-blue-gray-200`}`}
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
                                    onClick={handleSignup}
                                >
                                    sign up
                                </Button>
                                <Typography color="gray" className="mt-4 text-center font-normal">
                                    Already have an account?{" "}
                                    <a href="/login" className="font-medium text-gray-900">
                                        Sign In
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
