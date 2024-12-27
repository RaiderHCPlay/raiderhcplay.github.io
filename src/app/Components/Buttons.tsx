import Link from "next/link";

export default function Buttons() {
    return (
        <div className={"hidden md:flex md:flex-row justify-center items-center animate-fade-up animate-duration-[2000ms] w-[325px] md:w-[750px] m-auto border-[#a6e3a1] border-[3px] mt-2.5 p-3.5"}>
            <Link href={"/about"} target={"_parent"}>
                About
            </Link>
        </div>
    )
}