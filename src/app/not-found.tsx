import Header from '@/app/Components/Header';
import Footer from '@/app/Components/Footer';
import Link from "next/link";

export default function NotFound() {
    return (
        <>
        <Header />
        <div className={"flex flex-col items-center justify-center pt-2.5 animate-fade-down animate-delay-200 animate-duration-1500"}>
            <h1 className={"text-[40px] md:text-[50px] md:text-5xl"}>Page unavailable</h1>
            <Link href={"/"}><button className={"underline active:text-[#cba6f7] hover:text-[#a6e3a1]  text-[40px] md:text-4xl pt-2.5"}>Back to main page</button></Link>
        </div>
            <Footer />
        </>
    )
}