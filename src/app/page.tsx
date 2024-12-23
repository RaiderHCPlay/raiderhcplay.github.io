'use client'

import {useState} from 'react';
import Header from "@/app/pages/Header";
import Footer from '@/app/pages/Footer';
import Introduction from "@/app/pages/Introduction";
import About from '@/app/pages/About';
import Projects from "@/app/pages/Projects";

export default function Page() {

    const [mobileOptions, setMobileOptions] = useState(false);
    const [optionsAnimation, setOptionsAnimation] = useState(false);

    const settingMobileOptions = () => {
        setMobileOptions(!mobileOptions);
    }

    return (
        <>
            <Header optionsAnimation={optionsAnimation} onAnimationStart={settingMobileOptions} onClick={() => {
                setOptionsAnimation(true)
            }} onAnimationEnd={() => setOptionsAnimation(false)} mobileOptions={mobileOptions}/>
            <div className="">
                <Introduction/>
                <About/>
                <Projects/>
                <Footer/>
            </div>

        </>
    );
}
