import React from 'react'
import Image from 'next/image'
import { inter } from '@/utils/fonts';
import powerdIcon from '../../assets/SaveAds__Icon1.svg'
const SaveAdsFromMeta = () => {
    return (
        <>

            <div className=" py-8 sm:py-16 md:py-24 lg:py-[120px] max-w-[1280px] relative mx-6 xl:mx-auto">
                <h3 className={`${inter.className} text-center text-text-primary font-bold css-3vas3`}>
                    Create <span className={`${inter.className} text-primary`}>
                        scripts</span> in minutes</h3><h6 className={`${inter.className} text-text-secondary text-center mt-4 font-medium css-80xpf1`}>
                    Go from idea to final script using AI</h6>
                <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 relative">
                    <Image alt="Create scripts in minutes" loading="lazy" width="2560" height="944" decoding="async" data-nimg="1" className="w-full h-auto block" src='/images/saveAds/saveads.png' />
                    <div className="absolute z-[2] right-6 bottom-6 rounded-lg backdrop-blur">
                        {/* <Image src={powerdIcon} /> */}
                    </div>
                </div>
            </div>
            <div className="py-8 sm:py-16 md:py-24 lg:py-[120px] max-w-[1280px] relative mx-6 xl:mx-auto">
                <h3 className={`${inter.className}  text-center text-text-primary css-3vas3`}>
                    Save ads from Meta and TikTok, <span className={`${inter.className} text-primary`}>forever</span>
                </h3>
                <h6 className={`${inter.className} text-text-secondary text-center mt-4 font-medium css-80xpf1`}>Even if the brand stops running them, your saved ads will be kept forever.</h6>
                <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="rounded-xl sm:rounded-2xl md:rounded-3xl border-solid border border-outline-default bg-background-secondary grid grid-cols-1 lg:grid-cols-2 gap-0 sm:gap-4 md:gap-6 overflow-hidden">
                        <div className="px-6 pt-4 pb-0 sm:px-8 sm:pt-6 md:px-10 md:pt-8 lg:p-10 lg:pr-0 space-y-1">
                            <h6 className={`${inter.className} text-left text-text-primary font-bold css-80xpf1`}>
                                Save from Atria library</h6>
                            <p className={`${inter.className} text-left text-text-secondary css-x1l92z`}>
                                Save any ads to your own collection in one click</p>
                        </div>
                        <div className="relative pb-[73.6%] mx-auto w-[75%] lg:pb-[98.125%] lg:w-full">
                            <Image alt="Save from Atria library" loading="lazy" decoding="async" width="628" height="640" data-nimg="fill" className="object-cover w-full h-full absolute inset-0" sizes="100vw" src="/images/saveAds/save-1.png" />
                        </div>
                    </div>
                    <div className="rounded-xl sm:rounded-2xl md:rounded-3xl border-solid border border-outline-default bg-background-secondary grid grid-cols-1 lg:grid-cols-2 gap-0 sm:gap-4 md:gap-6">
                        <div className="px-6 pt-4 pb-0 sm:px-8 sm:pt-6 md:px-10 md:pt-8 lg:p-10 lg:pr-0">
                            <div className="space-y-1">
                                <h6 className={`${inter.className} text-left text-text-primary font-bold css-80xpf1`}>
                                    Save from our Chrome extension</h6>
                                <p className={`${inter.className} text-left text-text-secondary css-x1l92z`}>
                                    Even inactive ads are kept forever</p>
                            </div>
                            <a target="_blank" href="https://chromewebstore.google.com/u/3/detail/save-facebook-tiktok-ads/infjhonlkjogibobndibmeneioojcffl">
                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium mt-6 css-17ppob1" tabIndex="0" type="button">
                                    <p className={`${inter.className} text-left text-text-primary css-qaz3k7`}>
                                        Get Chrome Extension</p>
                                    <span className="MuiTouchRipple-root css-w0pj6f">
                                    </span>
                                </button>
                            </a>
                        </div>
                        <div className="relative pb-[73.6%] mx-auto w-[75%] lg:pb-[98.125%] lg:w-full">
                            <Image alt="Save from our Chrome extension" loading="lazy" decoding="async" data-nimg="fill" className="object-contain absolute h-full w-full inset-0 " sizes="100vw" width="628" height="640" src="/images/saveAds/save-2.png" />
                        </div>
                    </div>
                    <div className="rounded-xl sm:rounded-2xl md:rounded-3xl border-solid border border-outline-default bg-background-secondary grid grid-cols-1 lg:grid-cols-2 gap-0 sm:gap-4 md:gap-6">
                        <div className="px-6 pt-4 pb-0 sm:px-8 sm:pt-6 md:px-10 md:pt-8 lg:p-10 lg:pr-0 space-y-1">
                            <h6 className={`${inter.className} text-left text-text-primary font-bold css-80xpf1`}>
                                Organize ads on multi-level boards</h6>
                            <p className={`${inter.className} text-left text-text-secondary css-x1l92z`}>
                                Suffer from single-level boards? This is the cure!</p>
                        </div>
                        <div className="relative pb-[73.6%] mx-auto w-[75%] lg:pb-[98.125%] lg:w-full">
                            <Image alt="Organize ads on multi-level boards" loading="lazy" decoding="async" data-nimg="fill" className="object-contain  absolute h-full w-full inset-0" sizes="100vw" width="628" height="640" src="/images/saveAds/save-3.png" />
                        </div>
                    </div>
                    <div className="rounded-xl sm:rounded-2xl md:rounded-3xl border-solid border border-outline-default bg-background-secondary grid grid-cols-1 lg:grid-cols-2 gap-0 sm:gap-4 md:gap-6">
                        <div className="px-6 pt-4 pb-0 sm:px-8 sm:pt-6 md:px-10 md:pt-8 lg:p-10 lg:pr-0 space-y-1">
                            <h6 className={`${inter.className} text-left text-text-primary font-bold css-80xpf1`}>
                                Personalize tags</h6>
                            <p className={`${inter.className} text-left text-text-secondary css-x1l92z`}>
                                Use tags to make your saved ads more retrievable.</p>
                        </div>
                        <div className="relative pb-[73.6%] mx-auto w-[75%] lg:pb-[98.125%] lg:w-full">
                            <Image alt="Personalize tags" loading="lazy" decoding="async" data-nimg="fill" className="object-contain  absolute h-full w-full inset-0" sizes="100vw" width="628" height="640" src="/images/saveAds/save-4.png" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SaveAdsFromMeta