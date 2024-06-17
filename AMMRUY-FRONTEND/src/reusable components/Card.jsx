import React from 'react'


import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export default function Cards(props) {
    return (
        <Card className="min-w-40 m-4  ">
            <CardHeader shadow={false} floated={false}
                className="h-96 mb-2">
                <img
                    src={props.src}
                    alt="card-image"
                    className="h-full w-full object-cover rounded-xl"
                />
            </CardHeader>
            <CardBody className="max-h-70">
                <div className="mb-2 font-medium text-center">
                    {props.name}
                </div>
                <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                >
                    {props.body}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 mt-2">
                <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-[#00B09A] text-[#ffffff] rounded-full shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 text-base font-normal"
                >
                    READ MORE
                </Button>
            </CardFooter>
        </Card>

    );
}