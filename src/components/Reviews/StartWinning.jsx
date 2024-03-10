import React from 'react'
import adscanTeddy from '../../assets/Adscanteddy.svg'
import conversionRate from '../../assets/ConversionRate.svg'
import { inter } from '@/utils/fonts'
import Image from 'next/image'
const StartWinning = () => {
    return (
        <div className="px-6 py-8 sm:py-16 md:py-24 lg:py-[120px] relative mx-10 lg:mx-auto max-w-[960px] rounded-[24px] flex flex-col [background:_radial-gradient(155.42%_168.04%_at_50%_0%,_rgba(28,_29,_35,_0.30)_0%,_rgba(255,_146,_92,_0.30)_100%)] border-solid  border-[1px] border-[#FFFFFF1F]  [box-shadow:_0px_4px_120px_-10px_rgba(255,_159,_117,_0.20);]">
            <div className="flex justify-center">
                <Image src={conversionRate} />
            </div>
            <div className='md:w-[760px] flex justify-center'>
                <Image src={adscanTeddy} />
            </div>
            <h3 className={`${inter.className} text-center text-text-primary mt-5 css-3vas3`}>
                Start winning with Atria</h3>
            <div className="my-6 sm:my-8 md:my-10 mx-auto flex flex-col justify-center items-center">


                <a target="_blank" href="https://adscan.ai/onboarding?from=/onboarding2">
                    <div className={`${inter.className} mt-10 gap-4 text-center flex flex-col sm:flex-row justify-center items-center`}>
                        <button className="text-white bg-[#F66C30] rounded-xl font-semibold hover:bg-[#b04e24] transition duration-300 ease-in-out px-4 py-2 sm:px-6 sm:py-4 min-w-[64px] text-sm md:text-base mb-5" tabIndex="0" type="button">Start 5-day free trial
                        </button>
                    </div>
                </a>
                <div className={`${inter.className} text-[#564f4d] text-center text-text-tertiary font-semibold mt-3 css-11mm823`}>
                    No credit card required</div>
            </div >
        </div >

    )
}

export default StartWinning