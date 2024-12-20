import { Calendar } from 'lucide-react';

interface DatePickerProps {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
  availableDates: Date[];
}

export default function DatePicker({ selectedDate, onChange, availableDates }: DatePickerProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Select Date</label>
      <div className="relative">
        <input
          type="date"
          value={selectedDate?.toISOString().split('T')[0] || ''}
          onChange={(e) => onChange(e.target.value ? new Date(e.target.value) : null)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
          min={new Date().toISOString().split('T')[0]}
        />
        <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
}