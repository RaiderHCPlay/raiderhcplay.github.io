import Image from "next/image";

export default function Home() {
  return (
      <>
          <h2 className={"flex justify-center bg-black text-white sm:text-xl md:text-2xl lg:text-7xl"}>
              RaiderHCPlay's GitHub IO
          </h2>
          <div className={"flex justify-center"}>
              <div className={"flex flex-col items-center"}>
                  <a href={"https://github.com/RaiderHCPlay"}>
                      <Image
                          width="10"
                          height="10"
                          // layout="responsive"
                          className="border rounded-full mt-10 sm:w-32 sm:h-32 md:w-64 md:h-64 lg:w-80 lg:h-80"
                          alt="avatar"
                          src="https://avatars.githubusercontent.com/u/170134946?v=4"
                      />
                  </a>
                  <strong>
                      <h1 className={"text-orange-400 sm:text-2xl md:text-4xl lg:text-8xl"}>
                          Paweł Fabrycki
                      </h1>
                  </strong>
                  <h2 className={"text-orange-400 sm:text-2xl md:text-4xl lg:text-3xl"}>(also known as <strong>RaiderHCPlay</strong>)</h2>
                  <strong>
                      <h2 className={"sm:text-2xl md:text-4xl lg:text-7xl text-typescript"}>
                          <span>TypeScript </span><span>Developer</span>
                      </h2>
                  </strong>
                  <strong className={"mt-4"}>
                      <a className={"text-purple-600 sm:text-2xl md:text-4xl lg:text-4xl"}
                         href="https://github.com/RaiderHCPlay">
                          <h2 id="githubLink">GitHub Profile Link</h2>
                      </a>
                  </strong>
                  <strong className={"mt-2"}>
                      <a className={"text-green-600 sm:text-2xl md:text-4xl lg:text-4xl"}
                         href="https://github.com/RaiderHCPlay/raiderhcplay.github.io">
                          <h2 id="githubLink">Page Source Code</h2>
                      </a>
                  </strong>
              </div>
          </div>

      </>
  );
}
