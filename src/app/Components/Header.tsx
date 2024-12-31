'use client'
import Image from "next/image";

export default function Header() {

    return (
        <>
            <header
        className={"bg-[#11111b] w-full h-[35px] md:h-[65px] flex items-center justify-between animate-fade-down animate-delay-200 animate-duration-1500"}>
            <div className={"flex justify-center flex-grow"}>
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
    </header>
        </>
    )
}