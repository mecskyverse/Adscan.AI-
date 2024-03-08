import React from 'react'
import adscanTeddy from '../../assets/Adscanteddy.svg'
import Image from 'next/image'
const StartWinning = () => {
    return (
        <div className="px-6 py-8 sm:py-16 md:py-24 lg:py-[120px] relative mx-6 lg:mx-auto max-w-[960px] rounded-[24px] flex flex-col [background:_radial-gradient(155.42%_168.04%_at_50%_0%,_rgba(28,_29,_35,_0.30)_0%,_rgba(255,_146,_92,_0.30)_100%)] border-solid  border-[1px] border-[#FFFFFF1F]  [box-shadow:_0px_4px_120px_-10px_rgba(255,_159,_117,_0.20);]">
            <div className="flex justify-center">
                <Image src={adscanTeddy} />
            </div>
            {/* <img alt="bell" loading="lazy" width="738" height="738" decoding="async" data-nimg="1" className="block mx-auto w-[96px] h-[96px] rounded-[24px] sm:w-[120px] sm:h-[120px] sm:rounded-[30px] mt-[6px]" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-large.abcddd32.png&amp;w=750&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-large.abcddd32.png&amp;w=1920&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-large.abcddd32.png&amp;w=1920&amp;q=75" style="color: transparent;"> */}
                <h3 className="MuiTypography-root MuiTypography-h3 text-center text-text-primary mt-5 css-3vas3">
                    Start winning with Atria</h3>
                <div className="my-6 sm:my-8 md:my-10 mx-auto flex flex-col justify-center items-center">
                    <a target="_blank" href="https://app.tryatria.com/signup">
                        <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium px-4 py-3 sm:px-6 sm:py-4 text-text-primary css-17ppob1" tabIndex="0" type="button">
                            Start 5-day free trial<span className="MuiTouchRipple-root css-w0pj6f">
                            </span>
                        </button>
                    </a>
                    <div className="MuiTypography-root MuiTypography-caption1 text-center text-text-tertiary font-semibold mt-3 css-11mm823">
                        No credit card required</div>
                </div>
        </div>

    )
}

export default StartWinning