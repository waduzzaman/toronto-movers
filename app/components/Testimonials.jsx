// app/components/Testimonials.jsx
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/20/solid'; // For rating stars

// Sample testimonial data
// In a real app, this might come from a CMS or database
const testimonialsData = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Downtown Toronto",
    // imageSrc: "/testimonial-author-1.jpg", // Optional: path to author image in /public
    quote: "Toronto Movers made our move across the city completely seamless! The crew was professional, efficient, and handled all our belongings with care. Highly recommend them!",
    rating: 5,
  },
  {
    id: 2,
    name: "John B.",
    location: "Scarborough",
    // imageSrc: "/testimonial-author-2.jpg",
    quote: "I was dreading moving my small office, but Toronto Movers took all the stress away. They were on time, worked quickly, and everything arrived in perfect condition. Great value for the service.",
    rating: 5,
  },
  {
    id: 3,
    name: "Lisa P.",
    location: "Etobicoke",
    // imageSrc: "/testimonial-author-3.jpg",
    quote: "From the initial quote to the final box unloaded, the experience was top-notch. The team was friendly and communicative. I'd definitely use them again for any future moves.",
    rating: 4, // Example of a 4-star rating
  },
  // Add more testimonials as needed
];

// Helper function to render star ratings
const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <StarIcon
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        aria-hidden="true"
      />
    );
  }
  return <div className="flex items-center">{stars}</div>;
};


export default function Testimonials() {
  if (!testimonialsData || testimonialsData.length === 0) {
    return null; // Don't render the section if there are no testimonials
  }

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-800">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from satisfied customers who chose Toronto Movers for their relocation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col"
            >
              <div className="mb-4 flex items-center justify-between">
                {testimonial.imageSrc ? (
                  <div className="flex items-center space-x-3">
                    <Image
                      src={testimonial.imageSrc}
                      alt={testimonial.name}
                      width={48} // 3rem
                      height={48} // 3rem
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold font-heading text-gray-800">{testimonial.name}</p>
                      {testimonial.location && <p className="text-sm text-gray-500">{testimonial.location}</p>}
                    </div>
                  </div>
                ) : (
                  <div>
                     <p className="font-semibold font-heading text-gray-800">{testimonial.name}</p>
                     {testimonial.location && <p className="text-sm text-gray-500">{testimonial.location}</p>}
                  </div>
                )}
                {testimonial.rating && (
                  <div className="flex-shrink-0">
                    {renderStars(testimonial.rating)}
                  </div>
                )}
              </div>
              <blockquote className="text-gray-600 italic leading-relaxed flex-grow">
                “{testimonial.quote}”
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}