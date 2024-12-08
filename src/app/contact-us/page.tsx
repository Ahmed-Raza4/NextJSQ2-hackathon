import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faThumbsUp, faThumbsDown, faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
// import Button from "../components/Button";

const Page = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <h2 className="uppercase text-xl font-bold mt-8">Get Help</h2>

      {/* Search Bar */}
      <div className="flex px-4 py-3 rounded-md w-[80%] md:w-[40%] border-2 border-gray-400 mt-4 justify-between">
        <input
          className="focus-visible:outline-none w-[70%]"
          type="text"
          placeholder="What can we help you with?"
        />
        <FontAwesomeIcon icon={faSearch} className="text-gray-500 w-6 h-6" />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-8 md:px-16 py-8 bg-white mt-8 w-full max-w-6xl">
        {/* FAQs Section */}
        <div className="md:col-span-9 border-r-[1px] pr-4 border-gray-300">
          <h2 className="text-2xl font-bold mb-4">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h2>
          <p className="mb-4">
            We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
          </p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
            <li>
              If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a local credit or debit card.
            </li>
            <li>Apple Pay</li>
          </ul>
          <p className="mb-6">
            <Link href="#" className="underline font-semibold">
              Nike Members
            </Link>{" "}
            can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member,{" "}
            <Link href="#" className="underline font-semibold">
              join us
            </Link>{" "}
            today.
          </p>
          <div className="flex mt-4 gap-4">
            
            {/* <Button text="Join Us" classNames="rounded-full py-2" />
            <Button text="Shop Nike" classNames="rounded-full py-2" /> */}
          </div>
          <h3 className="text-xl font-semibold mt-8 mb-4">FAQs</h3>
          <div className="mb-6">
            <h4 className="text-lg font-bold mb-2">Does my card need international purchases enabled?</h4>
            <p>Yes, we recommend asking your bank to enable international purchases on your card.</p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-bold mb-2">Can I pay for my order with multiple methods?</h4>
            <p>No, payment for Nike orders can&apos;t be split between multiple payment methods.</p>
          </div>
          <div className="mb-6"> 
            <p className="mb-2">Was this answer helpful?</p>
            <div className="flex space-x-4">
              <FontAwesomeIcon icon={faThumbsUp} className="text-gray-500 w-6 h-6 cursor-pointer" />
              <FontAwesomeIcon icon={faThumbsDown} className="text-gray-500 w-6 h-6 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="md:col-span-3 flex flex-col items-center space-y-6">
          <h2 className="uppercase font-bold text-xl text-center">Contact Us</h2>

          {/* Phone Section */}
          <div className="flex flex-col items-center space-y-2 text-center">
            <FontAwesomeIcon icon={faPhone} className="text-gray-500 w-10 h-10" />
            <p className="font-semibold">000 800 919 0566</p>
            <p>Products & Orders: 24 hours a day, 7 days a week</p>
            <p>Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
          </div>

          {/* Email Section */}
          <div className="flex flex-col items-center space-y-2 text-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 w-10 h-10" />
            <p>We&apos;ll reply within five business days</p>
          </div>

          {/* Store Locator Section */}
          <div className="flex flex-col items-center space-y-2 text-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500 w-10 h-10" />
            <p className="font-semibold">STORE LOCATOR</p>
            <p>Find Nike retail stores near you</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;