import Image from 'next/image';

export default function Projects() {
    return(
        <div className={"container"}>
            <h1 className={"projectsTitle"}>Projects</h1>
            <div className={"projects"}>
                <div className={"project"}>
                    <h1>raiderhcplay.github.io</h1>
                    <article>My website and webdev sandbox</article>
                    <a href="https://wakatime.com/badge/user/16a607a2-a819-4ae5-b4fd-490342b99c3d/project/6e8f7b16-3aee-44b7-813b-a4c0b613ddd1"><Image
                        src="https://wakatime.com/badge/user/16a607a2-a819-4ae5-b4fd-490342b99c3d/project/6e8f7b16-3aee-44b7-813b-a4c0b613ddd1.svg"
                        alt="wakatime"
                        width={"200"}
                        height={"0"}
                    />
                    </a>
                </div>
                <div className={"project"}>
                    <h1>catppuccin userstyles</h1>
                    <article>Catppuccin userstyles</article>
                    <a href="https://wakatime.com/badge/user/16a607a2-a819-4ae5-b4fd-490342b99c3d/project/408f458f-9a85-4c09-9515-ce79383a0559"><Image
                        src="https://wakatime.com/badge/user/16a607a2-a819-4ae5-b4fd-490342b99c3d/project/408f458f-9a85-4c09-9515-ce79383a0559.svg"
                        alt="wakatime"
                        width={"200"}
                        height={"0"}
                    /></a>
                </div>
            </div>
        </div>
    )
}