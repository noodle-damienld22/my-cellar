import { Grid } from "@nextui-org/react";
import { IonButton, IonImg } from "@ionic/react";
import { useState } from "react";
import { usePhotoGallery } from "../../hook/usePhotoGallery";
import CancelButton from "../Button/CancelButton";
import ValidateButton from "../Button/ValidateButton";
import ListSelector from "./ListSelector";
import TextInput from "./TextInput";

const DrinkForm = ({ onSubmit, datePicker, onCancel }) => {
  const [name, setName] = useState("");
  const [providedBy, setProvidedBy] = useState("");
  const { photo, takePhoto } = usePhotoGallery();

  const handleSave = () => {
    const formData = {
      name,
      providedBy,
      photo,
    };
    onSubmit(formData);
  };

  const handleTakePhoto = () => {
    takePhoto();
  };

  const cancelForm = () => {
    setName("");
    setProvidedBy("");
    onCancel();
  };

  return (
    <>
      <Grid.Container gap={2} direction="column" alignContent="flex-start">
        <Grid>
          <TextInput
            label="Nom de la bouteille : "
            placeHolder="Exemple: Bordeaux"
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid>
          <ListSelector />
        </Grid>
        <Grid>{datePicker}</Grid>
        <Grid>
          <IonButton onClick={handleTakePhoto}>Prendre une photo</IonButton>
          {photo && <IonImg src={photo} />}
        </Grid>
        <Grid>
          <TextInput
            label="Offert par :"
            placeHolder="Exemple: Nom de la personne"
            onChange={(e) => setProvidedBy(e.target.value)}
          />
        </Grid>
      </Grid.Container>
      <Grid.Container
        direction="row"
        gap={2}
        alignItems="center"
        justify="center"
      >
        <Grid>
          <CancelButton onClick={cancelForm} />
        </Grid>
        <Grid>
          <ValidateButton onClick={handleSave} />
        </Grid>
      </Grid.Container>
    </>
  );
};

export default DrinkForm;
