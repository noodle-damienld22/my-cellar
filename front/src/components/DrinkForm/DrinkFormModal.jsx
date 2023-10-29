import { useState } from 'react';
import DrinkForm from './DrinkForm';
import DatePicker from './DatePicker';
import { createDrink, uploadPicture } from '../../requests/drinks';

const DrinkFormModal = ({ onCancel, onSuccess }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSave = async (formData) => {
    formData.date = new Date(selectedDate).getTime();

    try {
      if (formData.image) {
        try {
          const imagePath = await uploadPicture(formData.image);
          formData.image = imagePath;
        } catch (error) {
          console.error("Erreur lors de l'upload de l'image:", error);
          setErrorMessage("Erreur lors de l'upload de l'image. Veuillez réessayer.");
          return;
        }
      }
      const response = await createDrink(formData);
      console.log('response', response);
      onSuccess();
    } catch (error) {
      console.error('Erreur lors de la création de la boisson:', error);
      setErrorMessage('Erreur lors de la création . Veuillez réessayer.');
    }
  };

  const handleDatePickerChange = (event) => {
    setSelectedDate(event.detail.value);
  };

  return (
    <>
      <DrinkForm
        datePicker={
          <DatePicker open={showDatePicker} onOpenChange={setShowDatePicker} onIonChange={handleDatePickerChange} />
        }
        onSubmit={handleSave}
        onCancel={onCancel}
      />
      {errorMessage && <div style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>{errorMessage}</div>}
    </>
  );
};

export default DrinkFormModal;
