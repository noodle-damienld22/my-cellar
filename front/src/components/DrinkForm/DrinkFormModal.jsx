import { useEffect, useState } from 'react';
import DrinkForm from './DrinkForm';
import DatePicker from './DatePicker';
import { createDrink, replaceDrink, uploadPicture } from '../../requests/drinks';

const DrinkFormModal = ({ onCancel, onSuccess, drinkToEdit, fetchDrinks }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null); // État local pour le DatePicker
  const [errorMessage, setErrorMessage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (drinkToEdit) {
      setIsEditing(true);
      if (drinkToEdit.date) {
        const date = new Date(drinkToEdit.date);
        setSelectedDate(date.toISOString());
      }
    }
  }, [drinkToEdit]);

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
      if (isEditing) {
        await replaceDrink(drinkToEdit._id, formData);
      } else {
        await createDrink(formData);
      }
      onSuccess();
      fetchDrinks();
    } catch (error) {
      console.error('Erreur lors de la création de la boisson:', error);
      setErrorMessage('Erreur lors de la création. Veuillez réessayer.');
    }
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
            value={selectedDate}
          />
        }
        onSubmit={handleSave}
        onCancel={onCancel}
        drinkToEdit={drinkToEdit}
      />
      {errorMessage && <div style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>{errorMessage}</div>}
    </>
  );
};

export default DrinkFormModal;
