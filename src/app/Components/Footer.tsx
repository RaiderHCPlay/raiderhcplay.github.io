import {useEffect, useState} from "react";

export default function Footer() {

    const [date, setDate] = useState<Date>();

    useEffect(() => {
        setDate(new Date())
    }, []);

    return (
    <footer className={"flex justify-center bottom-0 left-0 right-0 p-4 relative animate-flip-up animate-delay-100 animate-duration[2000mx]"}>
        {date !== undefined &&
            <h2 className={"text-[11px] md:text-xl"}>
                Copyright © {date.getFullYear()} Paweł Fabrycki
            </h2>
        }
    </footer>
            )
}
