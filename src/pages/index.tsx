import Image from 'next/image'

export default function Home() {
  return (
      <>
        <div id="root">
          <h2 id="head-bar">RaiderHCPlay GitHub IO</h2>
          <div id="top-level" >
            <Image alt="avatar" src="https://avatars.githubusercontent.com/u/170134946?v=4" width="260" height="260"
                 id="avatar-image"/>
            <div>
              <h1>RaiderHCPlay</h1>
              <h2 id="profession"><span>TypeScript</span><span> Developer</span></h2>
              <a href="https://github.com/RaiderHCPlay"><h2 id="githubLink">GitHub Profile</h2></a>
            </div>
          </div>
        </div>
      </>
  );
}
