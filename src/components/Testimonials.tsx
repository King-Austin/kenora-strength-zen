import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amaka O.",
    role: "Business Owner",
    content: "Kenora Fitness completely transformed my health journey. The trainers are world-class and truly invested in your success.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    name: "Emmanuel K.",
    role: "Software Engineer",
    content: "The spa experience is unmatched. I leave feeling brand new every time. Best investment in my wellness routine.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    name: "Chioma N.",
    role: "Marketing Executive",
    content: "From the state-of-the-art equipment to the friendly community, everything about Kenora exceeds expectations. Highly recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    name: "David A.",
    role: "Entrepreneur",
    content: "Best fitness decision I've made. The family plan is perfect for us, and the facilities are always clean and well-maintained.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Member <span className="text-gold">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our community has to say about their Kenora experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-border shadow-elegant">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-20 h-20 rounded-full object-cover mb-6 border-4 border-gold"
                />
                
                <div className="flex gap-1 mb-4">
                  {Array(current.rating).fill(null).map((_, i) => (
                    <Star key={i} className="fill-gold text-gold" size={20} />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl font-light mb-6 leading-relaxed">
                  "{current.content}"
                </blockquote>

                <div>
                  <div className="font-bold text-lg">{current.name}</div>
                  <div className="text-muted-foreground">{current.role}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === currentIndex ? "bg-gold w-8" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
