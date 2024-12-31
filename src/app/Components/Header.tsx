'use client'

import Image from "next/image";
import {useState} from 'react';
import Link from "next/link";

export default function Header() {

    const [mobileOptions, setMobileOptions] = useState(false);

    return (
        <>
            <header
                className={"bg-[#11111b] w-full h-[50px] md:h-[65px] flex justify-center items-center animate-fade-down animate-delay-200 animate-duration-1500"}>
                    <Link href={"/"}>
                        <Image
                            src={"https://avatars.githubusercontent.com/u/170134946?v=4"}
                            alt={"Main Page"}
                            width={"45"}
                            height={"45"}
                            className={"rounded-full md:w-[60px] md:h-[60px]"}
                        />
                    </Link>
                    <div className={"md:hidden text-[25px] fixed right-5 border-[#a6e3a1] border-[3px] p-0.5"}>
                        <button
                            onClick={() => setMobileOptions(!mobileOptions)}
                        >
                            Menu
                        </button>
                    </div>
            </header>
            <div className={mobileOptions ? "z-50 bg-[#1e1e2e] w-2/3 h-full fixed top-0 right-0" : "hidden"}>
                <div className={"flex items-center justify-between bg-[#11111b] w-full h-[50px] md:h-[65px] "}>
                    <h1 className={"text-[35px] flex justify-center flex-grow"}>Options</h1>
                    <button
                        className={"text-[25px] border-[#a6e3a1] border-[3px] p-0.5"}
                        onClick={() => setMobileOptions(!mobileOptions)}
                    >Close
                    </button>
                </div>
            </div>
        </>
    )
}