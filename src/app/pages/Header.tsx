import Image from "next/image";
import Link from "next/link";

export default function Header(props: {
    optionsAnimation: boolean,
    onAnimationStart: () => void,
    onClick: () => void,
    onAnimationEnd: () => void,
    mobileOptions: boolean
}) {
    return <header className={"bg-blue-950"}>
        <div
            className={"flex items-center justify-center lg:justify-start animate-fade-right animate-duration-[1500ms] animate-delay-200"}>
            <Image
                width="50"
                height="50"
                className="border rounded-full ml-[20px] lg:ml-[80px] sm:w-8 sm:h-8 md:w-16 md:h-16 lg:w-28 lg:h-28 mt-2 mb-2"
                alt="avatar"
                src="https://avatars.githubusercontent.com/u/170134946?v=4"/>
            <Link href="/" className={"text-[20px] md:text-[32px] lg:text-[64px] lg:pl-12 pl-4"}>RaiderHCPlay</Link>
            <a href="#aboutMe"
               className={"hidden lg:flex text-[15px] md:text-[24px] lg:text-[50px] lg:pl-[150px] pl-[6px]"}>About</a>
            <div
                className={"flex justify-end lg:hidden text-[20px] animate-fade-left animate-duration-1500 animate-delay-200"}>
                <button className={`${props.optionsAnimation && "animate-spin animate-once animate-duration-300"
                }`}
                        onAnimationStart={props.onAnimationStart}
                        onClick={props.onClick}
                        onAnimationEnd={props.onAnimationEnd}>{!props.mobileOptions ? "=" : "x"}</button>
                <div className={props.mobileOptions ? "animate-fade-left" : "hidden"}>
                    <h1>test</h1>
                </div>
            </div>
        </div>
    </header>;
}