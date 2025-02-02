'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';



export default function Cart() {
    const [items, setItems] = useState<any[]>([]);
    const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

    const handleQuantityChange = (slug: string, quantity: number) => {
        setQuantities((prev) => ({ ...prev, [slug]: quantity >= 1 ? quantity : 1 }));
    }
    
    
    // remove function
    const handleRemove = (slug: string) => {
        const updatedCart = items.filter((item) => item.slug !== slug);
        setItems(updatedCart); // Update state
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
    };

    // Calculate total price
    const subtotal = items.reduce((total, item) => total + (quantities[item.slug] || 1) * item.price, 0);
    const deliveryFee = subtotal >= 5000 ? 0 : 500;
    const total = subtotal + deliveryFee;

    useEffect(() => {
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            setItems(JSON.parse(cartData));
        }
    }, [])


    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
            <div className="max-w-6xl w-full bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Bag Items Section */} 
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold mb-6">Cart</h2>

                        {items.map((item) => (
                            <div
                                key={item._id}
                                className="flex flex-col md:flex-row items-center justify-between border-b pb-4 mb-4 space-y-4 md:space-y-0"
                            >
                                <div className="flex flex-col md:flex-row items-center space-x-4">
                                    <Image
                                        src={item.image}
                                        alt={item.productName}
                                        width={150}
                                        height={150}
                                        className="rounded-lg object-cover"
                                    />
                                    <div className="text-center md:text-left">
                                        <h3 className="font-medium text-gray-800">{item.productName}</h3>
                                        <p className="text-sm text-gray-600">{item.category}</p>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <input
                                        type="number"
                                        min="1"
                                        onChange={(e)=>handleQuantityChange(item.slug, parseInt(e.target.value))}
                                        value={quantities[item.slug] || 1}
                                        className="border rounded-lg px-3 py-1 w-16 text-center text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#000000]"
                                    />
                                </div>
                                <div className="text-center md:text-right">
                                    <p className="font-medium">₹ {(quantities[item.slug] || 1) * item.price}</p>
                                    <button
                                        className="text-sm text-red-500 hover:underline mt-2"
                                        onClick={() => handleRemove(item.slug)}
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
                    Free Delivery applies to orders of ₹ 5,000.00 or more.{' '}
                    <Link href="#" className="text-blue-500 hover:underline">
                        View details
                    </Link>
                </div>
            </div>
        </div>
    );
}
