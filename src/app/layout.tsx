import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
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
          className={`${inter.className} bg-gradient-to-tl from-[#BEE9E8] via-[#62B6CB] to-[#CAE9FF] text-slate-800 antialiased lg:flex flex-col justify-center items-center md:min-h-screen`}
        >
          <div className="w-full lg:w-[1152px]">
            <Header />
            <div className="bg-[#5FA8D3] shadow-md shadow-slate-500 p-8 h-screen lg:h-[600px] rounded-lg">
              {children}
            </div>
          </div>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
