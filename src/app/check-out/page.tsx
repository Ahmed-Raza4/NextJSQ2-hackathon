"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FiPackage } from "react-icons/fi";
import { nanoid } from "nanoid";
import sanityClient from "@/sanity/sanity.client";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const [items, setItems] = useState<any[]>([]);
  const [cartData, setCartData] = useState<any[]>([]);
  const [total, setTotal] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    address3: "",
    postalCode: "",
    city: "",
    country: "",
    email: "",
    phone: "",
    consent: false,
  });

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getCart = localStorage.getItem("cart");
      if (getCart) {
        const parsedCart = JSON.parse(getCart);
        setCartData(parsedCart);
        setItems(parsedCart);

        const subtotal = parsedCart.reduce((total: number, item: any) => total + item.price, 0);
        const deliveryFee = subtotal >= 5000 ? 0 : 500;
        setTotal(subtotal + deliveryFee);
      }
    }
  }, []);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.address1 &&
    formData.postalCode &&
    formData.city &&
    formData.country &&
    formData.email &&
    formData.phone &&
    formData.consent;

  const handleSubmit = async () => {
    if (!cartData || cartData.length === 0) {
      console.error("Cart is empty");
      return;
    }

    const order = {
      _type: "order",
      firstName: formData.firstName,
      lastName: formData.lastName,
      address1: formData.address1,
      address2: formData.address2,
      address3: formData.address3,
      postalCode: formData.postalCode,
      city: formData.city,
      country: formData.country,
      email: formData.email,
      phone: formData.phone,
      consent: formData.consent,
      cartData: cartData.map((item: any) => ({
        _key: nanoid(),
        _type: "reference",
        _ref: item._id,
      })),
      total: total,
      orderStatus: "Pending",
      orderDate: new Date().toISOString(),
      orderNumber: Math.round(Math.random() * 1000000),
    };

    try {
      await sanityClient.create(order);
      localStorage.setItem("order", JSON.stringify([order]));
    } catch (error) {
      console.log("Error Creating Order", error);
    }

    setFormData({
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      address3: "",
      postalCode: "",
      city: "",
      country: "",
      email: "",
      phone: "",
      consent: false,
    });

    router.push("/order-complete");
  };

  return (
    <div className="w-full min-h-screen bg-[#ffffff] py-10 px-4">
      <div className="lg:flex justify-around gap-8 items-start max-w-screen-xl mx-auto">
        {/* Left Section */}
        <div className="w-full lg:flex-[0.65]">
          <h1 className="text-[18px] font-[600]">How would you like to get your order?</h1>
          <p className="text-[15px] font-[400] mt-2 text-[#757575]">
            Customs regulation for India requires a copy of the recipient&apos;s KYC. The address
            on the KYC needs to match the shipping address...
          </p>

          <div className="flex items-center gap-[10px] p-3 border-2 border-gray-300 rounded-md text-center mt-6 cursor-pointer hover:bg-gray-100">
            <FiPackage size={18} />
            <span className="text-[14px] font-[500]">Deliver It</span>
          </div>

          {/* Name and Address Section */}
          <h1 className="text-[16px] font-[600] mt-8">Enter your name and address:</h1>
          <div className="mt-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="address1"
              placeholder="Address Line 1"
              value={formData.address1}
              onChange={handleChange}
              className="w-full p-3 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="address2"
              placeholder="Address Line 2"
              value={formData.address2}
              onChange={handleChange}
              className="w-full p-3 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="address3"
              placeholder="Address Line 3"
              value={formData.address3}
              onChange={handleChange}
              className="w-full p-3 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-4 mt-4">
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Contact Information */}
          <h1 className="text-[16px] font-[600] mt-8">What&apos;s your contact information?</h1>
          <div className="mt-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Checkboxes */}
          <div className="mt-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="w-4 h-4 accent-blue-500"
              />
              <span className="text-[14px] text-[#757575]">
                I have read and consent to eShopWorld processing my information in accordance with the{" "}
                <a href="#" className="text-blue-500 underline">
                  Privacy Statement
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-500 underline ml-1">
                  Cookie Policy
                </a>
                .
              </span>
            </label>
          </div>

          {/* Continue Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className={`w-full py-3 mt-6 rounded-md text-[16px] font-[600] ${
              isFormValid ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-300 text-white"
            }`}
            disabled={!isFormValid}
          >
            Continue
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:flex-[0.35] mt-6 lg:mt-0">
          <h2 className="text-[20px] font-semibold mb-4">Order Summary</h2>
          <div className="border p-4 rounded-md shadow-sm">
            {items.map((item) => (
              <div key={item._id} className="flex items-center gap-4 mb-6">
                <Image
                  src={item.image}
                  alt={item.productName}
                  width={100}
                  height={100}
                  className="object-cover rounded"
                />
                <div>
                  <h3 className="text-[16px] font-[600]">{item.productName}</h3>
                  <p className="text-[15px] text-[#757575]">{item.category}</p>
                  <p className="text-[16px] font-[600] mt-2">₹ {item.price}</p>
                </div>
              </div>
            ))}

            {/* Total Price */}
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between">
                <p className="text-[16px] font-[500]">Subtotal</p>
                <p className="text-[16px] font-[600]">₹ {total - (total >= 5000 ? 0 : 500)}</p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-[16px] font-[500]">Delivery/Shipping</p>
                <p className="text-[16px] font-[600]">{total >= 5000 ? "Free" : "₹ 500"}</p>
              </div>
              <div className="flex justify-between mt-4 font-bold text-[18px]">
                <p>Total</p>
                <p>₹ {total}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;