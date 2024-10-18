'use client'

import {useState} from 'react';
import Header from "@/app/Header";
import Footer from '@/app/Footer';
import Introduction from "@/app/Introduction";
import About from '@/app/About';
import Projects from "@/app/Projects";

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
            <div className="bg-gradient-to-b from-react to-purple-400">
                <Introduction/>
                <About/>
                <Footer/>
                <Projects/>
            </div>

        </>
    );
}
