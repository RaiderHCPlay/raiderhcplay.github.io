export default function Header(props: {
    optionsAnimation: boolean,
    onAnimationStart: () => void,
    onClick: () => void,
    onAnimationEnd: () => void,
    mobileOptions: boolean
}) {
    return <header className={"bg-[#11111b]"}>
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