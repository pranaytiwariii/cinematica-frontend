import { Building, CheckCircle, DollarSign, Upload } from 'lucide-react';

const timelineSteps = [
  {
    icon: Building,
    title: 'List Your Space',
    description: 'Create a detailed listing with high-quality photos and amenities.',
  },
  {
    icon: CheckCircle,
    title: 'Get Verified',
    description: 'Our team reviews your space to ensure it meets our quality standards.',
  },
  {
    icon: Upload,
    title: 'Go Live',
    description: 'Your space becomes visible to thousands of potential clients.',
  },
  {
    icon: DollarSign,
    title: 'Start Earning',
    description: 'Receive secure payments for every booking through our platform.',
  },
];

export default function HostTimeline() {
  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          List Your Space and Start Earning
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Turn your space into a source of income by joining CinematicaIndia
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-200 transform -translate-x-1/2" />

        <div className="space-y-12 relative">
          {timelineSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={step.title} className={`flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 ${
                    isEven ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center border-4 border-white">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                </div>

                <div className="w-full md:w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}