// app/layout.jsx
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsxFooter";


// Configure Google Fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "600"],
});

// SEO: Default Metadata
// Next.js will infer types for this object.
export const metadata = {
  title: {
    default: "Toronto Movers | Reliable & Affordable Moving Services",
    template: "%s | Toronto Movers",
  },
  description: "Your trusted local moving company in Toronto. We offer residential, commercial, and packing services. Get a free quote today!",
  keywords: "movers toronto, moving company toronto, local movers, residential moving, commercial moving, packing services toronto, affordable movers",
  openGraph: {
    title: "Toronto Movers | Reliable & Affordable Moving Services",
    description: "Your trusted local moving company in Toronto. We offer residential, commercial, and packing services.",
    type: "website",
    locale: "en_CA",
    url: "https://www.yourtorontomovers.ca", // Replace with your actual domain
    siteName: "Toronto Movers",
    // images: [
    //   {
    //     url: 'https://www.yourtorontomovers.ca/og-image.jpg',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Toronto Movers - Moving Truck',
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toronto Movers | Reliable & Affordable Moving Services",
    description: "Your trusted local moving company in Toronto.",
    // site: "@yourtwitterhandle",
    // creator: "@yourtwitterhandle",
    // images: ['https://www.yourtorontomovers.ca/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: { google: 'YOUR_GOOGLE_SITE_VERIFICATION_CODE' },
  // alternates: { canonical: 'https://www.yourtorontomovers.ca' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="font-sans bg-gray-50 text-gray-800">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}