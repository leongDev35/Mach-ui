"use client"

import React from 'react'

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import Image from 'next/image';

export default function LoginComponent() {
    return (
        <>
            <div className='flex'>
                <div className="flex-1 relative w-full h-screen hidden for-auth-page:block">
                        <Image className="object-cover"
                            src={"/ace.jpg"}
                            alt="Picture of the author"
                            fill={true}
                            // layout="fill"
                            // objectFit="cover"
                            // width={100}
                            // height={100}
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

                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Your Email
                                    </Typography>
                                    <Input
                                        size="lg"
                                        placeholder="name@mail.com"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Password
                                    </Typography>
                                    <Input
                                        type="password"
                                        size="lg"
                                        placeholder="********"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
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

                                <Button className="mt-6" fullWidth>
                                    sign in
                                </Button>
                                <Typography color="gray" className="mt-4 text-center font-normal">
                                    Don&apos;t have an account?{" "}
                                    <a href="#" className="font-medium text-gray-900">
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
