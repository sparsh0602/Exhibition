import React from 'react'
import './appRating.css'
import Button from '../common/button/Button'
export default function AppRating() {
    const getIosPrefix = () => {
        return <img src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png" className="app-rating-icon" />
    }
    const getAndroidPrefix = () => {
        return <img src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png" className="app-rating-icon" />
    }
    return (
        <div className="flex max-width app-rating">
            <div className="app-rating-container">
                <div className="app-rating-left">
                    <div className="app-rating-heading">Contact Us</div>
                </div>
                <div className="app-rating-right">
                    <div className="contact-details"><span className="spanUnderline">Tel.</span> : +91 9317527746</div>
                    <div className="contact-details"><span className="spanUnderline">Mail</span> : flyhiexhibitors@gmail.com</div>
                    <div className="contact-details"><span className="spanUnderline">Website </span>: www.flyhiexhibitors.in</div>
                    <div className="contact-details"><span className="spanUnderline">Fly-Hi Exhibitors Pvt. Ltd. </span><br/>205, Chinar A2 Block, Omaxe Parkwoods,
Homeland Mall Road, Baddi, Distt.Solan.
Himachal Pradesh, India.</div>
                </div>
            </div>
        </div>
    )
}
