import Container from "./components/Container";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/NavBar";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Ecomerce",
  description: "Ecomerce Website by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Container>
            {children}
          </Container>
          <Footer />
        </div>
      </body>
    </html>
  );
}
