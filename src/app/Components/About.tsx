//import Image from "next/image";

export default function About() {
    return (
    <div className={"animate-fade-down animate-duration-[2000ms] animate-ease-out border-[#a6e3a1] border-[3px] w-[1200px] h-[600px] m-auto mt-2.5"}>
        <div className={"border-[#a6e3a1] border-b-[3px] w-full h-[250px] text-center flex flex-col items-center"}>
            <h1 className={"text-[30px] md:text-6xl border-[#a6e3a1] border-b-[3px] border-l-[3px] border-r-[3px] w-[320px]"}>About me</h1>
            <article className={"text-[30px] pt-5"}>Hello World! I&#39;m Paweł Fabrycki, the <b
                className={"text-typescript mt-auto"}>TypeScript</b> Programmer and Web Developer.
                <br></br>
                In free time I love reading mangas, watching anime, playing games and airsofting.
                <br></br>
                For development I use Arch Linux and WebStorm IDE.
            </article>
        </div>
        <div className={"border-[#a6e3a1] border-r-[3px] w-1/2 h-[350px]"}>

        </div>
    </div>
    )
}