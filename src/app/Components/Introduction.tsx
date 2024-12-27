import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
    return (
        <div
            className={"flex-col md:flex-row flex justify-center items-center animate-fade-down animate-duration-[2000ms] w-1/2 m-auto border-[#94e2d5] border-[3px] mt-2.5"}>
        <a href={"https://github.com/RaiderHCPlay"} target={"_blank"}>
            <Image
                width="120"
                height="120"
                className="border rounded-full md:w-60 md:h-60"
                alt="avatar"
                src="https://avatars.githubusercontent.com/u/170134946?v=4"
            />
        </a>
        <div className={"flex flex-col items-center md:ml-14 pt-2"}>
        <strong>
            <h1 className={"text-orange-600 text-[30px] md:text-5xl"}>
                Paweł Fabrycki
            </h1>
        </strong>
        <h2 className={"text-orange-600 text-[20px] md:text-2xl mt-2"}>(also known
            as <strong>RaiderHCPlay</strong>)</h2>
        <strong className={"mt-2"}>
            <h2 className={"text-[25px] md:text-4xl text-typescript"}>
                TypeScript Programmer
            </h2>
        </strong>
        <strong className={"mt-2 md:mt-5"}>
            <a className={"text-[20px] md:text-3xl text-decoration-line: underline hover:text-[#89b4fa] active:text-purple-600"}
               href="https://github.com/RaiderHCPlay"
               target={"_blank"}>GitHub Profile
            </a>
        </strong>
        <b className={"mt-1 md:mt-3"}>
            <Link
                href={"https://wakatime.com/@RaiderHCPlay"}
                target={"_blank"}
                className={"text-[20px] md:text-3xl text-decoration-line: underline hover:text-[#89b4fa] active:text-purple-600"}
            >WakaTime Profile
            </Link>
        </b>
        </div>
    </div>
)
}