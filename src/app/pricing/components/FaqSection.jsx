"use client"
import React, { useState } from 'react'
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ["latin"] });

const FaqSection = () => {
    const [faqAnswerToShow, setFaqAnswerToShow] = useState(null);
    const FaqData = [
        {
            question: "What are the main differences between the Basic Plan and the Pro Plan?",
            answer: "Our Basic Plan is designed for users with moderate needs for our AI features, while the Pro Plan caters more to teams requiring more AI feature limits for high-volume ad campaigns. Basic plan includes 1 user, and Pro Plan includes 3 users."
        },
        {
            question: "Can I try out all features during Free Trial?",
            answer: "Yes. All features are available during the trial period. Go down the rabbit hole!"
        },
        {
            question: "Is it possible to cancel my subscription?",
            answer: "Yes, you can cancel your subscription at any time. Access to plan features will continue until the end of your current billing cycle."
        },
        {
            question: " Can I upgrade or downgrade my plan at any time?",
            answer: " You can upgrade your plan at anytime. Currently, we don't support downgrading temporarily, but you can cancel your plan and choose a new plan when the current plan expires."
        },
        {
            question: "Can I change the billing cycle?",
            answer: "Currently, we don't support changing the billing cycle temporarily. However, you can cancel your plan and choose a new plan when the current plan expires."
        },
        {
            question: "Are there any additional fees apart from the subscription cost?",
            answer: "No, there are no hidden fees. The price stated for each plan includes all features listed under that plan."
        },
        {
            question: "What if I use up all the feature limits in the Pro Plan?",
            answer: "Thank you for actively using our platform! If you reach your Pro Plan limits, we'll notify you. You can continue with the current limits until the next billing cycle, or contact ray@tryatria.com for custom solutions to meet your extensive needs."
        },
        {
            question: "What forms of payment do you accept?",
            answer: "We accept all major credit cards."
        },
        {
            question: "Can I import ads saved on other platforms?",
            answer: " Yes, we import all your boards for you in the exact state, free of charge. The process is almost effortless. Email ray@tryatria.com with the title Import board and he will share the instructions with you. "
        }, {
            question: " Can I add members to a workspace during subscription?",
            answer: "Yes, you can add people to your workspace at any time during the subscription. You'll be charged a prorated fee at the beginning of the next billing cycle."
        }, {
            question: "Have another question?",
            answer: " We're here to help - just email us at ray@tryatria.com. This will go directly to our founder / CEO who will be happy to assist you."
        }
    ]
    const handleFaqClick = (index) => {
        if (faqAnswerToShow === index) {
            setFaqAnswerToShow(null)
        }
        else {
            setFaqAnswerToShow(index)
        }
    }
    return (
        <div className="py-8 sm:py-10 md:py-12 lg:py-[60px] mx-6 lg:mx-auto">
            <h3 className={`${inter.className} text-center text-text-primary font-bold css-3vas3`}>
                FAQ</h3>
            <div className="mx-auto max-w-[800px] mt-4">
                {FaqData.map((currentFaq, index) => {
                    return (
                        <div className="py-6" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.12)" }}>
                            <div className="cursor-pointer">
                                <div className="flex items-center justify-between gap-2">
                                    <p className={`${inter.className} font-medium text-white css-qaz3k7`}>
                                        {currentFaq.question}
                                    </p>
                                    <div onClick={() => handleFaqClick(index)} className="transition-all duration-300 transform text-white text-[16px]">
                                        <span role="img" aria-label="down" className={`anticon ${faqAnswerToShow === index ? 'rotate-180' : ''}`}>
                                            <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z">
                                                </path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <p className={`${inter.className} transition-all duration-300 text-text-secondary  ${faqAnswerToShow === index ? "opacity-100 max-h-max" : "opacity-0 max-h-0"} css-x1l92z`}>
                                        {currentFaq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >

    )
}

export default FaqSection