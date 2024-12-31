'use client'
import Image from "next/image";
import {useState} from "react";

export default function Header() {
    const [mobileOptions, setMobileOptions] = useState(false);
    const [optionsAnimation, setOptionsAnimation] = useState(false);
    const [spinning, setSpinning] = useState(false);

    return <header className={"bg-[#11111b] w-full h-[35px] md:h-[65px] flex items-center justify-center animate-fade-down animate-delay-200 animate-duration-1500"}>
        <div className={"flex flex-row justify-center items-center"}>
            <a href={"/"}>
                <Image
                src={"https://avatars.githubusercontent.com/u/170134946?v=4"}
                alt={"Main Page"}
                width={"30"}
                height={"30"}
                className={"rounded-full md:w-[60px] md:h-[60px]"}
                />
            </a>
        </div>
        <div
            className={"flex justify-end  text-[20px] animate-fade-left animate-duration-1500 animate-delay-200"}>
            <button className={`${optionsAnimation ? (mobileOptions ? "animate-spin animate-once animate-duration-500" : "animate-spin animate-once animate-duration-200") : ""
            }`}
                    onAnimationStart={() => {
                        setMobileOptions(!mobileOptions);
                    }
            }
                    onClick={() => {
                        setSpinning(!spinning);
                        setOptionsAnimation(true)
                    }}
                    onAnimationEnd={() => {
                        setOptionsAnimation(false);
                    }
            }>{!mobileOptions ? "=" : "x"}</button>
            <div className={spinning ? "animate-fade-left animate-duration-500" : "hidden"}>
                <h1>In dev</h1>
            </div>
        </div>
    </header>;
}