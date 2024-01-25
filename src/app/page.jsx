"use client";
import { useState, useRef } from "react";
import Hero from "@/components/homepage/Hero";
import Category from "@/components/homepage/Category";
import Heromobile from "@/components/homepage/Heromobile";
import Category2 from "@/components/homepage/Category2";
import Category3 from "@/components/homepage/Category3";
import Category4 from "@/components/homepage/Category4";
import Seotext from "@/components/homepage/Seotext";
import FooterBanner from "@/components/homepage/FooterBanner";
import Seocontent from "@/components/homepage/Seocontent";
import Quicklinks from "@/components/homepage/Quicklinks";
  
const Page=()=>{
     const HeroSliderRef = useRef(null);
     const [scrollLeft, setScrollLeft] = useState(0);
     function HeroRightArrow(){
      if(HeroSliderRef.current){
        const newScrollLeft = scrollLeft + 1500;
        HeroSliderRef.current.scrollLeft = newScrollLeft;
        setScrollLeft(newScrollLeft);
      }
     }
     function HeroLeftArrow(){
      if(HeroSliderRef.current){
        const newScrollLeft = scrollLeft - 1500;
        HeroSliderRef.current.scrollLeft = newScrollLeft;
        setScrollLeft(newScrollLeft);
      }
     }

  return(
    <>
<Hero slider={HeroSliderRef} rightArrowClick={HeroRightArrow} leftArrowClick={HeroLeftArrow}/>
<Category/>
<Heromobile />
<Seotext/>
<Category2/>
<Category3/>
<Category4/>
<FooterBanner/>
<Seocontent/>
<Quicklinks/>
    </>
  )
}
export default Page;