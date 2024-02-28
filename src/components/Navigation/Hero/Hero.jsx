import React from 'react'
import Image from "next/image";
import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })


const Hero = () => {
    return (
        <div className="relative">
            <main className='max-w-[900px] mx-auto'>
                <section className='mt-16 sm:mt-24 md:mt-32 lg:mt-[136px] relative mx-3 lg:mx-auto'>
                    <div className={`text-3xl ${inter.className} w-full text-center font-bold md:leading-[76px] bg-clip-text text-transparent bg-gradient-to-r from-[#FFF] to-[#FFFFFFA6] css-1wih27q text-[36px] sm:text-[48px] md:text-[64px] leading-[42px] sm:leading-[69px]`} >
                        Find and make winning ads 10x faster
                    </div>
                    <h6 className={`md:text-[24px] md:font-normal text-[18px] leading-6 md:leading-8 mt-6 text-center ${inter.className} text-[rgb(197,197,202)] tracking-tight font-medium`}>Adscan is the first AI platform for ad creation workflows.</h6>
                    <h6 className={`md:text-[24px] md:font-normal text-[18px] leading-7 md:leading-8 text-center mt-1 ${inter.className}  text-[rgb(197,197,202)] mt-0 tracking-tight font-medium`}>Inspiration, research, ideation — all in one place.</h6>

                    <div className={`${inter.className} mt-10 gap-4 text-center flex flex-col sm:flex-row justify-center items-center`}>
                        <button className="text-white bg-[#F66C30] rounded-xl font-semibold hover:bg-[#b04e24] transition duration-300 ease-in-out px-4 py-2 sm:px-6 sm:py-4 min-w-[64px] text-sm md:text-base" tabindex="0" type="button">Start 5-day free trial
                        </button>
                    </div>
                    <div className={`${inter.className} text-center text-text-tertiary font-semibold mt-3 md:text-[14px] text-[12px] tracking tight text-gray-600`} >No credit card required</div>
                </section>
            </main>
            <div className="flex px-6 relative flex-col justify-center items-center gap-[10px] self-stretch pt-[60px] pb-[120px]  bg-background-primary w-[97vw] ">
                <Image src="/images/video-bg.png" alt="Video Background" fill={true} className='absolute object-contain w-full h-auto' />
                <div className="video-cover z-[1] mx-auto w-full max-w-[1280px] relative overflow-hidden rounded-lg sm:rounded-md md:rounded-lg xl:rounded-xl [box-shadow:_0px_0px_200px_70px_rgba(255,_146,_92,_0.30)]">
                    <Image alt="video-main-bg" fetchpriority="high" width="2560" height="1485" decoding="async" data-nimg="1" className="h-auto w-full max-w-[1280px] relative" src="/images/promo.jpg" style="color: transparent;" />
                    <div className="absolute transition top-0 left-0 right-0 bottom-0 bg-black  hover:opacity-50 opacity-0 cursor-pointer mask"></div>
                    <div className="absolute top-1/2 left-1/2 play-button rounded-full bg-[#f66c30] w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
                        <span class="animate-ping z-30 absolute inline-flex w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-[#f66c30] opacity-75"></span>
                        <svg width="22" height="29" viewBox="0 0 22 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative scale-75 md:scale-90 lg:scale-100 z-40"><path d="M20.6842 12.6992C21.8134 13.496 21.8134 15.1706 20.6842 15.9674L3.65311 27.9855C2.32826 28.9204 0.499999 27.9729 0.499999 26.3514L0.5 2.31531C0.5 0.693811 2.32826 -0.25369 3.65311 0.681195L20.6842 12.6992Z" fill="white"></path>
                        </svg>
                    </div>

                </div>
            </div>

            <div class="mb-10 sm:mb-12 md:mb-[60px] px-6">
                <div class="p-3 pt-6 sm:p-4 sm:pt-8 md:p-6 md:pt-10 rounded-3xl border border-solid border-gray-500 bg-[#1c1d23f2] max-w-full lg:max-w-[1280px] mx-auto">
                    <div class="flex items-center gap-4 sm:gap-6 justify-center">
                        <div class="h-[2px] w-4 sm:w-8 md:w-12 lg:w-16 bg-gray-500"></div>
                        <p class={`${inter.className} font-bold  md:text-xl tracking-tight text-base`}>Trusted by customers from</p>
                        <div class="h-[2px] w-4 sm:w-8 md:w-12 lg:w-16 bg-gray-500 "></div>
                    </div>
                    <div class="px-4 py-3 sm:px-6 sm:py-4 flex flex-wrap lg:flex-nowrap justify-center gap-2">
                        <Image src="/images/customers/photoroomlogo.webp" alt="PhotoRoom_logo" width="128" height="57" className='mr-4' />
                        <Image src="/images/customers/kilo.webp" alt="PhotoRoom_logo" width="128" height="57" />
                        <Image src="/images/customers/thg2.webp" alt="PhotoRoom_logo" width="128" height="57" />
                        <Image src="/images/customers/betterme.webp" alt="PhotoRoom_logo" width="128" height="57" />
                        <Image src="/images/customers/manual2.webp" alt="PhotoRoom_logo" width="128" height="57" />
                        <Image src="/images/customers/zoe2.webp" alt="PhotoRoom_logo" width="128" height="57" />
                        <Image src="/images/customers/hellofresh.webp" alt="PhotoRoom_logo" width="128" height="57" />
                        <Image src="/images/customers/meditopia.webp" alt="PhotoRoom_logo" width="128" height="57" className='ml-4' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Hero



