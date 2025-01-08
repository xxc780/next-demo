import "./globals.css";
import Header from "@/components/header";
import {Comforter} from "next/font/google";

const comforter = Comforter({
  subsets: ['latin'],
  weight: '400'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={comforter.className}>
    <body >
    <div>
        <Header/>
    </div>
    {children}
    </body>
    </html>
  );
}
