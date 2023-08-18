import { useState } from "react";
import DrinkForm from "./DrinkForm";
import DatePicker from "./DatePicker";

const DrinkFormModal = ({ onCancel }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleSave = (formData) => {
    // Handle form data submission
  };

  const handleDatePickerChange = (event) => {
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
