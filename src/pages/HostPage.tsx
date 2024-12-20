import { Link } from 'react-router-dom';
import { Building2, DollarSign, Calendar, Shield } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Studio Owner',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote:
      "SpaceShare has transformed my business. I've seen a 200% increase in bookings since joining the platform.",
  },
  {
    name: 'Rahul Verma',
    role: 'Event Space Host',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote:
      "The platform makes it easy to manage bookings and communicate with clients. It's been a game-changer.",
  },
];

const steps = [
  {
    icon: Building2,
    title: 'List Your Space',
    description:
      'Create a detailed listing showcasing your space with high-quality photos and amenities.',
  },
  {
    icon: Calendar,
    title: 'Set Your Schedule',
    description:
      "Define your availability and pricing. You're always in control of when your space is available.",
  },
  {
    icon: Shield,
    title: 'Get Verified',
    description:
      'Our verification process ensures trust and safety for all users on the platform.',
  },
  {
    icon: DollarSign,
    title: 'Start Earning',
    description:
      'Receive secure payments and grow your business with our platform.',
  },
];

export default function HostPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative bg-purple-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">
                Turn Your Space into a Source of Income
              </h1>
              <p className="text-xl mb-8 text-purple-100">
                Join thousands of hosts earning extra income by sharing their
                spaces with creators and event organizers.
              </p>
              <Link
                to="/host/onboarding"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-white hover:bg-purple-50"
              >
                Start Hosting Today
              </Link>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-purple-800 p-4 rounded-lg">
                    <h3 className="text-2xl font-bold">₹50K+</h3>
                    <p className="text-purple-200">Average Monthly Earnings</p>
                  </div>
                  <div className="bg-purple-800 p-4 rounded-lg">
                    <h3 className="text-2xl font-bold">1000+</h3>
                    <p className="text-purple-200">Active Hosts</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-purple-800 p-4 rounded-lg">
                    <h3 className="text-2xl font-bold">24/7</h3>
                    <p className="text-purple-200">Host Support</p>
                  </div>
                  <div className="bg-purple-800 p-4 rounded-lg">
                    <h3 className="text-2xl font-bold">100%</h3>
                    <p className="text-purple-200">Secure Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">
          How to Start Hosting
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-purple-100" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            Success Stories from Our Hosts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Earning with Your Space?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join our community of successful hosts today.
          </p>
          <Link
            to="/host/onboarding"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-white hover:bg-purple-50"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
}
