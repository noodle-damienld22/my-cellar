// DrinkFormModal.tsx
import { useState } from "react";
import DrinkForm from "./DrinkForm";
import DatePicker from "./DatePicker";

interface FormData {
  title: string;
  providedBy: string;
}

interface DrinkFormModalProps {
  onCancel: () => void;
}

const DrinkFormModal: React.FC<DrinkFormModalProps> = ({ onCancel }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleSave = (formData: FormData) => {
    // Handle form data submission
  };

  const handleDatePickerChange = (event: CustomEvent<any>) => {
    setSelectedDate(event.detail.value);
  };

  return (
    <>
      <DrinkForm
        datePicker={
          <DatePicker
            open={showDatePicker}
            onOpenChange={setShowDatePicker}
            onIonChange={handleDatePickerChange}
          />
        }
        onSubmit={handleSave}
        onCancel={onCancel}
      />
    </>
  );
};

export default DrinkFormModal;
