import React from 'react'
import Image from 'next/image'
import { inter } from '@/utils/fonts';
import Icon1 from '../../assets/Research__icon1.svg'
import Icon2 from '../../assets/Research__icon2.svg'
import Icon3 from '../../assets/Research__icon3.svg'
import Icon4 from '../../assets/Research__icon4.svg'


const Research = () => {
    return (
        <div className="py-8 sm:py-16 md:py-24 lg:py-[120px] max-w-[1280px] relative mx-6 xl:mx-auto">
            <h3 className={`${inter.className} text-center text-text-primary css-3vas3`}>Research &amp; analysis <span className={`${inter.className} text-primary`}>in one place</span>
            </h3>
            <div className="rounded-[16px] overflow-hidden mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 border-solid border border-outline-default pt-8 sm:pt-10 md:pt-12 bg-background-secondary"><div className="px-6">
                <h4 className={`${inter.className} text-center text-text-primary font-bold css-hqh809`}>
                    <span className={`${inter.className} text-primary `}>Customer review mining</span> is a lot faster</h4>
                <div className="flex flex-col items-center justify-center gap-4 mt-6">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-center">
                        <div className="flex justify-center items-center gap-2">
                            <div className="text-[20px] text-primary h-[20px]">
                                <Image priority src={Icon1} />

                            </div>
                            <p className={` ${inter.className} text-center text-text-primary css-x1l92z`}>Analyze multiple sheets in one session</p>
                        </div>
                        <div className="flex justify-center items-center gap-2"><div className="text-[20px] text-primary h-[20px]">
                            <Image priority src={Icon2} />
                        </div>
                            <p className={` ${inter.className} text-center text-text-primary css-x1l92z`}>Actionable suggestions</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-center">
                        <div className="flex justify-center items-center gap-2">
                            <div className="text-[20px] text-primary h-[20px]">
                                <Image priority src={Icon3} />

                            </div>
                            <p className={` ${inter.className} text-center text-text-primary css-x1l92z`}>Summarize by top keywords</p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <div className="text-[20px] text-primary h-[20px]">
                                <Image priority src={Icon4} />
                            </div>
                            <p className={` ${inter.className} text-center text-text-primary css-x1l92z`}>Zoom into relevant reviews</p>
                        </div>
                    </div>
                </div>
            </div>
                <div className="p-10 pb-0">
                    <div className="rounded-t-3xl overflow-hidden shadow-[0px_4px_80px_-9px_rgba(246,_108,_48,_0.20)]">
                        <Image alt="Customer review mining is a lot faster" loading="lazy" width="2400" height="984" decoding="async" data-nimg="1" className="h-auto w-full block" src="/images/Research/review-mining.png" />
                    </div>
                </div>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border-solid border border-[#e0e1ea1a] bg-background-secondary"><div className="p-6 pb-4 sm:p-8 sm:pb-6 md:p-10 md:pb-8 space-y-1 ">
                    <h6 className={` ${inter.className} text-left text-text-primary font-bold css-80xpf1`}>Video transcripts extraction</h6>
                    <p className={` ${inter.className} text-left text-text-secondary css-x1l92z`}>Extract your favorite video scripts in one click.</p>
                </div>
                    <div className="px-10">
                        <Image alt="Video transcripts extraction" loading="lazy" width="1096" height="664" decoding="async" data-nimg="1" className="w-full h-auto block" src="/images/Research/research-following.png" />
                    </div>
                </div>
                <div className="rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border-solid border border-[#e0e1ea1a] bg-background-secondary">
                    <div className="p-6 pb-4 sm:p-8 sm:pb-6 md:p-10 md:pb-8 space-y-1 ">
                        <h6 className={` ${inter.className} text-left text-text-primary font-bold css-80xpf1`}>Track competitor's ads</h6>
                        <p className={` ${inter.className} text-left text-text-secondary css-x1l92z`}>Receive real-time updates on your competitor's latest ads.</p>
                    </div>
                    <div className="px-10">
                        <Image alt="Track competitor's ads" loading="lazy" width="1096" height="664" decoding="async" data-nimg="1" className="w-full h-auto block" src="/images/Research/research-script.png" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Research