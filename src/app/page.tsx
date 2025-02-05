'use client';
import { get4Products } from "@/sanity/sanity.query";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [products, setProducts] = useState<any>([])
  useEffect(() => {
    async function getSomeProduct() {
      const productsData = await get4Products();
      setProducts(productsData);
    }
    getSomeProduct();
  }, [])




  return (
    <div className="w-full bg-gray-100">
      {/* Fullscreen Sneaker Image Section */}
      <section className="container mx-auto px-4 py-8">
        {/* App Download Prompt */}
        <div className="text-center mb-6">
          <h3 className="text-xl md:text-2xl text-black font-bold">Hello Nike App</h3>
          <p className="text-sm text-gray-600 mt-2">
            Download the app to access everything Nike.{" "}
            <Link href="/" className="text-black hover:underline">Get Your Great</Link>
          </p>
        </div>

        {/* Hero Background Image */}
        <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[90vh]">
          <Image
            src="/HeroSection/image.png"
            alt="Nike Air Max Pulse"
            fill
            priority
            className="object-cover object-center rounded-lg"
          />
        </div>

        {/* Hero Content */}
        <div className="text-center mt-8 max-w-4xl mx-auto px-4">
          <p className="text-sm text-gray-600 mb-2">First Look</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-4">
            Nike Air Max Pulse
          </h2>
          <p className="text-sm md:text-base text-gray-700 mb-6 max-w-2xl mx-auto">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
            —designed to push you past your limits and help you go to the max.
          </p>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            <Link href="/cart">
              <button className="px-4 md:px-6 py-2 md:py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
                Notify Me
              </button>
            </Link>
            <Link href="/all-products">
              <button className="px-4 md:px-6 py-2 md:py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
                Shop Air Max
              </button>
            </Link>
          </div>
        </div>
      </section>


<section className="bg-white py-12 px-4"> 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product: any, index: number) => (
          <Link href={`/all-products/${product.slug}`} key={product.slug}>
            <div key={index} className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-gray-700">{product.productName}</h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="font-bold mt-2">MRP: ₹{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-6">
          <Link href="/all-products">
            <div className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-blue-600">
              See More
            </div>
          </Link>
        </div>
      </section>


      {/* New Section */}
      <section className="relative bg-white py-16 px-4 text-center">
        <div className="container mx-auto">
          <div className="relative w-full h-[50vh] md:h-[70vh] mb-8">
            <Image
              src="/HeroSection/Image4.png"
              alt="Running Man"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            STEP INTO WHAT FEELS GOOD
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Cause everyone should know the feeling of running in that perfect pair!
          </p>
          <Link href="/all-products">
            <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
              Find Your Shoe
            </button>
          </Link>
        </div>
      </section>

      {/* Gear Up Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center md:text-left">Gear Up</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                img: "/HeroSection/Image5.png",
                title: "Nike Dri-FIT ADV TechKnit Ultra",
                price: "₹ 3,895",
              },
              {
                img: "/HeroSection/Image6.png",
                title: "Nike Dri-FIT Challenger",
                price: "₹ 2,495",
              },
              {
                img: "/HeroSection/Image7.png",
                title: "Nike Dri-FIT ADV Run Division",
                price: "₹ 5,295",
              },
              {
                img: "/HeroSection/Image8.png",
                title: "Nike Fast",
                price: "₹ 3,795",
              },
            ].map((item, index) => (
              <div key={index} className="text-center flex flex-col items-center">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="rounded-lg object-contain"
                />
                <p className="text-gray-700 font-medium mt-4">{item.title}</p>
                <p className="text-gray-500 text-sm">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Don't Miss Section */}
      <section className="my-16 px-4">
        <div className="container mx-auto">
          <h1 className="font-semibold text-xl mb-4 text-center md:text-left">Don&apos;t Miss</h1>
          <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[90vh] md:mb-8">
            <Image
              src="/HeroSection/Image9.png"
              alt="flight"
              width={1344}
              height={700}
              // fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center items-center space-y-5 text-center">
            <h1 className="font-semibold text-2xl md:text-4xl">FLIGHT ESSENTIALS</h1>
            <h2 className="text-xs md:text-sm text-gray-600 max-w-md">
              Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
            </h2>
            <Link href="/all-products">
              <button className="bg-black rounded-2xl text-white px-6 py-2 hover:bg-gray-800 transition">
                Shop
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* The Essentials Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="font-semibold text-xl mb-8 text-center md:text-left">The Essentials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          <Image
            width={300}
            height={300}
            alt="Essential 1"
            src="/HeroSection/Image10.png"
            className="object-contain"
          />
          <Image
            width={300}
            height={300}
            alt="Essential 2"
            src="/HeroSection/Image11.png"
            className="object-contain"
          />
          <Image
            width={300}
            height={300}
            alt="Essential 3"
            src="/HeroSection/Image12.png"
            className="object-contain"
          />
        </div>
      </section>

      {/* Navigation */}
      <nav className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Icons Section */}
            <div>
              <span className="text-lg font-semibold text-gray-900 mb-4 block">Icons</span>
              <ul className="space-y-4 text-base text-gray-500">
                {["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"].map((item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="block hover:text-gray-900 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shoes Section */}
            <div>
              <span className="text-lg font-semibold text-gray-900 mb-4 block">Shoes</span>
              <ul className="space-y-4 text-base text-gray-500">
                {["All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"].map((item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="block hover:text-gray-900 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clothing Section */}
            <div>
              <span className="text-lg font-semibold text-gray-900 mb-4 block">Clothing</span>
              <ul className="space-y-4 text-base text-gray-500">
                {["All Clothing", "Modest Wear", "Hoodies & Pullovers", "Shirts & Tops"].map((item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="block hover:text-gray-900 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kids Section */}
            <div>
              <span className="text-lg font-semibold text-gray-900 mb-4 block">Kid&apos;s</span>
              <ul className="space-y-4 text-base text-gray-500">
                {["Infant & Toddler Shoes", "Kids Shoes", "Kids Jordan Shoes", "Kids Basketball Shoes"].map((item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="block hover:text-gray-900 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}