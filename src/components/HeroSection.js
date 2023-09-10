import React from 'react'
import Button from './common/button/Button'
import './heroSection.css'
export default function HeroSection() {
    return (
        <div className="hero-section-wrapper">

            <div className="flex absolute-center hero-label">
                <div>Intrduce Your Product & Services In This Exhibition</div>
                {/* <div className="claim-anchor">claim now <img src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png" alt="arrow-image" className="claim-arrow"/></div> */}
            </div>

            <div className="flex absolute-center flex-col max-width hero-section">
                <div className="hero-heading">MEGA EXIBITION</div>
                <div className="hero-subheading">28-29-30 October, 2023</div>
            <Button buttonText="Contact Us"/>
            </div>

        </div>
    )
}
