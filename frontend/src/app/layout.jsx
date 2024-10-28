import "./globals.css";
import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata = {
  title: "OEMAH SOLUTION INDONESIA",
  description: "OEMAH SOLUTION INDONESI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body
        className={`${archivo.className}`} // Use backticks here
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
