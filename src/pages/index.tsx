import Image from "next/image";

export default function Home() {
  return (
      <>
          <h2 className={"flex justify-center bg-black text-white text-3xl sm:text-xl md:text-2xl lg:text-7xl"}>
              RaiderHCPlay's GitHub IO
          </h2>
          <div className={"flex justify-center"}>
              <div className={"flex flex-col items-center"}>
                  <a href={"https://github.com/RaiderHCPlay"}>
                      <Image
                          width="100"
                          height="100"
                          layout="responsive"
                          className="border rounded-full mt-10"
                          alt="avatar"
                          src="https://avatars.githubusercontent.com/u/170134946?v=4"
                      />
                  </a>
                  <strong>
                      <h1 className={"text-orange-400 text-4xl sm:text-xl md:text-2xl lg:text-8xl"}>
                          RaiderHCPlay
                      </h1>
                  </strong>
                  <strong>
                      <h2 className={"text-3xl sm:text-xl md:text-2xl lg:text-7xl text-typescript"}>
                          <span>TypeScript </span><span>Developer</span>
                      </h2>
                  </strong>
                  <strong className={"mt-5"}>
                      <a className={"text-purple-600 text-2xl sm:text-xl md:text-2xl lg:text-4xl"}
                         href="https://github.com/RaiderHCPlay">
                          <h2 id="githubLink">GitHub Profile Link</h2>
                      </a>
                  </strong>
                  <strong className={"mt-5"}>
                      <a className={"text-green-600 text-2xl sm:text-xl md:text-2xl lg:text-4xl"}
                         href="https://github.com/RaiderHCPlay/raiderhcplay.github.io">
                          <h2 id="githubLink">Page Source Code</h2>
                      </a>
                  </strong>
              </div>
          </div>

      </>
  );
}
