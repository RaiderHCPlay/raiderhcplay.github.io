import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";
import Website from "@/app/Components/Website";
import "@/app/styles/global.scss";
import "@/app/styles/website.scss"

export default function page() {
    return (
        <>
            <Header />
            <Website />
            <Footer />
        </>
)
}
