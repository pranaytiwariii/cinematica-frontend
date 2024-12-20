import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Music2, Mic, Users, Upload, ChevronRight, ChevronLeft } from 'lucide-react';

const categories = [
  { id: 'photography', icon: Camera, label: 'Photography Studio' },
  { id: 'music', icon: Music2, label: 'Music Production' },
  { id: 'podcast', icon: Mic, label: 'Podcast Studio' },
  { id: 'outdoor-events', icon: Users, label: 'Outdoor Events' },
];

const amenitiesOptions = [
  'Air Conditioning',
  'High-Speed WiFi',
  'Professional Lighting',
  'Sound Equipment',
  'Makeup Room',
  'Parking',
  'Green Room',
  'Security',
  '24/7 Access',
  'Loading Dock',
  'Restrooms',
  'Kitchen',
];

interface FormData {
  title: string;
  description: string;
  fullDescription: string;
  price: number;
  images: string[];
  category: string;
  amenities: string[];
  location: string;
  availableTimeSlots: string[];
}

export default function HostOnboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    fullDescription: '',
    price: 0,
    images: [],
    category: '',
    amenities: [],
    location: '',
    availableTimeSlots: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const imageUrls = Array.from(files).map(file => URL.createObjectURL(file));
      setFormData(prev => ({ ...prev, images: [...prev.images, ...imageUrls] }));
    }
  };

  const handleAmenityToggle = (amenity: string) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/demoprofile');
  };

  const handleNextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Let's start with the basics</h2>
            <div className="grid grid-cols-2 gap-4">
              {categories.map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  onClick={() => {
                    setFormData(prev => ({ ...prev, category: id }));
                    handleNextStep();
                  }}
                  className={`p-6 border rounded-lg flex flex-col items-center space-y-3 transition-colors ${
                    formData.category === id
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-500'
                  }`}
                >
                  <Icon className="w-8 h-8 text-purple-600" />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Tell us about your space</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="e.g., Modern Photography Studio in South Mumbai"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Short Description</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Brief overview of your space"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Detailed Description</label>
                <textarea
                  name="fullDescription"
                  value={formData.fullDescription}
                  onChange={handleInputChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Provide a detailed description of your space"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Upload photos of your space</h2>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <Upload className="w-12 h-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">Drag and drop images here, or click to select files</p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="mt-4"
                  />
                </div>
              </div>

              {formData.images.length > 0 && (
                <div className="grid grid-cols-3 gap-4">
                  {formData.images.map((url, index) => (
                    <div key={index} className="relative aspect-square">
                      <img
                        src={url}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <button
                        onClick={() => setFormData(prev => ({
                          ...prev,
                          images: prev.images.filter((_, i) => i !== index)
                        }))}
                        className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Location and Amenities</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="e.g., Andheri West, Mumbai"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {amenitiesOptions.map(amenity => (
                    <button
                      key={amenity}
                      type="button"
                      onClick={() => handleAmenityToggle(amenity)}
                      className={`p-3 border rounded-md text-sm transition-colors ${
                        formData.amenities.includes(amenity)
                          ? 'border-purple-500 bg-purple-50 text-purple-700'
                          : 'border-gray-200 hover:border-purple-500'
                      }`}
                    >
                      {amenity}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Pricing and Availability</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Daily Rate (₹)</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  min="0"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Available Time Slots</label>
                <div className="space-y-2">
                  {['9 AM - 1 PM', '2 PM - 6 PM', 'Full Day (9 AM - 6 PM)'].map(slot => (
                    <label key={slot} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.availableTimeSlots.includes(slot)}
                        onChange={() => {
                          setFormData(prev => ({
                            ...prev,
                            availableTimeSlots: prev.availableTimeSlots.includes(slot)
                              ? prev.availableTimeSlots.filter(s => s !== slot)
                              : [...prev.availableTimeSlots, slot]
                          }));
                        }}
                        className="rounded text-purple-600 focus:ring-purple-500"
                      />
                      <span>{slot}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Review and Submit</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Category</h3>
                <p className="text-gray-700">{categories.find(cat => cat.id === formData.category)?.label}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Title</h3>
                <p className="text-gray-700">{formData.title}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Description</h3>
                <p className="text-gray-700">{formData.description}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Full Description</h3>
                <p className="text-gray-700">{formData.fullDescription}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Price</h3>
                <p className="text-gray-700">₹{formData.price}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Location</h3>
                <p className="text-gray-700">{formData.location}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Amenities</h3>
                <p className="text-gray-700">{formData.amenities.join(', ')}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Available Time Slots</h3>
                <p className="text-gray-700">{formData.availableTimeSlots.join(', ')}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Images</h3>
                <div className="grid grid-cols-3 gap-4">
                  {formData.images.map((url, index) => (
                    <img key={index} src={url} alt={`Upload ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold text-gray-900">List Your Space</h1>
              <span className="text-sm text-gray-500">Step {step} of 6</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 6) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {renderStep()}

            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="flex items-center text-gray-600 hover:text-gray-900"
                >
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  Back
                </button>
              )}
              
              {step < 6 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="ml-auto flex items-center btn"
                >
                  Next
                  <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto btn"
                >
                  Submit Listing
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}