// app/components/Hero.jsx
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white py-20 md:py-32">
      <Image
        src="/moving-truck-toronto.jpg"
        alt="Moving truck in Toronto with city skyline"
        layout="fill" // Deprecated, use fill and sizes
        objectFit="cover" // Use style objectFit with fill
        // Instead of layout="fill" and objectFit="cover":
        // fill
        // style={{ objectFit: "cover" }}
        quality={80}
        className="opacity-40"
        priority
      />
      {/* Corrected Image usage for Next.js 13+ with fill */}
      <Image
        src="/moving-truck-toronto.jpg"
        alt="Moving truck in Toronto with city skyline"
        fill // This makes the image fill its parent
        style={{ objectFit: "cover" }} // CSS for how the image covers the area
        quality={80}
        className="opacity-40"
        priority
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading mb-6">
          Stress-Free Moving in Toronto
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
          Your trusted, reliable, and affordable movers for residential and commercial relocations across the GTA.
        </p>
        <div className="space-x-4">
          <Link
            href="/quote"
            className="px-8 py-3 bg-primary text-white text-lg font-semibold rounded-md hover:bg-primary-dark transition-colors duration-200"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/#services"
            className="px-8 py-3 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-md hover:bg-white hover:text-primary-dark transition-colors duration-200"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}