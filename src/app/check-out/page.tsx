import React from 'react';
import Image from "next/image";
import { AiOutlineHeart, AiOutlineDelete } from "react-icons/ai";
import { FiPackage } from "react-icons/fi";



const Checkout = () => {
    return (
        <div className="w-full h-auto bg-[#ffffff] py-10 px-4 place-items-center">

            {/* Main Flex Container */}
            <div className="lg:flex justify-around gap-8 items-start max-w-screen-xl mx-auto">

                {/* Left Section */}
                <div className="w-full max-w-[450px] text-[#111111] lg:flex-[0.65]">
                    <h1 className="text-[18px] font-[600]">How would you like to get your order?</h1>
                    <p className="text-[15px] font-[400] mt-2 text-[#757575]">
                        Customs regulation for India require a copy of the recipient&apos;s KYC...
                    </p>

                    {/* Delivery Option */}
                    <div className="w-[450px] flex gap-[10px] sm:w-1/2 p-3 border-2 border-gray-300 rounded-md text-center mt-6">
                        <FiPackage size={18} />
                        <span className="text-[14px] font-[500]">Deliver It</span>
                    </div>

                    {/* Other Left Section Content */}
                    <h1>Enter your name and address:</h1>
                    <div className="mt-6">
                        {/* Input Fields */}
                        <input type="text" placeholder="First Name" className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="text" placeholder="Last Name" className="w-full p-3 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        {/* Continue with input fields */}
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full max-w-[300px] text-[#111111] lg:flex-[0.35] mt-6 lg:mt-0">
                    {/* Summary Section */}
                    <h2 className="text-[20px] font-semibold mb-4">Order Summary</h2>

                    {/* Product Item */}
                    <div className="flex items-center gap-4 mb-6">
                        <Image src="/gear1.jpeg" alt="Gear" width={500} height={300} />

                        <div>
                            <div className="flex justify-between">
                                <h3 className="text-[18px] font-[700] pt-[40px]">Nike Dri-FIT ADV TechKnit Ultra</h3>
                                <p className="text-[16px] font-[600] pt-[40px]">MRP: ₹ 3 895.00</p>
                            </div>
                            <p className="text-[15px] mt-1 text-[#757575]">Men&apos;s Short-Sleeve Running Top <br /> Ashen Slate/Cobalt Bliss</p>
                            <p className="text-[15px] mt-1 text-[#757575]"><span>Size L</span> <span>Quantity 1</span></p>

                            {/* Icons */}
                            <div className="flex gap-4 mt-4 items-center">
                                <AiOutlineHeart size={18} color="#111" />
                                <AiOutlineDelete size={18} color="#111" />
                            </div>
                        </div>
                    </div>

                    {/* Product Item */}
                    <div className="flex items-center gap-4 mb-6">
                        <Image
                            src="/air3.jpeg"
                            alt="Product"
                            width={180}
                            height={180}
                            className="object-cover"
                        />

                        <div>
                            <div className="flex justify-between">
                                <h3 className="text-[18px] font-[700]">Nike Dri-FIT ADV TechKnit Ultra</h3>
                                <p className="text-[16px] font-[600]">MRP: ₹ 3 895.00</p>
                            </div>
                            <p className="text-[15px] mt-1 text-[#757575]">Men&apos;s Short-Sleeve Running Top <br /> Ashen Slate/Cobalt Bliss</p>
                            <p className="text-[15px] mt-1 text-[#757575]"><span>Size L</span> <span>Quantity 1</span></p>

                            {/* Icons */}
                            <div className="flex gap-4 mt-4 items-center">
                                <AiOutlineHeart size={18} color="#111" />
                                <AiOutlineDelete size={18} color="#111" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
