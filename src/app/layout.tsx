import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "RaiderHCPlay's website",
  description: "RaiderHCPlay's personal website",
  icons: "https://avatars.githubusercontent.com/u/170134946?v=4"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"scroll-smooth"}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
