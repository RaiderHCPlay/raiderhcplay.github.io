'use client'

import Image from "next/image";
import Link from 'next/link';
import {useState} from 'react';

export default function Page() {


    const [mobileOptions, setMobileOptions] = useState(false);
    const [optionsAnimation, setOptionsAnimation] = useState(false);

    const settingMobileOptions = () => {
        setMobileOptions(!mobileOptions);
    }

    return (
        <>
            <header className={"bg-blue-950"}>
                <div className={"flex items-center justify-center lg:justify-start animate-fade-right animate-duration-[1500ms] animate-delay-200"}>
                    <Image
                    width="50"
                    height="50"
                    className="border rounded-full ml-[20px] lg:ml-[80px] sm:w-8 sm:h-8 md:w-16 md:h-16 lg:w-28 lg:h-28 mt-2 mb-2"
                    alt="avatar"
                    src="https://avatars.githubusercontent.com/u/170134946?v=4"/>
                    <Link href="/" className={"text-[20px] md:text-[32px] lg:text-[64px] lg:pl-12 pl-4"}>RaiderHCPlay</Link>
                    <a href="#aboutMe" className={"hidden lg:flex text-[15px] md:text-[24px] lg:text-[50px] lg:pl-[150px] pl-[6px]"}>About</a>
                    <div className={"flex justify-end lg:hidden text-[20px] animate-fade-left animate-duration-1500 animate-delay-200"}>
                        <button className={`${ optionsAnimation && 'animate-spin animate-once animate-duration-300'
                        }`}
                            onClick={() => {
                            setOptionsAnimation(true)}}
                                onAnimationStart={settingMobileOptions}
                        onAnimationEnd={() => setOptionsAnimation(false)}>{!mobileOptions? '=' : 'x'}</button>
                        <div className={mobileOptions ? '' : 'hidden'}>
                            <h1>test</h1>
                        </div>
                    </div>
                </div>
            </header>
            <div className="bg-gradient-to-b from-react to-pink-400">
                <div
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
                </div>
                <div id="aboutMe"
                     className={"flex flex-col items-center pt-14 text-white animate-fade-down animate-duration-[2000ms] animate-ease-out"}>
                    <div className={"text-center"}>
                        <h1 className={"text-3xl md:text-4xl lg:text-8xl pb-1.5"}>About me</h1>
                        <article className={"text-2xl sm:text-2xl  md:text-3xl lg:text-4xl max-w-7xl"}>Hi!
                            My name is Paweł Fabrycki.<br/> I'm a Programmer with one year of experience. Currently
                            Student!<br/>
                            I mainly write in <span className={"text-typescript"}>TypeScript</span>.
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
                </div>
                <footer className={"flex justify-center bottom-0 left-0 right-0 p-4 relative text-white animate-flip-up animate-delay-100 animate-duration[2000mx]"}>
                    <h2 className={"text-xl sm:text-xl md:text-2xl lg:text-3xl"}>This page is under <a
                        className={"text-decoration-line: underline text-red-600 visited:text-red-600 hover:text-blue-400 active:text-purple-600"}
                        href={"https://www.gnu.org/licenses/gpl-3.0.html"} target={"_blank"}><strong>GPL-3.0
                        License</strong></a></h2>
                </footer>
            </div>
        </>
    );
}
