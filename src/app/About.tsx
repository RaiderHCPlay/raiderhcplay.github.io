import Image from "next/image";

export default function About() {
    return <div id="aboutMe"
                className={"flex flex-col items-center pt-14 text-white animate-fade-down animate-duration-[2000ms] animate-ease-out"}>
        <div className={"text-center"}>
            <h1 className={"text-3xl md:text-4xl lg:text-8xl pb-1.5"}>About me</h1>
            <article className={"text-2xl sm:text-2xl  md:text-3xl lg:text-4xl max-w-7xl"}>Hi!
                My name is Paweł Fabrycki.<br/> I'm a Programmer with one year of experience.<br/>
                I mainly write in <span className={"text-typescript"}><b>TypeScript</b></span>.
                <br/>Also a lover of mangas, games and anime.
            </article>
        </div>
        <ul className={"text-2xl sm:text-2xl md:text-3xl lg:text-4xl max-w-7xl text-center"}>Learning:
            <li className={"pt-1"}><a href={"https://react.dev/"} target={"_blank"}
                                      className={"hover:underline hover:text-react"}>
                <svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     className="inline w-11 h-11 sm:w-4 sm:h-4 md:w-8 md:h-8 lg:w-14 lg:h-14 text-sm me-0 text-brand dark:text-brand-dark origin-center transition-all ease-in-out text-react">
                    <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                    <g stroke="currentColor" stroke-width="1" fill="none">
                        <ellipse rx="10" ry="4.5"></ellipse>
                        <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                        <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                    </g>
                </svg>
                React
            </a></li>
            <li className={"pt-1"}><a href={"https://nextjs.org/"} target={"_blank"}
                                      className={"hover:underline hover:text-black"}><Image
                alt={"Next.js Logo"}
                width={"50"}
                height={"50"}
                className={"inline w-11 h-11 sm:w-4 sm:h-4 md:w-8 md:h-8 lg:w-14 lg:h-14"}
                src={"https://camo.githubusercontent.com/c3635f27439ecdbf20e3cbf969c156f4040f10a0c8c836cf307d916dd8f806d4/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313636323133303535392f6e6578746a732f49636f6e5f6461726b5f6261636b67726f756e642e706e67"}
            /> Next.js</a>
            </li>
            <li className={"pt-1"}><a href={"https://www.electronjs.org/"} target={"_blank"}
                                      className={"hover:underline hover:text-gray-600"}> <Image
                className={"inline w-11 h-11 sm:w-4 sm:h-4 md:w-8 md:h-8 lg:w-14 lg:h-14"}
                alt={"Electron Logo"}
                width={"50"}
                height={"50"}
                src={"https://www.electronjs.org/assets/img/logo.svg"}
            /> Electron</a></li>
            <li className={"pt-1"}><a href={"https://tailwindcss.com/"} target={"_blank"}
                                      className={"hover:underline hover:text-blue-600"}><Image
                alt={"Tailwind Logo"}
                width={"50"}
                height={"50"}
                src={"https://avatars.githubusercontent.com/u/67109815?s=48&v=4"}
                className={"inline w-11 h-11 sm:w-4 sm:h-4 md:w-8 md:h-8 lg:w-14 lg:h-14"}
            />Tailwind CSS
            </a></li>
        </ul>
    </div>;
}