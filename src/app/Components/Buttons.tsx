import Link from "next/link";

export default function Buttons() {
    return (
        <div className={"hidden md:flex md:flex-row justify-between items-center animate-fade-up animate-duration-[2000ms] w-[325px] md:w-[750px] m-auto border-[#a6e3a1] border-[3px] mt-2.5 p-3.5"}>
            <Link
                href={"/about"}
                target={"_parent"}
                className={"text-3xl border-[#a6e3a1] border-[2px] pl-1.5 pr-1.5 pt-0.5 pb-0.5"}>
                About
            </Link>
            <Link
                href={"/projects"}
                target={"_parent"}
                className={"text-3xl border-[#a6e3a1] border-[2px] pl-1.5 pr-1.5 pt-0.5 pb-0.5"}>
                Projects
            </Link>
            <Link
                href={"/website"}
                target={"_parent"}
                className={"text-3xl border-[#a6e3a1] border-[2px] pl-1.5 pr-1.5 pt-0.5 pb-0.5"}
            >
                Website
            </Link>
        </div>
    )
}