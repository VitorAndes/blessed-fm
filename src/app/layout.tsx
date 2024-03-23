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
        </head>
        <body
          className={`${inter.className} bg-gradient-to-tl from-teal-200 via-sky-400 to-teal-50 text-slate-700 antialiased flex justify-center items-center min-h-screen`}
        >
          <div className="w-[1152px]">
            <Header />
            <div className="bg-sky-700/30 shadow-md shadow-slate-500 p-8 h-[600px] rounded-lg">
              {children}
            </div>
          </div>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
