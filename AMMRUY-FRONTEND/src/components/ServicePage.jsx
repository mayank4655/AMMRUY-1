import React, { useState } from 'react'
import Cards from '../reusable components/Card';
import acImage from "../assets/Services-img/ac.png";
import fridgeImage from "../assets/Services-img/fridge.png";
import microwaveImage from "../assets/Services-img/microwave.png";
import roImage from "../assets/Services-img/ro.png";
import tvImage from "../assets/Services-img/tv.png";
import washingMachineImage from "../assets/Services-img/washingMachine.png";
import { NavBar } from '../reusable components/NavBar';
import Popup from './Popup';


const characters = [
    {
        src: acImage,
        name: "AC Repair",
        body: "Our technicians will come to your home, correctly diagnose the problem, and provide you with the best service out there in the industry...",
    },
    {
        src: fridgeImage,
        name: "Fridge repair",
        body: " We offer the most affordable repair services and work on most appliance brands and high end appliances and more at doorstep services...",
    },
    {
        src: microwaveImage,
        name: "Microwave Repair",
        body: "Your Microwave not heating? Contact Us for highly qualified engineer service microwave oven at doorstep service...",
    },
    {
        src: roImage,
        name: "RO Repair",
        body: "We undertake Installation, Repairs, Uninstallation of all brands & We offer a comprehensive services for domestic and commercial ro water purifiers...",
    },
    {
        src: tvImage,
        name: "TV Repair",
        body: "With over 20 years comprehensive experience, We have the technical expertise to fix just about any television...",
    },
    {
        src: washingMachineImage,
        name: "Washing Machine Repair",
        body: "Doorstep service center repair all makes and model washing machine repair service, semi automatic washing machine repair...",
    }
];
// const cards = 

export default function ServicePage() {
    // const [Toggle, setToggle] = useState(false);
    const [hover, sethover] = useState(true);
    return (
        <>
            <main className='w-full'>
                <NavBar hover={hover} />
                <div
                    className="grid grid-cols-auto-fit-100 w-full">
                    {characters.map((character) => {
                        return (
                            <Cards
                                key={character.name}
                                src={character.src}
                                name={character.name}
                                body={character.body}
                                // setToggle={setToggle}
                            />
                        );
                    })}
                </div>
            </main>
        </>
    );
}