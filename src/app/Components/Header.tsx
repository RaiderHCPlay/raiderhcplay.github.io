import Image from "next/image";

export default function Header(props: {
    optionsAnimation: boolean,
    onAnimationStart: () => void,
    onClick: () => void,
    onAnimationEnd: () => void,
    mobileOptions: boolean
}) {
    return <header className={"bg-[#11111b] w-full h-[65px] flex"}>
        <div className={"flex flex-row justify-center items-center"}>
            <Image
                src={"https://avatars.githubusercontent.com/u/170134946?v=4"}
                alt={"Avatar"}
                width={"30"}
                height={"30"}
                className={"rounded-full md:w-[60px] md:h-[60px]"}
            />
        </div>
        <div
            className={"flex justify-end lg:hidden text-[20px] animate-fade-left animate-duration-1500 animate-delay-200"}>
            <button className={`${props.optionsAnimation && "animate-spin animate-once animate-duration-300"
            }`}
                    onAnimationStart={props.onAnimationStart}
                    onClick={props.onClick}
                    onAnimationEnd={props.onAnimationEnd}>{!props.mobileOptions ? "=" : "x"}</button>
            <div className={props.mobileOptions ? "animate-fade-left" : "hidden"}>
                <h1>In dev</h1>
            </div>
        </div>
    </header>;
}