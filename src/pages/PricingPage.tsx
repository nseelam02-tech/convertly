import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";

const PricingPage = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for occasional use",
      features: [
        "3 conversions per day",
        "Basic file formats",
        "Standard processing speed",
        "File size limit: 25MB",
        "Email support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Premium",
      price: "₹799",
      period: "per month",
      description: "For regular users and professionals",
      features: [
        "Unlimited conversions",
        "All file formats",
        "Priority processing",
        "File size limit: 100MB",
        "Batch conversions",
        "API access",
        "Priority support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For teams and businesses",
      features: [
        "Everything in Premium",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "On-premise deployment",
        "Custom file size limits",
        "Team management"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that fits your needs. Start with our free tier 
              and upgrade as you grow.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-card rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'border-primary shadow-lg scale-105 bg-primary-light' 
                    : 'border-border shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Zap className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    {plan.period !== "contact us" && (
                      <span className="text-muted-foreground ml-2">
                        /{plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'btn-hero' 
                      : 'btn-secondary'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  How secure are my files?
                </h3>
                <p className="text-muted-foreground">
                  All files are encrypted during upload and processing. 
                  We automatically delete all files after 15 minutes.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  What file formats do you support?
                </h3>
                <p className="text-muted-foreground">
                  We support all major formats including PDF, Word, Excel, 
                  PowerPoint, JPG, PNG, MP4, MP3, and many more.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Can I cancel my subscription anytime?
                </h3>
                <p className="text-muted-foreground">
                  Yes, you can cancel your subscription at any time. 
                  You'll continue to have access until the end of your billing period.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Is there an API available?
                </h3>
                <p className="text-muted-foreground">
                  Yes, Premium and Enterprise plans include API access 
                  for integration with your applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;