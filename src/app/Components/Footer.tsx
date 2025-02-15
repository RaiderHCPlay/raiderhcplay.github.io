'use client'
import { useEffect, useState } from 'react';
import '@/app/styles/footer.scss';

export default function Footer() {
    const [date, setDate] = useState<Date>()

    useEffect(() => {
        setDate(new Date())
    }, [])

    return (
        <footer
            className={
                'footer-container'
            }
        >
            {date !== undefined && (
                <p>
                    © {date.getFullYear()} Paweł Fabrycki
                </p>
            )}
        </footer>
    )
}
