export default function Header(props: {
    optionsAnimation: boolean,
    onAnimationStart: () => void,
    onClick: () => void,
    onAnimationEnd: () => void,
    mobileOptions: boolean
}) {
    return <header className={"bg-[#11111b]"}>
        <div>
            <h1 className={"text-center"}>RaiderHCPlay</h1>
        </div>
    </header>;
}