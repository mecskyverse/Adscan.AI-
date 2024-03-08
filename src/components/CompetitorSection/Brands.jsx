import React from 'react'
import { inter } from '@/utils/fonts';


const Brands = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-10 py-8 sm:py-16 md:py-24 lg:py-[120px] max-w-[1280px] relative mx-6 xl:mx-auto">
            <div className="flex w-max-[960px] flex-col items-center gap-4">
                <h3 className={`${inter.className} text-center text-text-primary font-bold css-3vas3`}>Get <span className={`${inter.className} text-primary `}> latest ads</span> from competitor brands</h3>
                <h6 className={`${inter.className} text-center text-text-secondary font-medium css-80xpf1`}>Never miss out with our weekly email updates</h6>
            </div>
            <div className="w-[300px] h-[190.2px] sm:w-[600px] sm:h-[380.4px] md:w-[700px] md:h-[443.89px] lg:w-[960px] lg:h-[611.46px] overflow-hidden  max-w-[960px] max-h-[609px] rounded-xl [box-shadow:_0px_4px_200px_50px_rgba(255,_146,_92,_0.30)]">
                <div className='w-full h-full '>
                    <video src="https://cdn.tryatria.com/video/landing-page-whatsnew.mp4" preload="auto" autoPlay="" loop="" className='w-full h-full '></video>
                </div>
            </div>

        </div>
    )
}

export default Brands