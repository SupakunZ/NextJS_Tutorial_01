import { Inter, Roboto, Poppins } from 'next/font/google'
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from './context/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

// SEO
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
