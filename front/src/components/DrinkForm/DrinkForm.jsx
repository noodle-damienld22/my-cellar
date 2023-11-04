import { Grid } from '@nextui-org/react';
import { IonButton, IonContent, IonImg } from '@ionic/react';
import { useState, useEffect } from 'react'; // Importez useEffect
import { usePhotoGallery } from '../../hook/usePhotoGallery';
import CancelButton from '../Button/CancelButton';
import ValidateButton from '../Button/ValidateButton';
import ListSelector from './ListSelector';
import TextInput from './TextInput';
import HeaderModal from './HeaderModal';

const DrinkForm = ({ onSubmit, datePicker, onCancel, drinkToEdit }) => {
  const [name, setName] = useState('');
  const [providedBy, setProvidedBy] = useState('');
  const { image, takePhoto } = usePhotoGallery();

  useEffect(() => {
    if (drinkToEdit) {
      setName(drinkToEdit.name || '');
      setProvidedBy(drinkToEdit.providedBy || '');
    }
  }, [drinkToEdit]);

  const handleSave = () => {
    const formData = {
      name,
      providedBy,
      image,
    };
    onSubmit(formData);
  };

  const handleTakePhoto = () => {
    takePhoto();
  };

  const cancelForm = () => {
    setName('');
    setProvidedBy('');
    onCancel();
  };

  return (
    <IonContent>
      <Grid.Container gap={1} justify={'flex-end'}>
        <HeaderModal onClose={cancelForm} />
      </Grid.Container>
      <Grid.Container gap={2} direction="column" alignContent="center">
        <Grid>
          <TextInput
            label="Nom de la bouteille : "
            placeHolder="Exemple: Bordeaux"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Grid>
        <Grid>
          <ListSelector />
        </Grid>
        <Grid>{datePicker}</Grid>
        <Grid>
          <IonButton onClick={handleTakePhoto}>Prendre une photo</IonButton>
          {image && <IonImg src={image} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />}
        </Grid>
        <Grid>
          <TextInput
            label="Offert par :"
            placeHolder="Exemple: Nom de la personne"
            onChange={(e) => setProvidedBy(e.target.value)}
            value={providedBy}
          />
        </Grid>
      </Grid.Container>
      <Grid.Container direction="row" gap={2} alignItems="center" justify="center">
        <Grid>
          <CancelButton onClick={cancelForm} />
        </Grid>
        <Grid>
          <ValidateButton onClick={handleSave} />
        </Grid>
      </Grid.Container>
    </IonContent>
  );
};

export default DrinkForm;
