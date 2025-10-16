import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroGym from "@/assets/hero-gym.jpg";
import heroSpa from "@/assets/hero-spa.jpg";
import heroClass from "@/assets/hero-class.jpg";

const slides = [
  {
    image: heroGym,
    title: "Train Hard. Stay Strong.",
    subtitle: "Transform your body and mind",
    cta1: "Join Now",
    cta2: "View Memberships",
  },
  {
    image: heroSpa,
    title: "Relax. Recover. Rejuvenate.",
    subtitle: "Experience premium wellness",
    cta1: "Book a Spa Session",
    cta2: "Explore Services",
  },
  {
    image: heroClass,
    title: "Fitness Meets Lifestyle.",
    subtitle: "Join our vibrant community",
    cta1: "Explore Kenora",
    cta2: "View Classes",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 animate-fade-in">
              <h2 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl mb-8 font-light">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => scrollToSection("membership")}
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-foreground font-bold text-lg px-8"
                >
                  {slide.cta1}
                </Button>
                <Button
                  onClick={() => scrollToSection(index === 1 ? "contact" : "membership")}
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-foreground font-semibold text-lg px-8 backdrop-blur-sm"
                >
                  {slide.cta2}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-smooth backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-smooth backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-smooth ${
              index === currentSlide ? "bg-gold w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
