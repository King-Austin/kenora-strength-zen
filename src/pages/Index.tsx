import Navigation from "@/components/Navigation";
import HeroSlider from "@/components/HeroSlider";
import MembershipPlans from "@/components/MembershipPlans";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Partnerships from "@/components/Partnerships";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSlider />
      <About />
      <MembershipPlans />
      <Gallery />
      <Testimonials />
      <Partnerships />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
