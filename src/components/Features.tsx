
import { Cpu, Shield, BarChart3, Cloud, Zap, Bot } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Advanced Computing",
    description: "Leverage quantum computing and edge processing for unprecedented computational power and efficiency."
  },
  {
    icon: Shield,
    title: "Cybersecurity Excellence",
    description: "Military-grade security with AI-powered threat detection and zero-trust architecture implementation."
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Transform data into actionable insights with machine learning algorithms and real-time analytics."
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable, reliable cloud solutions with multi-region deployment and automatic failover capabilities."
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized for speed with microsecond response times and 99.99% uptime guarantee."
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "Seamlessly integrate artificial intelligence and automation to revolutionize your workflows."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cutting-Edge Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built on the latest innovations in computing, security, and artificial intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover-scale"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
