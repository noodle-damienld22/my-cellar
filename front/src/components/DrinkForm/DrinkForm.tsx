import { Grid } from "@nextui-org/react";
import { IonButton, IonImg } from "@ionic/react";
import { FC, useState } from "react";
import { usePhotoGallery } from "../../hook/usePhotoGallery";
import CancelButton from "../Button/CancelButton";
import ValidateButton from "../Button/ValidateButton";
import ListSelector from "./ListSelector";
import TextInput from "./TextInput";
import HeaderModal from "./HeaderModal";

interface DrinkFormProps {
  onSubmit: (formData: FormData) => void;
  datePicker: JSX.Element;
  onCancel: () => void;
}

interface FormData {
  title: string;
  providedBy: string;
}

const DrinkForm: FC<DrinkFormProps> = ({ onSubmit, datePicker, onCancel }) => {
  const [title, setTitle] = useState("");
  const [providedBy, setProvidedBy] = useState("");
  const { photo, takePhoto } = usePhotoGallery();

  const handleSave = () => {
    const formData: FormData = {
      title,
      providedBy,
    };
    onSubmit(formData);
  };

  const handleTakePhoto = () => {
    takePhoto();
  };

  const cancelForm = () => {
    setTitle("");
    setProvidedBy("");
    onCancel();
  };

  return (
    <>
      <Grid.Container gap={1} justify={"flex-end"}>
        <HeaderModal onClose={cancelForm} />
      </Grid.Container>
      <Grid.Container gap={2} direction="column" alignContent="center">
        <Grid>
          <TextInput
            label="Nom de la bouteille : "
            placeHolder="Exemple: Bordeaux"
            onChange={(e) => setTitle(e.target.value)}
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
