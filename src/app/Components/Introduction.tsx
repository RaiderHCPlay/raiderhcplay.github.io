import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
    return (
        <div
        className={"flex justify-center items-center animate-fade-down animate-duration-[2000ms]"}>
        <a href={"https://github.com/RaiderHCPlay"} target={"_blank"}>
            <Image
                width="120"
                height="120"
                className="border rounded-full mt-10 md:w-60 md:h-60"
                alt="avatar"
                src="https://avatars.githubusercontent.com/u/170134946?v=4"
            />
        </a>
        <div className={"flex flex-col items-center ml-4 md:ml-14 pt-12"}>
        <strong>
            <h1 className={"text-orange-600 text-[20px] md:text-5xl"}>
                Paweł Fabrycki
            </h1>
        </strong>
        <h2 className={"text-orange-600 text-[10px] md:text-2xl mt-2"}>(also known
            as <strong>RaiderHCPlay</strong>)</h2>
        <strong className={"mt-2"}>
            <h2 className={"text-[13px] md:text-4xl text-typescript"}>
                TypeScript Programmer
            </h2>
        </strong>
        <strong className={"mt-2 md:mt-5"}>
            <a className={"text-[13px] md:text-3xl text-decoration-line: underline hover:text-[#89b4fa] active:text-purple-600"}
               href="https://github.com/RaiderHCPlay"
               target={"_blank"}>GitHub Profile
            </a>
        </strong>
        <b className={"mt-1 md:mt-3"}>
            <Link
                href={"https://wakatime.com/@RaiderHCPlay"}
                target={"_blank"}
                className={"text-[13px] md:text-3xl text-decoration-line: underline hover:text-[#89b4fa] active:text-purple-600"}
            >WakaTime Profile
            </Link>
        </b>
        </div>
    </div>
)
}