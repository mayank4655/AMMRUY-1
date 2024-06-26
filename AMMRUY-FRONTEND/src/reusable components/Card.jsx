import React, { useState } from 'react'

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Popup from '../components/Popup';

export default function Cards({
    src,
    name,
    body,
    setToggle
}) {
    const popupHandler = () => {
        setToggle(true);
        setInterval(() => {
            setToggle(false);
        }, 4000);
    }
    return <>
        <Card className="min-w-40 m-5 p-1">
            <CardHeader shadow={false} floated={false}
                className="h-96 mb-2">
                <img
                    src={src}
                    alt="card-image"
                    className="h-full w-full object-cover rounded-xl"
                />
            </CardHeader>
            <CardBody className="md:h-32">
                <div className="mb-2 font-medium text-center">
                    {name}
                </div>
                <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                >
                    {body}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 mt-2">
                <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-[#00B09A] pt-2 pb-2 text-[#ffffff] rounded-full shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 text-base font-normal"
                    onClick={popupHandler}
                >
                    READ MORE
                </Button>
            </CardFooter>
        </Card>
        {/* <Popup /> */}
    </>
}