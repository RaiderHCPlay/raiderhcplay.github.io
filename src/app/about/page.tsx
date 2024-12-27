'use client'

import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";
import About from "@/app/Components/About";
import {useState} from "react";

export default function AboutPage() {

    const [mobileOptions, setMobileOptions] = useState(false);
    const [optionsAnimation, setOptionsAnimation] = useState(false);

    const settingMobileOptions = () => {
        setMobileOptions(!mobileOptions);
    }

    return (
        <>
            <Header optionsAnimation={optionsAnimation} onAnimationStart={settingMobileOptions} onClick={() => {
                setOptionsAnimation(true)
            }} onAnimationEnd={() => setOptionsAnimation(false)} mobileOptions={mobileOptions} />
            <About />
            <Footer />
        </>
    )
}