import { Clock } from 'lucide-react';

interface TimeSlotPickerProps {
  selectedTimeSlot: string | null;
  onChange: (timeSlot: string | null) => void;
  availableTimeSlots: string[];
}

export default function TimeSlotPicker({ selectedTimeSlot, onChange, availableTimeSlots }: TimeSlotPickerProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Select Time Slot</label>
      <div className="grid grid-cols-2 gap-2">
        {availableTimeSlots.map((slot) => (
          <button
            key={slot}
            onClick={() => onChange(slot)}
            className={`flex items-center justify-center px-4 py-2 border rounded-md text-sm ${
              selectedTimeSlot === slot
                ? 'border-purple-500 bg-purple-50 text-purple-700'
                : 'border-gray-300 hover:border-purple-500'
            }`}
          >
            <Clock className="w-4 h-4 mr-2" />
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
}