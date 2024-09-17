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
          <div className={"flex justify-center absolute bottom-0 left-0 right-0 p-4"}>
              <h2 className={"text-xl sm:text-xl md:text-2xl lg:text-3xl"}>This page is under <a
                  className={"text-decoration-line: underline text-red-600 visited:text-red-600 hover:text-orange-400 active:text-blue-600"}
                  href={"https://www.gnu.org/licenses/gpl-3.0.html"} target={"_blank"}>GPL-3.0 License</a></h2>
          </div>

      </>
  );
}
