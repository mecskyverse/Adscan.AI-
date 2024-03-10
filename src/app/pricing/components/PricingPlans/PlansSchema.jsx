import React from 'react'
import { inter } from '@/utils/fonts'
import rightClick from '@/assets/rightClick.svg'
import fireIcon from '@/assets/fire.svg'
import Image from 'next/image'
const PlansSchema = ({ planDetail, isAnnualPlan }) => {

    return (
        <div className="rounded-xl sm:rounded-2xl md:rounded-3xl p-6 pb-4 sm:p-8 sm:pb-6 md:p-10 md:pb-8 bg-background-secondary border border-solid border-outline-default w-full md:max-w-[600px] lg:max-w-[468px] mx-auto">
            <div className="flex items-center justify-between">
                <h5 className={`${inter.className} text-white font-bold css-9vn808`}>
                    {planDetail.planType}</h5>
                {planDetail.planType.includes("Pro Plan") ? <div className="rounded-full bg-white pl-3 pr-4 h-9 flex gap-1 items-center">
                    <span role="img" aria-label="fire" className="anticon anticon-fire">
                        <Image src={fireIcon} />
                    </span>
                    <p className={`${inter.className} font-semibold bg-white text-black `}>Popular</p>
                </div> : null}
            </div>
            <div className="my-6 space-y-2">
                <div className="flex items-baseline gap-1 ">
                    <h3 className={`${inter.className} MuiTypography-h3 font-bold text-white css-3vas3`}>
                        {planDetail.planType.includes("Enterprise") ? null : "$"}
                        {isAnnualPlan ? planDetail.yearlyCostPerMonth : planDetail.monthlyCost}</h3>
                    {isAnnualPlan ? <p className={`${inter.className} MuiTypography-subheadline text-text-tertiary line-through font-medium css-18ji250`}>
                        ${planDetail.monthlyCost}</p> : null}
                    {planDetail.planType.includes("Enterprise") ? null : <p className={`${inter.className} MuiTypography-subheadline font-medium text-white css-18ji250`}>
                        /month</p>}
                </div>
                <div className="flex gap-2 items-baseline">
                    <p className={`${inter.className} text-text-secondary font-medium css-qaz3k7`}>
                        Billed {isAnnualPlan ? "annually" : "monthly"}</p>
                    {isAnnualPlan ? <p className={`${inter.className} text-[#23BA4E] font-medium css-qaz3k7`}>
                        (Save {planDetail.savingIfYearly})</p> : null}
                </div>
                <div>
                    {planDetail.planType.includes("Enterprise") ? null : <span className={`${inter.className} MuiTypography-caption1  text-text-primary font-bold css-11mm823`}>
                        {planDetail.seats} seat included, </span>}
                    <span className={`${inter.className} MuiTypography-caption1 text-text-secondary css-11mm823`}>
                        $20 / additional seat / month</span>
                </div >
            </div >
            <div className="pt-2 pb-8 space-y-3">
                <a target="_blank" href="https://adscan.ai/onboarding?from=/onboarding2">
                    <div className={`${inter.className} mt-10 gap-4 text-center flex flex-col sm:flex-row justify-center items-center`}>
                        {planDetail.planType.includes("Enterprise") ? <button className="text-white bg-[#212334e5] rounded-xl font-semibold hover:bg-[#3f3f46] transition duration-300 ease-in-out px-16 py-2 sm:px-32 sm:py-4 min-w-[64px] text-sm md:text-base border-outline-default border" tabIndex="0" type="button">Contact Us
                        </button> : <button className="text-white bg-[#F66C30] rounded-xl font-semibold hover:bg-[#b04e24] transition duration-300 ease-in-out px-8 py-2 sm:px-24 sm:py-4 min-w-[64px] text-sm md:text-base" tabIndex="0" type="button">Start 5-day free trial
                        </button>}
                    </div>
                </a>
                <div className={`${inter.className} text-text-tertiary font-bold text-sm text-center text-[#909094] `}>
                    No credit card required</div>
            </div>
            <div className="space-y-2">
                <div className={`${inter.className} font-bold mb-3 text-white css-qaz3k7`}>
                    Everything in Basic, and:</div>
                {
                    planDetail.features.map((feature) => {
                        return (
                            <div className="flex items-start gap-2">
                                <div className="text-[#23BA4E] text-[20px] flex-none">
                                    <span role="img" aria-label="check" className="anticon anticon-check">
                                        <Image src={rightClick} />
                                    </span>
                                </div>
                                <p className={`${inter.className} MuiTypography-body2 text-text-secondary css-x1l92z`}>
                                    {feature}</p>
                            </div >
                        )
                    })
                }

            </div >
        </div >

    )
}

export default PlansSchema