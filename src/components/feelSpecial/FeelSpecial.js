import React from 'react'
import './feelSpecial.css'
import Button from '../common/button/Button'
export default function FeelSpecial() {
    return (
        <div className="feel-special photo-section">
            <div className="max-width">
                <div className="photo-section-child">
                    <div className="photo-section-top">
                        <div className="photo-section-heading" style={{marginBottom:'60px'}}>
                            MAIN FEATURES
                        </div>
                        {/* <div className="photo-section-subheading">
                            exclusive rewards for paying your bills
                        </div>
                    </div>

                    <div className="photo-section-bottom">
                        <div className="photo-section-description">
                            every time you pay your credit card bills on CRED, you receive CRED coins. you can use these to win exclusive rewards or get special access to curated products and experiences. on CRED, good begets good.
                        </div>
                        <Button buttonText="Explore rewards"/> */}

                        <div className="Features-List">AC Hall for all Indoor Stalls & Air Fan for All Outdoor Stalls (Price Difference)</div>
                        <div className="Features-List">2 Chairs & 1 front Table for all Exhibitors (Can Increase furniture on rent basis)</div>
                        <div className="Features-List">Venyl Printing of Firm / Organization Name at Head of Stall by Exhibitors.</div>
                        <div className="Features-List">Free 2 Time Tea / Coffee with Snacks for all Exhibitors (For 2 Persons).</div>
                        <div className="Features-List">Conference Stage & Chairs in front of stage for Meetings (LED Screen on Stage).</div>
                        <div className="Features-List">Paid Food Court for Exhibitor’s Staff & Visitors. (Tea / Coffee, Snacks & food)</div>
                        <div className="Features-List">Paid Hotels Booking Facilities for Senior Exhibitors & for Staff Separately.</div>
                        <div className="Features-List">Paid Photographer for Instant Photos Print & Video of Stall for your record.</div>
                        <div className="Features-List">Doctor on call available for any Medical emergency for staff or admin.</div>
                        <div className="Features-List">Paid Designing for Stall as Venyl Sticker Printing, Flex Printing, Standy Printing
facility on order can print & supply at Stall on very reasonable price.</div>
                        <div className="Features-List">Paid Photocopy Machine available for Print, Scan & Photocopy A4 & A3 in Venue.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
