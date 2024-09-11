import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/system";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});




export const metadata = {
  title: "Attend",
  description: "Use Attend to never miss Attendance",
};

export default async function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="absolute w-32 h-32 blur-[130px] bg-blue-500"></div>
        <div className="absolute top-[50%] left-[70%] w-60 h-60 blur-[250px] max-sm:hidden bg-violet-400"></div>
      

          <NextUIProvider>

          {children}
          </NextUIProvider>
       
      </body>
    </html>
  );
}
