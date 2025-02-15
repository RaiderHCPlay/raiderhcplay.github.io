import Header from '@/app/Components/Header'
import Footer from '@/app/Components/Footer'
import Introduction from '@/app/Components/Introduction'
import Buttons from '@/app/Components/Buttons'

export default function Page() {
    return (
        <>
            <Header />
            <Introduction />
            <Buttons
                classes={
                    'hidden md:flex md:flex-row justify-between items-center animate-fade-up animate-duration-[2000ms] w-[325px] md:w-[750px] m-auto border-[#a6e3a1] border-[3px] mt-2.5 p-3.5'
                }
            />
            <Footer />
        </>
    )
}
