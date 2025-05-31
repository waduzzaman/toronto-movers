// app/components/CallToAction.jsx
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6">
          Ready for a Smooth Move in Toronto?
        </h2>
        <p className="text-lg text-blue-100 mb-10 max-w-xl mx-auto">
          Let our expert Toronto movers take the stress out of your next relocation. Contact us today for a personalized, no-obligation quote.
        </p>
        <Link
          href="/quote"
          className="px-10 py-4 bg-white text-primary text-lg font-semibold rounded-md hover:bg-gray-100 transition-colors duration-200 shadow-lg"
        >
          Get Your Free Quote Now
        </Link>
      </div>
    </section>
  );
}