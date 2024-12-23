import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "RaiderHCPlay GitHub io",
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
        className={`antialiased text-[#cdd6f4] bg-[#1e1e2e]`}
      >
        {children}
      </body>
    </html>
  );
}
