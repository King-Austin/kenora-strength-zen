import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Single Package",
    registrationFee: "₦45,000",
    description: "Registration fee for the first month",
    features: [
      { duration: "Daily (one session)", price: "₦5,000" },
      { duration: "Weekly", price: "₦25,000" },
      { duration: "Monthly", price: "₦30,000" },
      { duration: "3 Months", price: "₦81,000" },
      { duration: "6 Months", price: "₦153,000" },
      { duration: "12 Months", price: "₦276,000" },
    ],
    paystackLink: "#",
    popular: false,
  },
  {
    name: "Couples Package",
    registrationFee: "₦40,000",
    description: "Registration fee each for the first month",
    features: [
      { duration: "Daily (one session)", price: "₦9,000" },
      { duration: "Weekly", price: "₦44,000" },
      { duration: "Monthly", price: "₦54,000" },
      { duration: "3 Months", price: "₦147,000" },
      { duration: "6 Months", price: "₦288,000" },
      { duration: "12 Months", price: "₦552,000" },
    ],
    paystackLink: "#",
    popular: true,
  },
  {
    name: "Family of Four (4)",
    registrationFee: "₦38,000",
    description: "Registration fee each for the first month",
    features: [
      { duration: "Daily", price: "₦16,000" },
      { duration: "Weekly", price: "₦88,000" },
      { duration: "Monthly", price: "₦108,000" },
      { duration: "3 Months", price: "₦300,000" },
      { duration: "6 Months", price: "₦588,000" },
      { duration: "12 Months", price: "₦1,128,000" },
    ],
    paystackLink: "#",
    popular: false,
  },
  {
    name: "Group of Ten (10)",
    registrationFee: "₦37,000",
    description: "Registration fee each for the first month",
    features: [
      { duration: "Daily", price: "₦40,000" },
      { duration: "Weekly", price: "₦245,000" },
      { duration: "Monthly", price: "₦265,000" },
      { duration: "3 Months", price: "₦715,000" },
      { duration: "6 Months", price: "₦1,470,000" },
      { duration: "12 Months", price: "₦2,880,000" },
    ],
    paystackLink: "#",
    popular: false,
  },
];

const additionalServices = [
  {
    name: "Massage Chair",
    options: [
      { duration: "5 Minutes", price: "₦3,500" },
      { duration: "10 Minutes", price: "₦5,000" },
      { duration: "15 Minutes", price: "₦7,000" },
      { duration: "20 Minutes", price: "₦8,000" },
    ],
  },
  {
    name: "Snooker",
    options: [
      { duration: "Per game", price: "₦1,000" },
    ],
  },
];

const MembershipPlans = () => {
  return (
    <section id="membership" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Kenora Fitness <span className="text-gold">Packages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your fitness journey. All plans include full access to our premium facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
                <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                <div className="mt-3">
                  <div className="text-2xl font-bold text-gold">{plan.registrationFee}</div>
                  <CardDescription className="text-xs mt-1.5">
                    {plan.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="flex-grow">
                <ul className="space-y-2.5">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex justify-between items-center text-sm border-b border-border/50 pb-2 last:border-0">
                      <span className="text-muted-foreground text-xs">{feature.duration}</span>
                      <span className="font-semibold">{feature.price}</span>
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

        {/* Additional Services */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            Additional <span className="text-gold">Services</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((service) => (
              <Card key={service.name} className="border-2 border-border hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {service.options.map((option, idx) => (
                      <li key={idx} className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground text-xs">{option.duration}</span>
                        <span className="font-semibold">{option.price}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          All payments are securely processed through Paystack. Membership begins immediately after payment confirmation.
        </p>
      </div>
    </section>
  );
};

export default MembershipPlans;
