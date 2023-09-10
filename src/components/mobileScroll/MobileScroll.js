import React from 'react'
import { useState } from 'react'
import './mobileScroll.css'
import ScreenText from './ScreenText'
import pharma from '../Images/Pharma.png'
import furniture from '../Images/Furniture.png'
import food from '../Images/Food.png'
import purifier from '../Images/Purifier.png'

export default function MobileScroll() {

    const [currentImage, setcurrentImage] = useState(0)

    const mobileScrollData=[
        {
            heading:"Exhibition On",
            description1:"Pharma",
            description2:"Drugs",
            description3:"Logistics",
            description4:"Exporters",
            mobile_img: pharma,
        },
        {
            heading:"",
            description1:"Machinery",
            description2:"Furniture",
            description3:"Engg. Tool",
            description4:"Room",
            mobile_img: furniture,
        },
        {
            heading:"",
            description1:"Printing",
            description2:"Plastic Moulding",
            description3:"Food",
            description4:"Corporate Gifts",
            mobile_img:food,
        },
        {
            heading:"",
            description1:"Safety Equipments",
            description2:"Air/Water Purifiers",
            description3:"Invertors",
            description4:"Batteries",
            mobile_img: purifier,
        }
    ];
  return (
    <div className="max-width flex mobile-scroll">
        <div className="scroll-fullscreen-wrapper">
            {mobileScrollData.map((screen,index)=>{
               return( <div className="scroll-fullscreen" key={index}>
                    <ScreenText screen={screen} i={index} setcurrentImage={setcurrentImage}/>
                </div>)
            })}
        </div>

        <div className="mobile-mockup-wrapper non-mobile">
            <div className="mobile-mockup">
                <div className="mobile-mockup-screen flex absolute-center">
                    <img src={mobileScrollData[currentImage].mobile_img} className="mobile-screen-image slide-in-right" key={mobileScrollData[currentImage].mobile_img} style={{width:'100%'}}/>
                </div>
            </div>
        </div>
    </div>
  )
}
