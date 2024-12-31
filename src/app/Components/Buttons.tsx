import Link from "next/link";

export default function Buttons({classes}: {classes: string}) {
    return (
        <div className={classes}>
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