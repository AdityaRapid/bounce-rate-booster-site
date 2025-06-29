
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Build the Future?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of developers and enterprises who are already shaping tomorrow with our cutting-edge technology platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-blue-600"
          >
            Schedule Demo
          </Button>
        </div>
        <p className="text-blue-100 text-sm mt-4">
          No setup required • Full API access • 30-day money-back guarantee
        </p>
      </div>
    </section>
  );
};

export default CTA;
