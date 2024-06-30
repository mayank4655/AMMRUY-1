import React from 'react';
import acImage from "../assets/Services-img/ac.png";
import { showPopup } from '../Redux/slices/popupSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ImCross } from "react-icons/im";

export default function ACRepair() {
  const bookHandler = () => {
    dispatch(showPopup());
    setTimeout(() => {
      dispatch(showPopup());
    }, 5000);
  }
  const dispatch = useDispatch();
  const status = useSelector((state) => state.popup.show);
  return (
    <>
      <div className="pop h-screen w-full fixed duration-500" style={{
        visibility: status ? 'visible' : 'hidden',
        opacity: status ? 1 : 0
      }}>
        <div className="popup absolute w-full items-center flex justify-center h-screen">
          <div className="content w-[90%] md:w-[70%] h-[95%] p-2 md:h-[50%] bg-white mx-auto rounded-xl text-black">
            <div className="para w-[95%] md:w-[80%] md:py-10 py-2 mx-auto">
              <p>Thank you for booking a service with us!</p><br />
              <p>
                We have received your service request and will be in touch shortly to confirm your appointment. Our team of skilled technicians is committed to providing you with the best possible service. Please ensure that your contact details are accurate, so we can reach you easily.
              </p><br />
              <p>
                If you have any urgent questions or need immediate assistance, feel free to call us at <a className='text-blue-500' href="tel:+912345678903">2345678903</a> or email us at <a className='text-blue-500' href="mailto:sharpcarrer5@gmail.com">sharpcarrer5@gmail.com</a>. We look forward to helping you with your electronics repair needs and appreciate your trust in our services!
              </p>
            </div>
          </div>
        </div>
      </div>
      <main className="w-full h-screen">
        {/* <NavBar /> */}
        <section className="flex items-center justify-center h-full bg-gray-100">
          <div className="flex flex-col md:flex-row w-full h-full bg-white shadow-md">
            <div className="w-[90vw] h-[95vh] mx-2 md:w-1/2 mt-2 md:mt-0 md:h-full">
              <img className="w-full h-full mx-2 object-cover object-center" src={acImage} alt="AC Repair" />
            </div>
            <div className="md:w-1/2 w-[90vw] flex flex-col justify-center p-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 text-center">AC Repair</h2>
              <p className="text-lg lg:text-xl text-gray-600 mb-6">
                We fix split AC and window AC of all brands in air conditioners. Here, you will get fast, reliable and least affordable repair and services in your window AC or book a Complan if you need AC service repair.
              </p>
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">Services Offered:</h3>
              <ul className="list-disc list-inside text-lg lg:text-xl text-gray-600 mb-6">
                <li>AC Installation</li>
                <li>AC Maintenance</li>
                <li>AC Repair</li>
                <li>Filter Replacement</li>
                <li>Coolant Level Check</li>
              </ul>
              <div className="flex justify-center">
                <button
                  onClick={bookHandler}
                  className="bg-gradient-to-r from-teal-500 to-lime-400 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-200 hover:shadow-md">
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







