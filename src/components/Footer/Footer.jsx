import React from 'react'
import { inter } from '@/utils/fonts'
const Footer = () => {
    return (
        <footer className="pt-[100px] pb-10 space-y-6">
            <div className="flex justify-center gap-6">
                <a target="_blank" className="text-[40px] text-text-tertiary" href="https://twitter.com/Adscan_ai">
                    <svg width="1em" height="1em" viewBox="0 0 40 40" fill="currentColor">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.4977 35H31.5026C33.4344 35 35.0003 33.4341 35 31.502V8.49766C35 6.56589 33.4341 5 31.5023 5H8.4977C6.56591 5 5 6.56589 5 8.49766V31.5023C5 33.4341 6.56591 35 8.4977 35ZM18.1141 20.8551L10.0508 10.0005H16.2654L21.5515 17.1163L28.0938 10.0005H29.9201L22.3674 18.2151L30.8846 29.6801H24.67L18.9304 21.9535L11.8263 29.6801H10L18.1141 20.8551ZM15.5914 11.3551H12.7365L25.3436 28.3259H28.1986L15.5914 11.3551Z">
                        </path>
                    </svg>
                </a>
                <a target="_blank" className="text-[40px] text-text-tertiary" href="https://www.linkedin.com/company/tryatria/">
                    <svg width="1em" height="1em" viewBox="0 0 40 40" fill="currentColor">
                        <path d="M30.5583 30.565H26.1167V23.6033C26.1167 21.9433 26.0833 19.8067 23.8 19.8067C21.485 19.8067 21.1317 21.6133 21.1317 23.4817V30.565H16.6883V16.25H20.955V18.2H21.0133C21.61 17.0767 23.06 15.8883 25.2267 15.8883C29.7267 15.8883 30.56 18.8517 30.56 22.7067V30.565H30.5583ZM11.6717 14.2917C11.3326 14.2921 10.9968 14.2256 10.6834 14.096C10.3701 13.9664 10.0854 13.7762 9.84576 13.5364C9.60608 13.2966 9.41609 13.0118 9.28668 12.6984C9.15728 12.3849 9.09101 12.0491 9.09167 11.71C9.092 11.1997 9.24363 10.701 9.5274 10.2769C9.81117 9.85281 10.2143 9.52239 10.6859 9.32742C11.1574 9.13245 11.6762 9.08169 12.1766 9.18157C12.677 9.28144 13.1366 9.52746 13.4972 9.88851C13.8578 10.2496 14.1032 10.7094 14.2024 11.21C14.3016 11.7105 14.2502 12.2292 14.0546 12.7005C13.8591 13.1718 13.5281 13.5746 13.1037 13.8578C12.6792 14.141 12.1803 14.292 11.67 14.2917H11.6717ZM13.8983 30.565H9.44333V16.25H13.9V30.565H13.8983ZM32.7833 5H7.215C5.98833 5 5 5.96667 5 7.16167V32.8383C5 34.0333 5.99 35 7.21333 35H32.7767C34 35 35 34.0333 35 32.8383V7.16167C35 5.96667 34 5 32.7767 5H32.7817H32.7833Z">
                        </path>
                    </svg>
                </a>
            </div>
            <p className={`${inter.className} text-text-tertiary text-center css-x1l92z`}>
                © 2024 Adscan AI Made to help you improve your marketing.</p>
        </footer>

    )
}

export default Footer