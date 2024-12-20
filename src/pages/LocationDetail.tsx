import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, MapPin, Star, User, Shield, Phone, Mail } from 'lucide-react';
import { spaces } from '../data/spaces';
import { hosts } from '../data/hosts';
import DatePicker from '../components/DatePicker';
import TimeSlotPicker from '../components/TimeSlotPicker';
import ImageGallery from '../components/ImageGallery';

export default function LocationDetail() {
  const { locationId } = useParams();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  const space = spaces.find(s => s.id === Number(locationId));
  if (!space) return <div>Location not found</div>;

  const host = hosts.find(h => h.id === space.hostId);
  if (!host) return <div>Host information not available</div>;

  const handleBooking = () => {
    if (!selectedDate || !selectedTimeSlot) {
      alert('Please select both date and time slot');
      return;
    }
    // Handle booking logic
    console.log('Booking:', { space, selectedDate, selectedTimeSlot });
  };

  return (
    <div className="pt-20">
      <ImageGallery images={space.gallery} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Location Details */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold text-gray-900">{space.title}</h1>
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-lg font-semibold">{space.rating}</span>
              </div>
            </div>

            <p className="mt-2 flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2" />
              {space.location}
            </p>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">About this space</h2>
              <p className="text-gray-600 whitespace-pre-line">{space.fullDescription}</p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 gap-4">
                {space.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center text-gray-600">
                    <Shield className="w-5 h-5 mr-2" />
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Host Information</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <img
                    src={host.avatar}
                    alt={host.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{host.name}</h3>
                    <p className="text-gray-600">Host since {host.memberSince}</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="flex items-center text-gray-600">
                    <Phone className="w-5 h-5 mr-2" />
                    {host.phone}
                  </p>
                  <p className="flex items-center text-gray-600">
                    <Mail className="w-5 h-5 mr-2" />
                    {host.email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-gray-900 mb-4">
                  ₹{space.price} <span className="text-lg font-normal text-gray-600">/ day</span>
                </div>

                <div className="space-y-4">
                  <DatePicker
                    selectedDate={selectedDate}
                    onChange={setSelectedDate}
                    availableDates={space.availableDates}
                  />

                  <TimeSlotPicker
                    selectedTimeSlot={selectedTimeSlot}
                    onChange={setSelectedTimeSlot}
                    availableTimeSlots={space.availableTimeSlots}
                  />

                  <button
                    onClick={handleBooking}
                    className="w-full btn"
                    disabled={!selectedDate || !selectedTimeSlot}
                  >
                    Book Now
                  </button>
                </div>

                <div className="mt-4 text-sm text-gray-500">
                  <p>Free cancellation up to 24 hours before booking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}