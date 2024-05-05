import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header/Header";
import "normalize.css";


const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "FRONTEND JOB",
  description: "Hackathon project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
