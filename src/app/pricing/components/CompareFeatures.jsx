"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import rightClick from '@/assets/rightClick.svg'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ["latin"] });

const CompareFeatures = () => {
    const [showMore, setShowMore] = useState(false);
    const compareFeatures = [
        {
            featureTitle: "Ad Inspiration",
            featuresList: [
                {
                    featureName: "Growing library of 5 million ads",
                    BasicPlan: true,
                    ProPlan: true,
                },
                {
                    featureName: "AI-powered search",
                    BasicPlan: true,
                    ProPlan: true,
                },
                {
                    featureName: "Filter by ad angles/themes, formats, industries, languages and more",
                    BasicPlan: true,
                    ProPlan: true,
                },
                {
                    featureName: "Sort by longest running ads",
                    BasicPlan: true,
                    ProPlan: true,
                },
                {
                    featureName: "View active / inactive ad status",
                    BasicPlan: true,
                    ProPlan: true,
                },
                {
                    featureName: "Follow brands, stay updated on their latest ads",
                    BasicPlan: "20 brands",
                    ProPlan: "100 brands",
                },
            ]
        },
        {
            featureTitle: "AI analysis & Ideation",
            featuresList: [
                {
                    featureName: "Extract video scripts in seconds",
                    BasicPlan: "200 requests / month",
                    ProPlan: "1000 requests / month",
                },
                {
                    featureName: "Analyze customer testimonials using AI",
                    BasicPlan: "10 reports / month",
                    ProPlan: "50 reports / month",
                },
                {
                    featureName: "Extract popular keywords and sentiment analysis on customer testimonials",
                    BasicPlan: true,
                    ProPlan: true,
                },
                {
                    featureName: "Suggest features/benefits, motivations/expectations, use case, and relevant ad concepts/angles from customer review mining",
                    BasicPlan: true,
                    ProPlan: true,
                },
                {
                    featureName: "Generate winning video ad ideas and script variants using AI",
                    BasicPlan: "100 requests / month",
                    ProPlan: "1000 requests / month",
                },
                {
                    featureName: "Generate voice-over using Al",
                    BasicPlan: true,
                    ProPlan: true,
                },

            ]
        },
        {
            featureTitle: "Save & Organize",
            featuresList: [
                {
                    featureName: "Save ads from Atria library",
                    BasicPlan: true,
                    ProPlan: true,
                },
                {
                    featureName: "Saves ads on Facebook ad library with our Chrome extension",
                    BasicPlan: true,
                    ProPlan: true,
                },
                {
                    featureName: "Save ads on TikTok ad library, TikTok organics and TikTok Creative Center with our Chrome extension",
                    BasicPlan: true,
                    ProPlan: true,
                },
                {
                    featureName: "Sort by longest running ads",
                    BasicPlan: true,
                    ProPlan: true,
                },
                {
                    featureName: "Organize saved ads with multi-level boards",
                    BasicPlan: true,
                    ProPlan: true,
                },
                {
                    featureName: "Add customized tags to saved ads",
                    BasicPlan: true,
                    ProPlan: true,
                },
                {
                    featureName: "Share public links with guest access",
                    BasicPlan: true,
                    ProPlan: true,
                },
            ]
        }

    ]

    return (
        <div className="py-8 sm:py-10 md:py-12 lg:py-[60px] max-w-[960px] relative mx-6 lg:mx-auto">
            <h3 className={`${inter.className} text-center text-text-primary font-bold css-3vas3`}>
                Compare features</h3>
            <div className={`space-y-[60px] feature-tables relative  ${showMore ? '' : "max-h-[460px] overflow-hidden"}  pt-[60px]`}>
                {compareFeatures.map((feature) => {
                    return (
                        <div className='max-w-full'>
                            <table className='w-full overflow-auto'>
                                <thead className='text-left'>
                                    <tr>
                                        <th>
                                            <p className={`${inter.className} MuiTypography-body1 font-bold text-white css-qaz3k7 `}>
                                                {feature.featureTitle}</p>
                                        </th>
                                        <th>
                                            <p className={`${inter.className} MuiTypography-body1 font-bold text-white css-qaz3k7`}>
                                                Basic Plan</p>
                                        </th>
                                        <th>
                                            <p className={`${inter.className} MuiTypography-body1 font-bold text-white css-qaz3k7 `}>
                                                Pro Plan</p>
                                        </th>
                                    </tr>
                                </thead >
                                <tbody>
                                    {
                                        feature.featuresList.map((smallFeature) => {
                                            return (
                                                <tr>
                                                    <td className=' w-3/5'>
                                                        <p className={`${inter.className} MuiTypography-body2 text-text-secondary css-x1l92z`}>
                                                            {smallFeature.featureName}</p>
                                                    </td>
                                                    <td className=' w-1/5'>
                                                        <div className="text-[20px] text-[#23BA4E]">
                                                            {smallFeature.BasicPlan === true ? <span role="img" aria-label="check" className="anticon anticon-check">
                                                                <svg viewBox="64 64 896 896" focusable="false" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                                    <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z">
                                                                    </path>
                                                                </svg>
                                                            </span> : <p className={`${inter.className} MuiTypography-body2 text-text-secondary css-x1l92z`}>
                                                                {smallFeature.BasicPlan}</p>}
                                                        </div>
                                                    </td>
                                                    <td className=' w-1/5'>
                                                        <div className="text-[20px] text-[#23BA4E]">
                                                            {smallFeature.BasicPlan === true ? <span role="img" aria-label="check" className="anticon anticon-check">
                                                                <svg viewBox="64 64 896 896" focusable="false" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                                    <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z">
                                                                    </path>
                                                                </svg>
                                                            </span> :
                                                                <p className={`${inter.className} MuiTypography-body2 text-text-secondary css-x1l92z`}>
                                                                    {smallFeature.BasicPlan}</p>}
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                })}
                {
                    !showMore ? <div className="absolute bottom-0 left-0 right-0 h-[160px] [background:linear-gradient(180deg,transparent,black)]">
                        <button onClick={() => setShowMore(!showMore)} className="py-2 pl-4 pr-3 border border-solid border-white rounded-xl bg-black sm:py-3 sm:pl-6 sm:pr-5 flex items-center gap-1 cursor-pointer hover:bg-[#222] transition absolute bottom-6 left-1/2 [transform:translateX(-50%)]">
                            <p className={`${inter.className} MuiTypography-subheadline text-white font-medium css-18ji250`}>
                                Show more </p>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.001 17.5623L22.601 10.9623L24.4863 12.8476L16.001 21.3329L7.51562 12.8476L9.40096 10.9623L16.001 17.5623Z" fill="white">
                                </path>
                            </svg>
                        </button>
                    </div> :
                        <button onClick={() => setShowMore(!showMore)} className="py-2 pl-4 pr-3 border border-solid border-white rounded-xl bg-black sm:py-3 sm:pl-6 sm:pr-5 flex items-center gap-1 cursor-pointer hover:bg-[#222] transition absolute -bottom-10 left-1/2 [transform:translateX(-50%)]">
                            <p className={`${inter.className} MuiTypography-subheadline text-white font-medium css-18ji250`}>
                                Show Less </p>
                            <svg className='rotate-180' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.001 17.5623L22.601 10.9623L24.4863 12.8476L16.001 21.3329L7.51562 12.8476L9.40096 10.9623L16.001 17.5623Z" fill="white">
                                </path>
                            </svg>
                        </button>
                }
            </div>
        </div >
    )
}

export default CompareFeatures