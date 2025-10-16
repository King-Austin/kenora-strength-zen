import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Single Plan",
    price: "₦20,000",
    description: "Perfect for individuals",
    features: [
      "Full gym access",
      "Spa services included",
      "Personal locker",
      "Free fitness assessment",
      "Access to all group classes",
    ],
    paystackLink: "#", // Replace with actual Paystack link
    popular: false,
  },
  {
    name: "Couple Plan",
    price: "₦36,000",
    description: "For you and your partner",
    features: [
      "2-person full access",
      "All Single Plan benefits",
      "Free weekend sauna",
      "Couples workout sessions",
      "Priority booking",
    ],
    paystackLink: "#", // Replace with actual Paystack link
    popular: true,
  },
  {
    name: "Family Plan",
    price: "₦72,000",
    description: "Family of 4",
    features: [
      "4-person full access",
      "All Couple Plan benefits",
      "2 free guest passes/month",
      "Family wellness programs",
      "Nutritional consultation",
    ],
    paystackLink: "#", // Replace with actual Paystack link
    popular: false,
  },
  {
    name: "Group Plan",
    price: "₦175,000",
    description: "Group of 10",
    features: [
      "10-person full access",
      "All Family Plan benefits",
      "Dedicated group sessions",
      "Corporate wellness package",
      "Monthly progress tracking",
    ],
    paystackLink: "#", // Replace with actual Paystack link
    popular: false,
  },
];

const MembershipPlans = () => {
  return (
    <section id="membership" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Membership <span className="text-gold">Plans</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your fitness journey. All plans include full access to our premium facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col border-2 transition-smooth hover:shadow-elegant hover:-translate-y-2 ${
                plan.popular ? "border-gold" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-foreground px-4 py-1 rounded-full text-sm font-bold">
                  POPULAR
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>

              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="text-gold mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  className={`w-full font-semibold ${
                    plan.popular
                      ? "bg-gold hover:bg-gold-dark text-foreground"
                      : "bg-primary hover:bg-primary/90"
                  }`}
                >
                  <a href={plan.paystackLink} target="_blank" rel="noopener noreferrer">
                    Subscribe Now
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          All payments are securely processed through Paystack. Membership begins immediately after payment confirmation.
        </p>
      </div>
    </section>
  );
};

export default MembershipPlans;
