import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./ui/header";
import { ReactQueryProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="pt-br">
        <head>
          <title>BlessedFm</title>
          <link rel="shortcut icon" href="./Blessed_logo.jpeg" type="image/x-icon" />
        </head>
        <body
          className={`${inter.className} bg-gradient-to-tl from-teal-200 via-sky-400 to-teal-50 text-slate-700 antialiased lg:flex flex-col justify-center items-center md:min-h-screen`}
        >
          <div className="w-full lg:w-[1152px]">
            <Header />
            <div className="bg-sky-700/30 shadow-md shadow-slate-500 p-8 h-full lg:h-[600px] rounded-lg">
              {children}
            </div>
          </div>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
