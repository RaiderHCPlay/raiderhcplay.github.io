import Image from "next/image";

export default function Home() {
  return (
      <>
      <h2 className={"flex justify-center bg-black text-white text-3xl sm:text-xl md:text-2xl lg:text-7xl"}>RaiderHCPlay's GitHub IO</h2>
      <div className={"flex justify-center"}>
          <div className={"border rounded-full mt-20 h-auto max-w-full"}>
              <a href={"https://github.com/RaiderHCPlay"}><Image width="260" height="260"
                                                                 className={"rounded-full"}
                                                                 alt="avatar"
                                                                 src="https://avatars.githubusercontent.com/u/170134946?v=4"/></a>
          </div>
          <div className={"flex flex-col items-center pl-16 pt-14"}>
              <h1 className={"text-orange-400 lg:text-8xl md:text-7xl sm:text-6xl"}>RaiderHCPlay</h1>
              <strong><h2 className={"lg:text-5xl md:text-4xl sm:text-3xl pt-4 text-typescript"}><span>TypeScript </span><span>Developer</span>
              </h2></strong>
              <strong className={"mt-5"}><a className={"text-purple-600 lg:text-4xl md:text-3xl sm:text-2xl"}
                                            href="https://github.com/RaiderHCPlay"><h2 id="githubLink">GitHub Profile
                  Link</h2></a></strong>
              <strong className={"mt-5"}><a className={"text-green-600 lg:text-4xl md:text-3xl sm:text-2xl"}
                                            href="https://github.com/RaiderHCPlay/raiderhcplay.github.io">
                  <h2 id="githubLink">Page Source Code</h2></a></strong>
          </div>
      </div>
      </>
  );
}
