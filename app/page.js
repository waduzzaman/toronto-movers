// app/page.jsx
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import CallToAction from "./components/CallToAction";
import Testimonials from "./components/Testimonials";

// SEO for specific page
export const metadata = {
  title: "Toronto Movers | Reliable & Affordable Moving Services",
  description: "Toronto's top choice for residential and commercial moving. We offer packing, storage, and stress-free relocation services. Get your free moving quote!",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </>
  );
}