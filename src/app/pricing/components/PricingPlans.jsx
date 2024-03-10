"use client"
import React, { useState } from 'react'
import PlansSchema from './PricingPlans/PlansSchema'
import { inter } from '@/utils/fonts';
import { Segmented, ConfigProvider } from 'antd';
const PricingPlans = () => {

    const [isAnnualPlan, setIsAnnualPlan] = useState(true);
    const pricingPlanDetails = [
        {
            planType: "Basic Plan",
            monthlyCost: 39,
            yearlyCostPerMonth: 31,
            savingIfYearly: 96,
            seats: 1,
            featureTagline: "Everything in Basic, and:",
            features: ["Discover 5+ million winning ads",
                "Save unlimited ads from Atria library",
                "Save ads with Chrome extension",
                "Organize saved ads with multi-level boards",
                "Extract video scripts: 200 requests / month",
                "Follow up to 20 brands",
                "AI customer review mining: 10 reports / month",
                "AI ad ideas and scripts: 100 requests / month",
                "AI voice-over"],
        },
        {
            planType: "Pro Plan",
            monthlyCost: 89,
            yearlyCostPerMonth: 72,
            savingIfYearly: 204,
            seats: 3,
            featureTagline: "Everything in Basic, and:",
            features: [
                "Extract video scripts: 1000 requests / month",
                "Follow up to 100 brands",
                "AI customer review mining: 50 reports / month",
                "AI ad ideas and scripts: 1000 requests / month",
                "Priority support"
            ],
        },
        {
            planType: "Enterprise",
            monthlyCost: "Custom",
            yearlyCostPerMonth: null,
            savingIfYearly: null,
            seats: null,
            featureTagline: "Everything in Pro, and:",
            features: [
                <>Extract video scripts: <span className={`${inter.className} font-semibold text-white`}>Custom limit</span></>,
                <>Follow brands: <span className={`${inter.className} font-semibold text-white`}>Custom limit</span></>,
                <>AI customer review mining: <span className={`${inter.className} font-semibold text-white`}>Custom limit</span></>,
                <>AI ad ideas and scripts: <span className={`${inter.className} font-semibold text-white`}>Custom limit</span></>,
                <><span className={`${inter.className} font-semibold text-white`}>Single sign-on</span> (SSO)</>,
                <span className={`${inter.className} font-semibold text-white`}>Enterprise-grade security and compliance</span>,
                <>Access <span className={`${inter.className} font-semibold text-white`}>premium 24/7 support</span> and <span className={`${inter.className} font-semibold text-white`}>guaranteed SLAs</span></>
            ],
        }
    ]

    const handlePlanChange = (value) => {
        setIsAnnualPlan(!isAnnualPlan)
    }
    return (
        <>
            <div className="flex justify-center my-10">
                <Segmented onChange={handlePlanChange} defaultValue={'yearly'} options={[{
                    label: (
                        <span className='inline-flex items-center'>
                            <p className={`${inter.className} font-medium`}><span className={`${inter.className} hidden sm:inline text-xl`}>Pay monthly</span><span className={`${inter.className} sm:hidden`}>Yearly</span></p>
                        </span>
                    ),
                    value: "monthly"
                }, {
                    label: (
                        <span className="inline-flex items-center gap-2 px-[5px]">
                            <p className={`${inter.className} font-medium css-x1l92z`}><span className={`${inter.className} hidden sm:inline text-xl`}>Pay yearly</span><span className="sm:hidden">Yearly</span></p>
                            <span className="inline-flex gap-1 items-center rounded-full text-[16px] py-[2px] pl-2 pr-3 transition-all duration-300 !text-[#F66C30] bg-white"><span className={`${inter.className} font-medium css-11mm823`}>Save 20%</span></span></span >
                    ),
                    value: "yearly"
                }]} size='large' />
            </div >
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 justify-center md:grid-cols-1 lg:grid-cols-[360px,360px,360px] xl:grid-cols-[440px,440px,440px] pb-8 sm:pb-10 md:pb-12 lg:pb-[60px] mx-6 lg:mx-auto">
                {pricingPlanDetails.map((planDetail) => {
                    return (
                        <PlansSchema planDetail={planDetail} isAnnualPlan={isAnnualPlan} />
                    )
                })}
            </div>
        </>

    )
}

export default PricingPlans