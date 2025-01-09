'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getProducts } from '@/sanity/sanity.query';
import { useParams } from 'next/navigation';

const page: React.FC = () => {
    const [products, setProducts] = useState<any>([]);
        useEffect(() => {
          async function allProducts() {
            const productsData = await getProducts();
            setProducts(productsData);
            console.log(productsData);
          }
          allProducts();
        }, [])
        const urldata = useParams()
  return (
    <>
        {products.filter((product: any) => product.slug === urldata.slug).map((product: any) => (
            <div className="flex bg-white p-5 rounded-lg shadow-md max-w-6xl mx-auto">
              <div className="">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={653}
                  height={653}
                  className="rounded-lg"
                />
              </div>
              <div className="flex-1 pl-5 flex flex-col justify-center">
                <h2 className="font-poppins text-4xl font-medium text-gray-900">
                  {product.name}
                </h2>
                <p className="font-poppins text-sm text-gray-900 my-2 leading-7">
                  {product.description}
                </p>
                <div className="flex items-center mt-5">
                  <span className="font-poppins text-3xl font-medium text-gray-900 mr-5">
                    ₹ {product.price}
                  </span>
          
                  <button type='button' className="bg-gray-900 text-white py-2 px-5 rounded-full flex items-center snipcart-add-item" 
                  data-item-id="123"
                  data-item-price={product.price}
                  data-item-image={product.image}
                  data-item-name={product.name}
                  data-item-description={product.description}
                  data-item-url="/product-detail">
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

export default page;
