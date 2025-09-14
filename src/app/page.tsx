// components
import { Footer, Navbar } from "@/components";

// sections
import Hero from "./hero";
import SponsoredBy from "./sponsored-by";
import AboutEvent from "./about-event";
import OurStats from "./our-stats";
import EventContent from "./event-content";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <AboutEvent />
      <OurStats />
      <EventContent />
      <SponsoredBy /> */}
      <Footer />
    </>
  );
}
