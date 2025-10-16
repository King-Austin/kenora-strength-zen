import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, TrendingUp, Users2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Partnerships = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", company: "", email: "", message: "" });
  };

  const benefits = [
    {
      icon: Building2,
      title: "Corporate Wellness",
      description: "Customized fitness programs for your entire team",
    },
    {
      icon: TrendingUp,
      title: "Boost Productivity",
      description: "Healthier employees perform better and miss fewer days",
    },
    {
      icon: Users2,
      title: "Team Building",
      description: "Strengthen relationships through group fitness activities",
    },
  ];

  return (
    <section id="partnerships" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Corporate <span className="text-gold">Wellness</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Train Your Team. Strengthen Your Brand. Invest in your employees' health and watch productivity soar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="border-2 border-border hover:border-gold transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4">
                  <benefit.icon className="text-gold" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto border-2 border-border shadow-elegant">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Get Started Today</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-2"
                />
              </div>
              <div>
                <Input
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                  className="border-2"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-2"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about your needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="border-2 min-h-[120px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gold hover:bg-gold-dark text-foreground font-semibold"
                size="lg"
              >
                Partner With Us
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Partnerships;
