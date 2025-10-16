import { Dumbbell, Heart, Clock, Users } from "lucide-react";
import aboutImage from "@/assets/about-kenora.jpg";

const values = [
  {
    icon: Dumbbell,
    title: "Strength",
    description: "Build physical and mental resilience through expert training",
  },
  {
    icon: Heart,
    title: "Wellness",
    description: "Holistic approach to health, fitness, and lifestyle",
  },
  {
    icon: Clock,
    title: "Discipline",
    description: "Consistent excellence in everything we do",
  },
  {
    icon: Users,
    title: "Community",
    description: "Supportive environment where everyone thrives together",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Story — The Kenora <span className="text-gold">Fitness Journey</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Kenora Fitness & Spa is more than a gym. It's a wellness community redefining fitness 
                in Awka and across Nigeria. With our expansion into Kenora 2.0 and 3.0, we continue to 
                raise the standard for premium health and lifestyle experiences.
              </p>
            </div>
            
            <div className="order-1 md:order-2">
              <img 
                src={aboutImage} 
                alt="Kenora Fitness member training" 
                className="rounded-lg shadow-elegant w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="text-center p-6 rounded-lg border-2 border-border hover:border-gold transition-smooth hover:shadow-elegant group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary group-hover:bg-gold transition-smooth mb-4">
                <value.icon className="text-foreground" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-gold mb-2">5+</div>
            <div className="text-muted-foreground">Years Excellence</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-gold mb-2">2000+</div>
            <div className="text-muted-foreground">Active Members</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-gold mb-2">50+</div>
            <div className="text-muted-foreground">Expert Trainers</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-gold mb-2">3</div>
            <div className="text-muted-foreground">Premium Locations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
