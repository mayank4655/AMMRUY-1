import React from 'react';
import fridgeImage from "../assets/Services-img/fridge.png";
import { NavBar } from '../reusable components/NavBar';

export default function FridgeRepair() {
  return (
    <>
      <main className="w-full h-screen">
        <NavBar />
        <section className="flex items-center justify-center h-full bg-gray-100">
          <div className="flex w-full h-full bg-white shadow-md">
            <div className="w-1/2 h-full">
              <img className="w-full h-full object-cover object-center" src={fridgeImage} alt="Fridge Repair" />
            </div>
            <div className="w-1/2 flex flex-col justify-center p-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 text-center">Fridge Repair</h2>
              <p className="text-lg lg:text-xl text-gray-600 mb-6">
                Our technicians are dedicated to fixing your fridge issues promptly and effectively. We offer comprehensive repair services to ensure your fridge operates efficiently.
              </p>
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">Services Offered:</h3>
              <ul className="list-disc list-inside text-lg lg:text-xl text-gray-600 mb-6">
                <li>Fridge Installation</li>
                <li>Fridge Maintenance</li>
                <li>Fridge Repair</li>
                <li>Thermostat Check</li>
                <li>Compressor Replacement</li>
              </ul>
              <div className="flex justify-center">
                <button className="bg-gradient-to-r from-teal-500 to-lime-400 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-200 hover:shadow-md">
                  Book a Service
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
