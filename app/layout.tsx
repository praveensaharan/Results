import Navigation from "./components/navigation";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from '../components/home/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RBSE Results",
  description: "Get all Details here",
  icons: {
    icon: '/finfind-favicon-black.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Get all Details here" />
        <title>RBSE Results</title>
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}