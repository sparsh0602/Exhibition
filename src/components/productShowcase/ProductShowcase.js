import React, { useEffect, useRef, useState } from 'react'
import './productShowcase.css'
import food from '../Images/Food.png'
import furniture from '../Images/Furniture.png'
import pharma from '../Images/Pharma.png'
import tool from '../Images/Tool.png'
import purifier from '../Images/Purifier.png'
export default function ProductShowcase() {
    const ref=useRef(null);
    const [showAnimation,setshowAnimation]=useState(false);

    const toggleAnimation=(e)=>{
        if(e[0].isIntersecting)
        {
            setshowAnimation(true);
    }
}

    const options={
        root:null,
        rootMargins:"0px",
        threshold:0.5,
    };

    useEffect(()=>{
        const observer=new IntersectionObserver(toggleAnimation,options);

        if(!showAnimation){
            if(ref.current){
                observer.observe(ref.current);
            }
        }

        return () => {
            if(ref.current){
                observer.unobserve(ref.current);
            }
        };
    });

    return (
        <div className={`product-showcase ${showAnimation?'scale-in-bottom':''}`} ref={ref}>
         { showAnimation &&  <div className="showcase-wrapper">
                <img src={food} alt="product-image" className="showcase-ui showcase-mockup1" />
                <img src={furniture} alt="product-image" className="showcase-ui showcase-mockup2" />
                <img src={pharma} alt="product-image" className="showcase-ui showcase-mockup3" />
                <img src={tool} alt="product-image" className="showcase-ui showcase-mockup4" />
                <img src={purifier} alt="product-image" className="showcase-ui showcase-mockup5" />
            </div>}
        </div>
    )
}
