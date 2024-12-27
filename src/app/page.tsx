'use client'

import {useState} from 'react';
import Header from "@/app/Components/Header";
import Footer from '@/app/Components/Footer';
import Introduction from "@/app/Components/Introduction";
import Projects from "@/app/Components/Projects";

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
                <Projects/>
                <Footer/>
            </div>

        </>
    );
}
