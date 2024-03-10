import React from 'react'
import Image from 'next/image'
import { inter } from '@/utils/fonts'
const CustomerReviews = () => {
    return (
        <div className="py-8 sm:py-10 md:py-12 lg:py-[60px] mx-6 lg:mx-auto">
            <h3 className={`${inter.className}  text-center text-text-primary font-bold css-3vas3`}>
                Loved by our customers</h3>
            <div className="gap-6 lg:px-6 grid grid-cols-1 lg:grid-cols-3 justify-center lg:flex-row py-10 sm:py-12 lg:py-[60px] max-w-[1328px] mx-auto">
                <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 bg-background-secondary border border-solid border-outline-default">
                    <div>
                        <Image alt="" loading="lazy" width="453" height="96" decoding="async" data-nimg="1" className="h-12 w-auto" src="/images/PricingPage/b1.png" />
                    </div>
                    <div className={`${inter.className}  text-white mt-2 css-x1l92z`}>
                        "Having an all-in-one solution for creative strategy work has been amazing. Having a tool that you can use for research, ideation, and briefing of ad concepts and keep it all in one place is a major time saver. The value of AI will compound with its AI getting better over time."</div>
                    <div className="mt-6 flex gap-2 items-center">
                        <Image alt="" loading="lazy" width="96" height="96" decoding="async" data-nimg="1" className="flex-none w-12 h-12" src="/images/PricingPage/p1.png" />
                        <div className="space-y-1">
                            <div className={`${inter.className}  text-white font-semibold text-[14px] leading-[20px] css-18ji250`}>
                                Richard Muskett</div>
                            <div className={`${inter.className}  text-text-secondary text-[12px] leading-[16px] css-11mm823`}>
                                Director of Paid Media @Right Left Agency</div>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 bg-background-secondary border border-solid border-outline-default">
                    <div>
                        <Image alt="" loading="lazy" width="373" height="96" decoding="async" data-nimg="1" className="h-12 w-auto" src="/images/PricingPage/b2.png" />
                    </div>
                    <div className={`${inter.className}  text-white mt-2 css-x1l92z`}>
                        "With the biggest ad library around and its powerful AI features, Atria helps my team save crazy hours we’d normally spend in other tools. Atria is a powerful all-in-one platform to discover new ads and to craft superior ads in less time - all driven by its unique AI capabilities."</div>
                    <div className="mt-6 flex gap-2 items-center">
                        <Image alt="" loading="lazy" width="96" height="96" decoding="async" data-nimg="1" className="flex-none w-12 h-12" src="/images/PricingPage/p2.png" />
                        <div className="space-y-1">
                            <div className={`${inter.className}  text-white font-semibold text-[14px] leading-[20px] css-18ji250`}>
                                Dennis Willeboordse</div>
                            <div className={`${inter.className}  text-text-secondary text-[12px] leading-[16px] css-11mm823`}>
                                Founder &amp; CEO @D-DOUBLEU MEDIA</div>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 bg-background-secondary border border-solid border-outline-default">
                    <div>
                        <Image alt="" loading="lazy" width="435" height="96" decoding="async" data-nimg="1" className="h-12 w-auto" src="/images/PricingPage/b3.png" />
                    </div>
                    <div className={`${inter.className}  text-white mt-2 css-x1l92z`}>
                        “I use Atria religiously. The AI scripting tool is a wizard—translating brand details into compelling concepts &amp; scripts seamlessly. The curated discovery section outshines competitors, and the video extraction tool is GENIUS. This is a creative strategist’s dream come true.”</div>
                    <div className="mt-6 flex gap-2 items-center">
                        <Image alt="" loading="lazy" width="96" height="96" decoding="async" data-nimg="1" className="flex-none w-12 h-12" src="/images/PricingPage/p3.png" />
                        <div className="space-y-1">
                            <div className={`${inter.className}  text-white font-semibold text-[14px] leading-[20px] css-18ji250`}>
                                Victoria Jessica</div>
                            <div className={`${inter.className}  text-text-secondary text-[12px] leading-[16px] css-11mm823`}>
                                Creative Strategist &amp; Copywriter @Creative Milkshake</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-3 items-center">
                <a target="_blank" href="https://adscan.ai/onboarding?from=/onboarding2">
                    <div className={`${inter.className} mt-10 gap-4 text-center flex flex-col sm:flex-row justify-center items-center`}>
                        <button className="text-white bg-[#F66C30] rounded-xl font-semibold hover:bg-[#b04e24] transition duration-300 ease-in-out px-4 py-2 sm:px-14 sm:py-4 min-w-[64px] text-sm md:text-base" tabIndex="0" type="button">Start 5-day free trial
                        </button>
                    </div>
                </a>
                <div className={`${inter.className} text-text-tertiary font-bold text-sm text-center text-[#909094] `}>
                    No credit card required</div>
            </div>
        </div>

    )
}

export default CustomerReviews