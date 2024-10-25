export default function Footer() {
    return <footer
        className={"flex justify-center bottom-0 left-0 right-0 p-4 relative text-white animate-flip-up animate-delay-100 animate-duration[2000mx]"}>
        <h2 className={"text-xl sm:text-xl md:text-2xl lg:text-3xl"}>This page is under <a
            className={"text-decoration-line: underline text-red-600 visited:text-red-600 hover:text-blue-400 active:text-purple-600"}
            href={"https://www.gnu.org/licenses/gpl-3.0.html"} target={"_blank"}><strong>GPL-3.0
            License</strong></a></h2>
    </footer>;
}