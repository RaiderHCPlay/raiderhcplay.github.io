import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
    return <div
        className={"flex justify-center flex-col items-center animate-fade-down animate-duration-[2000ms]"}>
        <a href={"https://github.com/RaiderHCPlay"} target={"_blank"}>
            <Image
                width="200"
                height="200"
                className="border rounded-full mt-10 md:w-80 md:h-80"
                alt="avatar"
                src="https://avatars.githubusercontent.com/u/170134946?v=4"
            />
        </a>
        <strong>
            <h1 className={"text-orange-600 text-3xl md:text-8xl"}>
                Paweł Fabrycki
            </h1>
        </strong>
        <h2 className={"text-orange-600 text-xl md:text-3xl mt-2"}>(also known
            as <strong>RaiderHCPlay</strong>)</h2>
        <strong className={"mt-2"}>
            <h2 className={"text-2xl md:text-7xl text-typescript"}>
                TypeScript Programmer
            </h2>
        </strong>
        <strong className={"mt-5"}>
            <a className={"text-white text-2xl md:text-4xl text-decoration-line: underline visited:text-white hover:text-blue-400 active:text-purple-600"}
               href="https://github.com/RaiderHCPlay"
               target={"_blank"}>
                <h2 id="githubLink">GitHub Profile Link</h2>
            </a>
        </strong>
        <b className={"mt-3"}>
            <Link
                href={"https://wakatime.com/@RaiderHCPlay"}
                target={"_blank"}
                className={"text-white text-2xl md:text-4xl text-decoration-line: underline visited:text-white hover:text-blue-400 active:text-purple-600"}
            >WakaTime Profile Link
            </Link>
        </b>
        <b className={"mt-3"}>
            <a className={"text-white text-2xl md:text-4xl text-decoration-line: underline visited:text-white hover:text-blue-400 active:text-purple-600"}
               href="https://github.com/RaiderHCPlay/raiderhcplay.github.io"
               target={"_blank"}>
                <h2 id="githubLink">Page Source Code</h2>
            </a>
        </b>
    </div>;
}