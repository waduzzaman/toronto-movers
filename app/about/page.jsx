// app/about/page.jsx

export const metadata = {
  title: "About Us",
  description: "Learn more about Toronto Movers, our mission, and our dedicated team of professional movers in Toronto.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold font-heading mb-6 text-center">About Toronto Movers</h1>
      <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-6">
        <p>
          Welcome to Toronto Movers, your premier choice for all moving needs within the Greater Toronto Area.
          Founded with the mission to provide exceptional, stress-free moving experiences, we've grown
          to become one of Toronto's most trusted moving companies.
        </p>
        <p>
          Our team consists of highly trained, experienced, and courteous professionals who understand
          the intricacies of moving in a bustling city like Toronto. From navigating tight downtown streets
          to carefully handling delicate items in suburban homes, we have the expertise to manage it all.
        </p>
        <h2 className="text-2xl font-bold font-heading mt-8 mb-4">Our Mission</h2>
        <p>
          To deliver reliable, efficient, and affordable moving services to the residents and businesses of Toronto,
          ensuring every move is handled with the utmost care and professionalism. We aim to exceed customer
          expectations and build lasting relationships based on trust and quality service.
        </p>
        {/* ... (rest of the content from the TS version) ... */}
        <p className="mt-8">
          Whether you're moving across the street or across the city, choose Toronto Movers for a seamless transition.
          Contact us today to learn more about how we can help with your next move!
        </p>
      </div>
    </div>
  );
}