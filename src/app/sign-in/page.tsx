import Image from "next/image"

const Sign_In = () => {
    return (
        <>
            <div className='h-screen  grid place-content-center  overflow-hidden  '>
                <div className=' w-[380px] h-[489] font-[Helvetica] '>

                    <div className="flex justify-center  ">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={60}
                            height={60}
                            className="pb-4 mt-5 ml-2
    "

                        />
                    </div>

                    <div className="flex justify-center text-center text-2xl font-[Helvetica] font-[700] leading-8  ">
                        <h1>Your Account <br /> For Everything <br />Nike </h1>
                    </div>


                    <div className="mt-11 border border-gray-300/60   px-4 py-2 rounded-sm outline-none ">
                        <input type="email" name="email" id="1" placeholder="Email address " />
                    </div>

                    <div className="mt-5 border px-4 py-2 rounded-sm outline-none ">
                        <input type="password" name="passowrd" id="1" placeholder="Password " />
                    </div>
                    <div className="flex ">
                        <input
                            type="checkbox"
                            name="checkbox"
                            id="checkbox"
                            aria-label="Keep me signed in"
                            className="w-6 h-6 mt-5 appearance-none bg-white border border-gray-300/60 rounded checked:bg-black checked:focus:ring-2 checked:focus:ring-white checked:after:content-['✔'] checked:after:text-white checked:after:block checked:after:text-center"
                        />

                        <p className="mt-5 ml-3  text-sm text-zinc-500/70">Keep me signed in</p>
                        <p className="mt-5 ml-16 text-sm text-zinc-300">Forgotten your password?</p>
                    </div>


                    <div className="flex justify-center mt-9 text-center text-zinc-500/70">
                        <p>
                            By Logging in, you agree to {'Nike\u0027s'} <span className="underline underline-offset-2">Privacy Policy</span> and <span className="underline underline-offset-2">Terms of Use</span>
                        </p>
                    </div>
                    <div className="bg-zinc-800 text-center  mt-6">
                        <button className=" text-white/90 py-3 rounded-lg font-extralight text-sm">SIGN IN</button>
                    </div>


                    <div className="pb-11 flex justify-center p-4 text-zinc-500/70">

                        <p className="">
                            Not a Member? <span className="text-zinc-900 underline underline-offset-2"> Join Us.</span>
                        </p>
                    </div>


                </div>


            </div>
        </>
    )
}

export default Sign_In;
