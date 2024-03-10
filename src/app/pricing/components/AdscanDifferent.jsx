import React from 'react'
import { inter } from '@/utils/fonts'
import Image from 'next/image'
import checkIcon from '@/assets/checkCircle.svg'
import crossIcon from '@/assets/crossCircle.svg'
const AdscanDifferent = () => {
    const comparisonData = [
        {
            title: "Ads library",
            atria: "5 million",
            foreplay: "2 million",
            magicBrief: "300,000"
        },
        {
            title: "Follow brands",
            atria: "20 brands (Basic); 100 brands (Pro)",
            foreplay: "2 brands",
            magicBrief: false
        },
        {
            title: "Platform speed",
            atria: "Fast",
            foreplay: "Slow",
            magicBrief: "Normal"
        },
        {
            title: "Keyword search result quality",
            atria: "High",
            foreplay: "Low",
            magicBrief: "Medium"
        },
        {
            title: "Brand match based on search",
            atria: "High",
            foreplay: "Medium",
            magicBrief: "Low"
        },
        {
            title: "Discovery feed that is curated by algorithm instead of community saves",
            atria: true,
            foreplay: false,
            magicBrief: false
        },
        {
            title: "Dedicated filter for ad themes on discovery feed",
            atria: true,
            foreplay: false,
            magicBrief: false
        }, {
            title: "Extract video transcripts with precise timestamps",
            atria: true,
            foreplay: false,
            magicBrief: false
        },
        {
            title: "Get notified when your favorite brands launch new ads",
            atria: true,
            foreplay: false,
            magicBrief: false
        }, {
            title: "Mine thousands of customer reviews with ad analysis and insights",
            atria: true,
            foreplay: false,
            magicBrief: false
        },
        {
            title: "Generate winning hooks and scripts in minutes using AI",
            atria: true,
            foreplay: false,
            magicBrief: false
        },
        {
            title: "Generate voice-over using AI",
            atria: true,
            foreplay: false,
            magicBrief: false
        }, {
            title: "Save and organize boards on multiple levels",
            atria: true,
            foreplay: false,
            magicBrief: false
        },
        {
            title: "Price",
            atria: <>
                <span className={`${inter.className} MuiTypography-h5 text-text-primary font-bold css-9vn808`}>$39 </span>
                <span className={`${inter.className} MuiTypography-body1 text-text-primary css-qaz3k7`}>/month;</span>
                <br />
                <span className={`${inter.className} MuiTypography-h5 text-text-primary font-bold css-9vn808`}>$89 </span>
                <span className={`${inter.className} MuiTypography-body1 text-text-primary css-qaz3k7`}>/month</span>
            </>,
            foreplay: <>
                <span className={`${inter.className} MuiTypography-h5 text-text-primary font-bold css-9vn808`}>$49 </span>
                <span className={`${inter.className} MuiTypography-body1 text-text-primary css-qaz3k7`}>/month;</span>
                <br />
                <span className={`${inter.className} MuiTypography-h5 text-text-primary font-bold css-9vn808`}>$99 </span>
                <span className={`${inter.className} MuiTypography-body1 text-text-primary css-qaz3k7`}>/month</span>
            </>,
            magicBrief: <><span className={`${inter.className} MuiTypography-h5 text-text-primary font-bold css-9vn808`}>$29 </span>
                <span className={`${inter.className} MuiTypography-body1 text-text-primary css-qaz3k7`}>/month;</span></>
        },
        {
            title: "Additional fee",
            atria: "No",
            foreplay: <>
                <span className={`${inter.className} MuiTypography-body2 text-text-primary font-medium css-x1l92z`}>+ $99/month to follow</span>
                <br />
                <span className={`${inter.className} MuiTypography-body1 text-text-primary css-qaz3k7`}>10 brands</span></>,
            magicBrief: "No"
        },
    ]
    return (
        <div id="difference" className="py-8 sm:py-10 md:py-12 lg:py-[60px] max-w-[1280px] relative mx-6 xl:mx-auto">
            <h3 className={`${inter.className} MuiTypography-h3 text-center text-text-primary font-bold css-3vas3`}>
                What makes Adscan different?</h3>
            <div className="py-[60px] space-y-[60px] feature-tables relative">
                <div className="max-w-full overflow-auto">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>
                                    <p className={`${inter.className} MuiTypography-body1 font-bold text-white css-qaz3k7`}>
                                        Adscan</p>
                                </th >
                                <th>
                                    <p className={`${inter.className} MuiTypography-body1 font-bold text-white css-qaz3k7`}>
                                        Foreplay</p>
                                </th>
                                <th>
                                    <p className={`${inter.className} MuiTypography-body1 font-bold text-white css-qaz3k7`}>
                                        MagicBrief</p>
                                </th >
                            </tr >
                        </thead >
                        <tbody>
                            {comparisonData.map((comparisonItem) => {
                                return (
                                    <tr>
                                        <td className='w-1/2'>
                                            <p className={`${inter.className} MuiTypography-body1 text-text-primary css-qaz3k7`}>
                                                {comparisonItem.title}</p>
                                        </td>
                                        <td className='w-1/6'>
                                            <p className={`${inter.className} MuiTypography-body1 text-text-primary css-qaz3k7`}>
                                                {comparisonItem.atria === true ? <Image src={checkIcon} /> : comparisonItem.atria}</p>
                                        </td>
                                        <td className='w-1/6'>
                                            <p className={`${inter.className} MuiTypography-body1 text-text-primary css-qaz3k7`}>
                                                {comparisonItem.foreplay === false ? <Image src={crossIcon} /> : comparisonItem.foreplay}</p>
                                        </td>
                                        <td className='w-1/6'>
                                            <p className={`${inter.className} MuiTypography-body1 text-text-primary css-qaz3k7`}>
                                                {comparisonItem.magicBrief === false ? <Image src={crossIcon} /> : comparisonItem.magicBrief}
                                            </p>
                                        </td>
                                    </tr >
                                )
                            })}
                        </tbody >
                    </table >
                </div >
            </div >
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
        </div >

    )
}

export default AdscanDifferent