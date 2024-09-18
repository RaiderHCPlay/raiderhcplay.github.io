import Image from "next/image";


export default function Home() {
  return (
      <>
          <h2 className={"flex justify-center bg-black text-white text-2xl sm:text-xl md:text-2xl lg:text-7xl"}>
              RaiderHCPlay's Website
          </h2>
          <div className={"flex justify-center"}>
              <div className={"flex flex-col items-center"}>
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
                      <h1 className={"text-orange-400 text-3xl sm:text-2xl md:text-4xl lg:text-8xl"}>
                          Paweł Fabrycki
                      </h1>
                  </strong>
                  <h2 className={"text-orange-400 text-xl sm:text-xl md:text-2xl lg:text-3xl mt-2"}>(also known
                      as <strong>RaiderHCPlay</strong>)</h2>
                  <strong className={"mt-2"}>
                      <h2 className={"text-2xl sm:text-2xl md:text-4xl lg:text-7xl text-typescript"}>
                          <span>TypeScript </span><span>Programmer</span>
                      </h2>
                  </strong>
                  <strong className={"mt-5"}>
                      <a className={"text-purple-600 text-2xl sm:text-2xl md:text-4xl lg:text-4xl text-decoration-line: underline visited:text-purple-600 hover:text-orange-400 active:text-blue-600"}
                         href="https://github.com/RaiderHCPlay"
                         target={"_blank"}>
                          <h2 id="githubLink">GitHub Profile Link</h2>
                      </a>
                  </strong>
                  <strong className={"mt-3"}>
                      <a className={"text-green-600 visited:text-green-600 text-2xl sm:text-2xl md:text-4xl lg:text-4xl text-decoration-line: underline hover:text-orange-400 active:text-blue-600"}
                         href="https://github.com/RaiderHCPlay/raiderhcplay.github.io"
                         target={"_blank"}>
                          <h2 id="githubLink">Page Source Code</h2>
                      </a>
                  </strong>
              </div>
          </div>
          <div className={"flex flex-col items-center text-center pt-14 text-white "}>
              <h1 className={"text-2xl sm:text-2xl md:text-4xl lg:text-8xl pb-1.5"}>About me</h1>
              <article className={"text-2xl sm:text-2xl md:text-3xl lg:text-4xl max-w-6xl"}>Hi!
                  My name is Paweł Fabrycki. I'm a
                  Programmer with one year of experience. Currently Student!
                  I mainly write in <span className={"text-typescript"}>TypeScript</span>.
                  <dl>Learning frameworks:
                      <li>React <a href={"https://react.dev/"} target={"_blank"}><svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none"
                                     xmlns="http://www.w3.org/2000/svg"
                                     className="inline w-4 h-4 sm:w-4 sm:h-4 md:w-8 md:h-8 lg:w-14 lg:h-14 text-sm me-0 text-brand dark:text-brand-dark origin-center transition-all ease-in-out text-react">
                          <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                          <g stroke="currentColor" stroke-width="1" fill="none">
                              <ellipse rx="10" ry="4.5"></ellipse>
                              <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                              <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                          </g>
                      </svg></a></li>
                      <li>Next.js <a href={"https://nextjs.org/"} target={"_blank"}><Image
                            alt={"Next.js Logo"}
                            width={"50"}
                            height={"50"}
                            className={"inline w-4 h-4 sm:w-4 sm:h-4 md:w-8 md:h-8 lg:w-14 lg:h-14"}
                            src={"https://camo.githubusercontent.com/c3635f27439ecdbf20e3cbf969c156f4040f10a0c8c836cf307d916dd8f806d4/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313636323133303535392f6e6578746a732f49636f6e5f6461726b5f6261636b67726f756e642e706e67"}
                      /></a>
                      </li>
                      <li>Electron <a href={"https://www.electronjs.org/"} target={"_blank"}><Image
                            className={"inline w-4 h-4 sm:w-4 sm:h-4 md:w-8 md:h-8 lg:w-14 lg:h-14"}
                            alt={"Electron Logo"}
                            width={"50"}
                            height={"50"}
                            src={"https://www.electronjs.org/assets/img/logo.svg"}
                      /></a></li>
                  </dl>
              </article>
          </div>
          <div className={"flex justify-center bottom-0 left-0 right-0 p-4 relative"}>
              <h2 className={"text-xl sm:text-xl md:text-2xl lg:text-3xl"}>This page is under <a
                  className={"text-decoration-line: underline text-red-600 visited:text-red-600 hover:text-orange-400 active:text-blue-600"}
                  href={"https://www.gnu.org/licenses/gpl-3.0.html"} target={"_blank"}>GPL-3.0 License</a></h2>
          </div>

      </>
  );
}
