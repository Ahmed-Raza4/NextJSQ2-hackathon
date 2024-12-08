
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-screen bg-gray-100">
      {/* Fullscreen Sneaker Image */}
      <section className="flex justify-center flex-col items-center bg-[#fafafa] m-4 ">
            <div className="flex justify-center flex-col items-center pb-4">
            <h3 className="text-xl text-black font-bold">Hello Nike App</h3>
         <p className="text-sm text-gray-600" >
         <span>Download the app to access everything Nike.</span>{" "}
           <Link href={"/"}> Get Your Great</Link>
        </p>
            </div>
            <div
                 style={{
                    backgroundImage: "url('/HeroSection/image.png')",
                    backgroundSize: "cover", 
                    backgroundPosition: "center", 
                    backgroundRepeat: "no-repeat", 
                    height: "100vh", 
                    width: "100%", 
                  }}> 
            </div>
            <div className="flex justify-center items-center flex-col p-10 text-center
            ">
                <p className="text-sm">First Look</p>
                <h2 className=" text-4xl font-bold uppercase">Nike Air Max Pulse</h2>
                <p  className="text-sm leading-5 w-full pt-3 pb-2 text-center
                lg:w-[60%]">
                Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                —designed to push you past your limits and help you go to the max.
           
                </p>
                <div className="flex justify-center items-center gap-3">
                    <Link href='/cart'><button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">Notify Me</button></Link>
                    <Link href='all-products'><button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">Shop Air Max</button></Link>
                </div>
            </div>
        </section>

      {/* Best of Air Max Section */}
      <div className="bg-white px-6 py-8 relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Best of Air Max</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 font-bold rounded-full">Shop</button>
            <div className="flex space-x-2">
              <button className="p-2 bg-gray-100 rounded-full">←</button>
              <button className="p-2 bg-gray-300 rounded-full">→</button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            {
              img: "/HeroSection/image1.png",
              title: "Nike Air Max Pulse",
              desc: "Women's Shoes",
              price: "₹ 13,995",
            },
            {
              img: "/HeroSection/image2.png",
              title: "Nike Air Max Pulse",
              desc: "Men's Shoes",
              price: "₹ 13,995",
            },
            {
              img: "/HeroSection/image3.png",
              title: "Nike Air Max 97 SE",
              desc: "Men's Shoes",
              price: "₹ 16,995",
            },
          ].map((product, index) => (
            <div key={index} className="border border-white rounded-md p-4">
              <Image
                src={product.img}
                alt={product.title}
                width={300}
                height={300}
                className="mx-auto"
              />
              <div className="mt-4">
                <Link href='/product-detail'><h3 className="font-medium text-lg pl-11">{product.title}</h3></Link>
                <p className="text-gray-500 text-sm pl-11">{product.desc}</p>
                <p className="font-bold mt-1 pl-11">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Section */}
      <div className="relative bg-white py-16 px-4 text-center">
        <Image
          src="/HeroSection/image4.png"
          alt="Running Man"
          width={1200}
          height={600}
          className="rounded-lg mx-auto"
        />
        <h1 className="mt-8 text-4xl font-extrabold text-gray-900">
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Cause everyone should know the feeling of running in that perfect
          pair!
        </p>
        <Link href='/all-products'><button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
          Find Your Shoe
        </button></Link>
      </div>

      {/* Gear Up Section */}
      <div className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Gear Up</h2>
          <div className="grid grid-cols-4 gap-12">
            {[
              {
                img: "/HeroSection/image5.png",
                title: "Nike Dri-FIT ADV TechKnit Ultra",
                price: "₹ 3,895",
              },
              {
                img: "/HeroSection/image6.png",
                title: "Nike Dri-FIT Challenger",
                price: "₹ 2,495",
              },
              {
                img: "/HeroSection/image7.png",
                title: "Nike Dri-FIT ADV Run Division",
                price: "₹ 5,295",
              },
              {
                img: "/HeroSection/image8.png",
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
                  className="rounded-lg"
                />
                <p className="text-gray-700 font-medium mt-4">{item.title}</p>
                <p className="text-gray-500 text-sm">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Don't Miss Section */}
      <section className="my-20">
        <h1 className="font-semibold text-xl mb-3 ml-2">Don&apos;t Miss</h1>
        <Image src={"/HeroSection/image9.png"} alt={"flight"} width={1344} height={700} />
        <div className="flex flex-col justify-center items-center space-y-5 pt-10">
          <h1 className="font-semibold text-2xl md:text-4xl">FLIGHT ESSENTIALS</h1>
          <h2 className="text-[9px] md:text-sm">Your built-to-last,all-week wears—but with style only Jordan Brand can deliver.</h2>
          <Link href='/all-products'><button className="bg-black rounded-2xl text-white px-4 py-2 ">Shop</button></Link>
        </div>
      </section>


      {/* the essential */}
      <section className="m-4" >
        <div>
          <h2 className="font-semibold text-xl py-5"> The Essentials</h2>
        </div>
        <div className="flex justify-evenly flex-wrap gap-5">
          <Image width={300} height={300} alt="" src={"/HeroSection/image10.png"} />
          <Image width={300} height={300} alt="" src={"/HeroSection/image11.png"} />
          <Image width={300} height={300} alt="" src={"/HeroSection/image12.png"} />
        </div>
      </section>

      {/* Navigation */}
      <nav className="bg-gray-100 py-6">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center gap-5 flex-wrap w-[80%]">
            {/* Icons Section */}
            <div className="flex flex-col w-[15%] max-md:w-full">
              <span className="text-lg font-semibold text-gray-900 mb-3">Icons</span>
              <ul className="space-y-6 text-base text-gray-500">
                <li>
                  <Link
                    href="#"
                    className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Air Force 1
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Huarache
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Air Max 90
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Air Max 95
                  </Link>
                </li>
              </ul>
            </div>

            {/* Shoes Section */}
            <div className="flex flex-col w-[18%] max-md:w-full">
              <span className="text-lg font-semibold text-gray-900 mb-3">Shoes</span>
              <ul className="space-y-6 text-base text-gray-500">
                <li>
                  <Link
                    href="#"
                    className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    All Shoes
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Custom Shoes
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Jordan Shoes
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Running Shoes
                  </Link>
                </li>
              </ul>
            </div>

            {/* Clothing Section */}
            <div className="flex flex-col w-[18%] max-md:w-full">
              <span className="text-lg font-semibold text-gray-900 mb-3">Clothing</span>
              <ul className="space-y-6 text-base text-gray-500">
                <li>
                  <Link
                    href="#"
                    className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    All Clothing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Modest Wear
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Hoodies & Pullovers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Shirts & Tops
                  </Link>
                </li>
              </ul>
            </div>

            {/* Kids Section */}
            <div className="flex flex-col w-[33%] max-md:w-full">
              <span className="text-sm font-semibold text-gray-900 mb-3">Kid&apos;s</span>
              <ul className="space-y-6 text-base text-gray-500">
                <li>
                  <Link
                    href="#"
                    className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Infant & Toddler Shoes
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Kid&apos;s Shoes
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Kid&apos;s Jordan Shoes
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Kid&apos;s Basketball Shoes
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
