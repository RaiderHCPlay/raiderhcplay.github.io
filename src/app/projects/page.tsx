import Header from '@/app/Components/Header'
import Footer from '@/app/Components/Footer'
import Projects from '@/app/Components/Projects'
import '@/app/styles/projects.scss'
import '@/app/styles/global.scss'

export function generateMetadata() {
    return {
        title: 'Projects',
        description: "RaiderHCPlay's projects",
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
