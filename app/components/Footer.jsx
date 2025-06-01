// app/components/Footer.jsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo.jpeg" alt="Toronto Movers Logo" width={150} height={50} />
              {/* Or text: <span className="text-2xl font-heading font-bold text-white">Toronto Movers</span> */}
            </Link>
            <p className="text-sm leading-relaxed">
              Your reliable partner for stress-free moving in Toronto and the GTA.
              We handle your belongings with care.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/#services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Moving Tips (Blog)</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/quote" className="hover:text-primary transition-colors">Get a Free Quote</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-heading">Contact Us</h3>
            <address className="not-italic space-y-2 text-sm">
              <p>123 Moving Lane, Toronto, ON, M1A 1A1</p>
              <p>Phone: <a href="tel:+14165551234" className="hover:text-primary transition-colors">(416) 555-1234</a></p>
              <p>Email: <a href="mailto:info@torontomovers.ca" className="hover:text-primary transition-colors">info@torontomovers.ca</a></p>
            </address>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-700 text-center text-sm">
          <p>© {currentYear} Toronto Movers. All rights reserved.</p>
          <p className="mt-1">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link> |
            <Link href="/terms-of-service" className="hover:text-primary transition-colors ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}