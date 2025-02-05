'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';


export default function OrderComplete() {
    const [products, setProducts] = useState<any[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [cartData, setCartData] = useState<any[]>([])
    
    const { data: session, status } = useSession();
    const router = useRouter();
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/sign-in"); // Redirect if not logged in
        }
    }, [status, router])

    useEffect(() => {
        // Fetch cart data
        const orderData = localStorage.getItem('order');
        const cartData = localStorage.getItem('cart');
        if (orderData) {
            const parsedOrder = JSON.parse(orderData);
            setProducts(parsedOrder);
        }
        if (cartData) {
            const parsedCart = JSON.parse(cartData);
            setCartData(parsedCart);

            // Calculate total
            const totalPrice = parsedCart.reduce(
                (sum: number, item: any) => sum + item.price * (item.quantity || 1),
                0
            );
            setTotal(totalPrice);
        }
    }, []);
    
    const handleContinueShopping = () => {
        localStorage.removeItem('cart'); // Clear cart from local storage
        localStorage.removeItem('order'); // Clear order from local storage
        router.push('/all-products'); // Redirect to home page
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
                {/* Thank You Section */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Thank You!</h1>
                    <p className="text-gray-600 mt-2">
                        Your order has been placed successfully. We hope you enjoy your purchase!
                    </p>
                </div>

                {/* Customer Details Section */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Customer Details</h2>
                    {products.map((product) => (
                    <div key={product._id} className="space-y-2">
                        <p>
                            <span className="font-medium text-gray-700">Name:</span> {product.firstName}
                        </p>
                        <p>
                            <span className="font-medium text-gray-700">Email:</span> {product.email}
                        </p>
                        <p>
                            <span className="font-medium text-gray-700">Phone:</span> {product.phone}
                        </p>
                        <p>
                            <span className="font-medium text-gray-700">Address:</span> {product.address1}
                        </p>
                    </div>
                    ))}
                </div>

                {/* Product Details Section */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
                    <div className="space-y-4">
                        {cartData.map((product) => (
                            <div
                                key={product.slug}
                                className="flex items-center justify-between border-b pb-4"
                            >
                                <div className="flex items-center space-x-4">
                                    <Image
                                        src={product.image}
                                        alt={product.productName}
                                        width={80}
                                        height={80}
                                        className="rounded-lg object-cover"
                                    />
                                    <div>
                                        <h3 className="text-gray-800 font-medium">
                                            {product.productName}
                                        </h3>
                                        <p className="text-sm text-gray-600">{product.category}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 font-medium">
                                    ₹ {product.price * (product.quantity || 1)}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Total Amount */}
                    <div className="flex justify-between items-center border-t pt-4 mt-4">
                        <p className="text-lg font-bold text-gray-800">Total</p>
                        <p className="text-lg font-bold text-gray-800">₹ {total.toLocaleString()}</p>
                    </div>
                </div>

                {/* Continue Shopping Button */}
                <div className="text-center">
                    <button
                        onClick={handleContinueShopping}
                        className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-300"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    );
}
