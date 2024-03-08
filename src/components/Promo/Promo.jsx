import React from 'react';
import { inter } from '@/utils/fonts';
import Image from "next/image";



const Promo = () => {
    return (
        <div className={`py-8 sm:py-16 md:py-24 lg:py-[120px] max-w-[1280px] relative mx-6 xl:mx-auto`}>
            <h3 className={` ${inter.className} text-center font-bold css-3vas3`}>World's <span className={`text-primary ${inter.className} `}>largest</span> ad library</h3>
            <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-[60px] border border-solid bg-background-secondary border-outline-default pt-12 sm:pt-16 md:pt-20">
                <Image src="/images/Promo/5m.png" alt="" loading="lazy" width="1365" height="283" className="w-[50%] h-auto absolute top-6 left-1/2 [transform:translateX(-50%)]" />
                <div className="z-[1] relative">
                    <div className="px-6">
                        <h4 className={`${inter.className} text-center md:text-3xl sm:text-2xl lg:text-4xl font-bold `}>Search over <span className={`${inter.className} text-primary`}>5 million winning ads</span></h4>
                        <p className={`${inter.className} text-text-secondary text-center mt-1 text-[14px] sm:text-[16px] font-medium tracking-tight`}>From the best brands on Meta and TikTok</p>
                    </div>
                    <div className="mt-10 overflow-hidden">
                        <div className="flex img-container">
                            <Image src="/images/Promo/feed-animation.png" loading='lazy' width="3218" height="1210" className="w-full h-auto" />
                            <Image src="/images/Promo/feed-animation.png" loading='lazy' width="3218" height="1210" className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 inter-font">
                <div className="rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border-solid border border-[#e0e1ea1a] bg-background-secondary">
                    <div className="p-6 pb-4 sm:p-8 sm:pb-6 md:p-10 md:pb-8 space-y-1 ">
                        <h6 className={`${inter.className} text-left text-text-primary font-bold css-80xpf1`}>AI-driven search</h6>
                        <p className={`${inter.className} text-left text-text-secondary text-base font-medium tracking-tight`}>Experience search that prioritizes the best brands from your keywords</p>
                    </div>
                    <div className="">
                        <Image src="/images/Promo/discovery-filter.png" alt="AI-driven search" loading="lazy" width="1256" height="800" decoding="async" data-nimg="1" className="w-full h-auto block" style="color: transparent;" />
                    </div>
                </div>
                <div className="rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border-solid border border-[#e0e1ea1a] bg-background-secondary">
                    <div className="p-6 pb-4 sm:p-8 sm:pb-6 md:p-10 md:pb-8 space-y-1 ">
                        <h6 className={`${inter.className} text-left text-text-primary font-bold css-80xpf1`}>Filter by themes</h6>
                        <p className={`${inter.className} text-left text-text-secondary text-base `}>Research top and trending creative strategies</p>
                    </div>
                    <div className="">
                        <Image src="/images/Promo/discovery-search.png" alt="AI-driven search" loading="lazy" width="1256" height="800" decoding="async" data-nimg="1" className="w-full h-auto block" style="color: transparent;" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promo