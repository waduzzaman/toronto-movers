// app/components/WhyChooseUs.jsx
import { CheckCircleIcon, ShieldCheckIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/solid';

const benefits = [
  {
    icon: UserGroupIcon,
    title: "Experienced Toronto Team",
    description: "Our movers are local, highly trained, and dedicated to providing top-notch service."
  },
  {
    icon: ShieldCheckIcon,
    title: "Fully Licensed & Insured",
    description: "Peace of mind knowing your belongings are protected throughout the moving process."
  },
  {
    icon: CurrencyDollarIcon,
    title: "Transparent & Affordable Pricing",
    description: "No hidden fees. Get a clear, upfront quote for your specific moving needs in Toronto."
  },
  {
    icon: CheckCircleIcon,
    title: "Reliable & Punctual",
    description: "We value your time. Count on us to be on schedule and efficient."
  }
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 lg:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-800">Why Choose Toronto Movers?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We're not just another moving company; we're your partners in making your Toronto relocation a success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <benefit.icon className="h-10 w-10 text-slate-800" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold font-heading text-gray-800 mb-1">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}