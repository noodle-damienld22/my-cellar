import { useState } from "react";
import DrinkForm from "./DrinkForm";
import DatePicker from "./DatePicker";
import { useMutation } from "react-query";
import { createDrink } from "../../requests/drinks";

const DrinkFormModal = ({ onCancel }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState("");
  const { isLoading, isError, error, mutate } = useMutation(createDrink);

  const handleSave = (formData) => {
    const finalFormData = {
      ...formData,
      date: parseInt(date) || 0,
    };
    mutate(finalFormData);
    // Handle form data submission
  };

  const handleDatePickerChange = (event) => {
    setDate(event.detail.value);
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
