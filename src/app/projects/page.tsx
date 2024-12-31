import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";
import Projects from "@/app/Components/Projects";

export function generateMetadata() {
    return {
        title: "Projects",
        description: "RaiderHCPlay's projects"
    }
}

export default function ProjectsPage() {
    return (
        <>
            <Header />
            <Projects />
            <Footer />
        </>
    )
}