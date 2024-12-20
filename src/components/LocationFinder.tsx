import { Target, Calendar, CreditCard, Star } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Find Your Perfect Space',
    description: 'Use our smart filters to discover locations that match your exact requirements - from lighting to acoustics.'
  },
  {
    icon: Calendar,
    title: 'Flexible Booking',
    description: 'Book by the hour, day, or week. Our spaces are available when you need them.'
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description: 'Safe and secure payment processing with transparent pricing and no hidden fees.'
  },
  {
    icon: Star,
    title: 'Verified Locations',
    description: 'Every space is verified by our team to ensure quality and accuracy of listings.'
  }
];

export default function LocationFinder() {
  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          How to Find Your Perfect Location
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the perfect space for your next project with our easy-to-use platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}