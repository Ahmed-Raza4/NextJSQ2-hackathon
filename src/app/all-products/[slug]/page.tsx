'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getProducts } from '@/sanity/sanity.query';
import { useParams } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

const Detail = () => {
    const [products, setProducts] = useState<any>([]);
    const { toast }= useToast()
    useEffect(() => {
        async function allProducts() {
            const productsData = await getProducts();
            setProducts(productsData);
            console.log(productsData);
        }
        allProducts();
    }, [])
    const urldata = useParams()

    const cartData = JSON.parse(localStorage.getItem('cart') ?? '[]');

    const addToCart = (product : any ) =>{
        if(cartData.length > 0){
            localStorage.setItem('cart', JSON.stringify([...cartData, product]));
        }
        else{
            localStorage.setItem('cart', JSON.stringify([product]));
        }
    }


    return (
        <>
            {products.filter((product: any) => product.slug === urldata.slug).map((product: any) => (
                <div key={product.slug} className="flex flex-col md:flex-row bg-white p-5 rounded-lg shadow-md max-w-6xl mx-auto">
                    <div className="">
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={653}
                            height={653}
                            className="rounded-lg"
                            priority
                        />
                    </div>
                    <div className="flex-1 md:pl-5 pt-5 md:pt-0 flex flex-col justify-center">
                        <h2 className="font-poppins text-3xl md:text-4xl font-medium text-gray-900">
                            {product.productName}
                        </h2>
                        <p className="font-poppins text-sm text-gray-900 my-2 leading-7">
                            {product.description}
                        </p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center mt-5 gap-4 sm:gap-0">
                            <span className="font-poppins text-2xl md:text-3xl font-medium text-gray-900 sm:mr-5">
                                ₹ {product.price}
                            </span>

                            <button type='button'
                                className="w-full sm:w-auto bg-gray-900 text-white py-2 px-5 rounded-full flex items-center justify-center"
                                onClick={() => {
                                    toast({
                                    description: "Item Added Succesfully.",
                                    duration: 5000,
                                      })
                                      addToCart(product)}
                                }
                                >
                                <Image
                                    src="/Buy-Cart.png"
                                    alt="Cart Icon"
                                    width={29}
                                    height={29}
                                />
                                <span className="ml-2">Add To Cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Detail;