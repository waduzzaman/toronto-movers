// app/components/Services.jsx
import { HomeIcon, BuildingOffice2Icon, CubeIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline';

const services = [
  {
    icon: HomeIcon,
    title: "Residential Moving",
    description: "Seamless home and apartment moves across Toronto. We handle everything from condos to large houses with care.",
  },
  {
    icon: BuildingOffice2Icon,
    title: "Commercial Moving",
    description: "Efficient office and business relocations with minimal downtime. We understand your business needs.",
  },
  {
    icon: CubeIcon,
    title: "Packing & Unpacking",
    description: "Professional packing services to save you time and ensure your belongings are safe. Full and partial packing options.",
  },
  {
    icon: ArchiveBoxIcon,
    title: "Storage Solutions",
    description: "Secure short-term and long-term storage options for your items during your transition.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-800">Our Moving Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to make your Toronto move smooth and worry-free.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold font-heading text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}