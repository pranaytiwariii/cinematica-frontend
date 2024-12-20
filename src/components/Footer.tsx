import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const navigation = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Blog', href: '/blog' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Safety', href: '/safety' },
    { name: 'Cancellation', href: '/cancellation' },
    { name: 'COVID-19', href: '/covid' },
  ],
  hosts: [
    { name: 'List Your Space', href: '/list-space' },
    { name: 'Host Guidelines', href: '/host-guidelines' },
    { name: 'Host Insurance', href: '/host-insurance' },
    { name: 'Success Stories', href: '/success-stories' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};

const social = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center w-80 space-x-2 mb-4">
             <img src="/logo_white.png" alt="" />
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              India's premier platform for booking creative spaces. From photography studios to event venues,
              we connect creators with unique locations.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-2" />
                <span>123 Creative Hub, Mumbai 400001</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-2" />
                <span>+91 (22) 1234 5678</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2" />
                <span>contact@cinematicaindia.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-400 hover:text-white transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-400 hover:text-white transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">For Hosts</h3>
            <ul className="space-y-3">
              {navigation.hosts.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-400 hover:text-white transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} CinematicaIndia. All rights reserved.</p>
              <div className="flex space-x-6">
                {navigation.legal.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="hover:text-white transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}