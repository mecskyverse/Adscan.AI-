import React from 'react'
import { inter } from '@/utils/fonts'

//Need to be updated with latest images and reviews of Adscan
const Review = () => {
    return (
        <div className="py-8 sm:py-16 md:py-24 lg:py-[120px] max-w-[960px] relative mx-auto space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
            <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center items-center [background:radial-gradient(46.25%_46.25%_at_50%_53.75%,rgba(226,82,20,0.40)_0%,rgba(0,0,0,0.40)_100%)]">
                <div className="flex gap-3 justify-center items-center">
                    <div className="rounded-full overflow-hidden relative w-16 h-16 shadow-[0px_4px_40px_0px_rgba(246,108,48,0.40)]">
                        {/* <Image alt="Gerson Ramirez" loading="lazy" decoding="async" data-nimg="fill" className="absolute w-full h-full inset-0 object-cover" > */}
                    </div>
                    <div className="space-y-1">
                        <p className={`${inter.className} font-bold text-text-primary css-qaz3k7`}>
                            Gerson Ramirez</p>
                        <span className={`${inter.className}  text-text-secondary css-11mm823`}>
                            Creative Strategist @True Classic</span>
                    </div>
                </div>
                <div className="mt-6">
                    <p className={`${inter.className} font-medium text-text-primary css-18ji250`}>
                        “Atria is a game-changing creative strategy tool. It’s an all in one creative ideation + scripting tool. Its amazing theme based ad search makes finding ad inspiration extremely fast. Atria is the best thing to happen to creative strategy since Motion!”</p>
                </div>
                <div className="mt-4 flex justify-center opacity-[0.65]">
                    {/* <Image src="" alt="Gerson Ramirez" loading="lazy" decoding="async" data-nimg="fill" className="absolute w-full h-full inset-0 object-cover" > */}
                </div>
            </div>
            <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center items-center [background:radial-gradient(46.25%_46.25%_at_50%_53.75%,rgba(226,82,20,0.40)_0%,rgba(0,0,0,0.40)_100%)]">
                <div className="flex gap-3 justify-center items-center">
                    <div className="rounded-full overflow-hidden relative w-16 h-16 shadow-[0px_4px_40px_0px_rgba(246,108,48,0.40)]">
                        {/* <Image src="" alt="Gerson Ramirez" loading="lazy" decoding="async" data-nimg="fill" className="absolute w-full h-full inset-0 object-cover" > */}
                    </div>
                    <div className="space-y-1">
                        <p className={`${inter.className} font-bold text-text-primary css-qaz3k7`}>
                            Dennis Willeboordse</p>
                        <span className={`${inter.className} text-text-secondary css-11mm823`}>
                            Founder &amp; CEO @D-DOUBLEU MEDIA</span>
                    </div>
                </div>
                <div className="mt-6">
                    <p className={`${inter.className} font-medium text-text-primary css-18ji250`}>
                        “Atria helps my team save crazy hours we’d normally spend in other tools. Atria is a powerful all-in-one platform to discover new ads and to craft superior ads in less time - all driven by its unique AI capabilities.”</p>
                </div>
                <div className="mt-4 flex justify-center opacity-[0.65]">
                    {/* Here we can add the company logo image */}
                    {/* <Image alt="Dennis Willeboordse" loading="lazy" width="226" height="52" decoding="async" data-nimg="1" className="w-auto" src="" /> */}
                </div>
            </div>
            <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center items-center [background:radial-gradient(46.25%_46.25%_at_50%_53.75%,rgba(226,82,20,0.40)_0%,rgba(0,0,0,0.40)_100%)]">
                <div className="flex gap-3 justify-center items-center">
                    <div className="rounded-full overflow-hidden relative w-16 h-16 shadow-[0px_4px_40px_0px_rgba(246,108,48,0.40)]">
                        {/* Here we can add the company logo image */}
                        {/* <Image alt="Dennis Willeboordse" loading="lazy" width="226" height="52" decoding="async" data-nimg="1" className="w-auto" src="" /> */}
                    </div>
                    <div className="space-y-1">
                        <p className={`${inter.className} font-bold text-text-primary css-qaz3k7`}>
                            Nicole Crowell</p>
                        <span className={`${inter.className} text-text-secondary css-11mm823`}>
                            CEO &amp; Founder @Performance Purple</span>
                    </div>
                </div>
                <div className="mt-6">
                    <p className={`${inter.className}  font-medium text-text-primary css-18ji250`}>
                        “Atria's AI platform, with a vast 5 million ad library, acts like a personal assistant, tailoring searches to my needs. Atria is more than an ad tool; it’s a forward-thinking partner, keeping my strategies ahead of the curve.”</p>
                </div>
                <div className="mt-4 flex justify-center opacity-[0.65]">
                    {/* Here we can add the company logo image */}
                    {/* <Image alt="Dennis Willeboordse" loading="lazy" width="226" height="52" decoding="async" data-nimg="1" className="w-auto" src="" /> */}
                </div>
            </div>
        </div>

    )
}

export default Review