
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Developer",
    price: "$99",
    period: "/month",
    description: "Perfect for individual developers and small projects",
    features: [
      "Up to 10 API calls/second",
      "50GB cloud storage",
      "Basic AI models access",
      "Community support",
      "Standard encryption",
      "Development sandbox"
    ],
    popular: false
  },
  {
    name: "Enterprise",
    price: "$499",
    period: "/month",
    description: "Advanced features for growing tech companies",
    features: [
      "Up to 1000 API calls/second",
      "500GB cloud storage",
      "Advanced AI & ML models",
      "Priority technical support",
      "Custom integrations",
      "Advanced analytics",
      "Multi-region deployment",
      "Dedicated account manager"
    ],
    popular: true
  },
  {
    name: "Scale",
    price: "$1,999",
    period: "/month",
    description: "For large enterprises and mission-critical applications",
    features: [
      "Unlimited API calls",
      "5TB+ cloud storage",
      "Quantum computing access",
      "24/7 dedicated support",
      "White-label solutions",
      "Custom AI model training",
      "Enterprise-grade security",
      "Global edge deployment",
      "SLA guarantees"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technology That Scales With You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right technology package for your innovation needs. All plans include core features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}
                size="lg"
              >
                Start Building
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
