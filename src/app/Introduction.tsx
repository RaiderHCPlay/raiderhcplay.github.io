import Image from "next/image";

export default function Introduction() {
    return <div
        className={"flex justify-center flex-col items-center animate-fade-down animate-duration-[2000ms]"}>
        <a href={"https://github.com/RaiderHCPlay"} target={"_blank"}>
            <Image
                width="200"
                height="200"
                className="border rounded-full mt-10 sm:w-32 sm:h-32 md:w-64 md:h-64 lg:w-80 lg:h-80"
                alt="avatar"
                src="https://avatars.githubusercontent.com/u/170134946?v=4"
            />
        </a>
        <strong>
            <h1 className={"text-orange-600 text-3xl sm:text-2xl md:text-4xl lg:text-8xl"}>
                Paweł Fabrycki
            </h1>
        </strong>
        <h2 className={"text-orange-600 text-xl sm:text-xl md:text-2xl lg:text-3xl mt-2"}>(also known
            as <strong>RaiderHCPlay</strong>)</h2>
        <strong className={"mt-2"}>
            <h2 className={"text-2xl sm:text-2xl md:text-4xl lg:text-7xl text-typescript"}>
                TypeScript Programmer
            </h2>
        </strong>
        <strong className={"mt-5"}>
            <a className={"text-white text-2xl sm:text-2xl md:text-4xl lg:text-4xl text-decoration-line: underline visited:text-white hover:text-blue-400 active:text-purple-600"}
               href="https://github.com/RaiderHCPlay"
               target={"_blank"}>
                <h2 id="githubLink">GitHub Profile Link</h2>
            </a>
        </strong>
        <b className={"mt-3"}>
            <a className={"text-white text-2xl sm:text-2xl md:text-4xl lg:text-4xl text-decoration-line: underline visited:text-white hover:text-blue-400 active:text-purple-600"}
               href="https://github.com/RaiderHCPlay/raiderhcplay.github.io"
               target={"_blank"}>
                <h2 id="githubLink">Page Source Code</h2>
            </a>
        </b>
    </div>;
}