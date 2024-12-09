'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';

// Simulated product data (in a real app, this would come from state or API)
const cartItems = [
    {
        id: 1,
        name: "Nike Dri-FIT ADV TechKnit Ultra",
        category: "Men's Short-Sleeve Running Top",
        color: "Ashen Slate/Cobalt Bliss",
        size: "L",
        price: 3895,
        image: "/cart/image 1.png"
    },
    {
        id: 2,
        name: "Nike Air Max 97 SE",
        category: "Men's Shoes",
        color: "Flat Pewter/Light Bone/Black/White",
        size: "8",
        price: 16995,
        image: "/cart/image 2.png"
    }
];

export default function Cart() {
    const [items, setItems] = useState(cartItems);

    // Calculate total price
    const subtotal = items.reduce((total, item) => total + item.price, 0);
    const deliveryFee = subtotal >= 14000 ? 0 : 500;
    const total = subtotal + deliveryFee;

    // Remove item from cart
    const removeItem = (id: number) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
            <div className="max-w-6xl w-full bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Bag Items Section */}
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold mb-6">Bag</h2>
                        
                        {items.map((item) => (
                            <div 
                                key={item.id} 
                                className="flex flex-col md:flex-row items-center justify-between border-b pb-4 mb-4 space-y-4 md:space-y-0"
                            >
                                <div className="flex flex-col md:flex-row items-center space-x-4">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={150}
                                        height={150}
                                        className="rounded-lg object-cover"
                                    />
                                    <div className="text-center md:text-left">
                                        <h3 className="font-medium text-gray-800">{item.name}</h3>
                                        <p className="text-sm text-gray-600">{item.category}</p>
                                        <p className="text-sm text-gray-500">{item.color}</p>
                                        <p className="text-sm text-gray-500">Size: {item.size}</p>
                                    </div>
                                </div>
                                <div className="text-center md:text-right">
                                    <p className="font-medium">₹ {item.price.toLocaleString()}</p>
                                    <button 
                                        onClick={() => removeItem(item.id)}
                                        className="text-sm text-red-500 hover:underline mt-2"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary Section */}
                    <div className="bg-gray-100 rounded-lg p-6 border border-gray-200">
                        <h2 className="text-lg font-bold mb-4">Summary</h2>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <p className="text-gray-600">Subtotal</p>
                                <p className="font-medium">₹ {subtotal.toLocaleString()}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-600">Estimated Delivery & Handling</p>
                                <p className="font-medium">
                                    {deliveryFee === 0 ? 'Free' : `₹ ${deliveryFee.toLocaleString()}`}
                                </p>
                            </div>
                            <div className="flex justify-between text-lg font-bold border-t pt-4">
                                <p>Total</p>
                                <p>₹ {total.toLocaleString()}</p>
                            </div>
                        </div>
                        <Link href="/check-out">
                            <button 
                                className="w-full bg-black text-white font-medium py-3 rounded-lg mt-4 
                                hover:bg-gray-800 transition-colors duration-300"
                            >
                                Member Checkout
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Free Delivery Section */}
                <div className="mt-6 text-center md:text-left text-sm text-gray-500">
                    Free Delivery applies to orders of ₹ 14,000.00 or more.{' '}
                    <Link href="#" className="text-blue-500 hover:underline">
                        View details
                    </Link>
                </div>
            </div>
        </div>
    );
}
