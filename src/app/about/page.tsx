import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";
import About from "@/app/Components/About";

export async function generateMetadata() {
    return {
        title: "About",
        description: "Page about Paweł"
    }
}

export default function AboutPage() {

    return (
        <>
            <Header/>
            <About />
            <Footer />
        </>
    )
}