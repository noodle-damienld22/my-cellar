import { IonContent, IonPage, IonButton, IonModal } from "@ionic/react";
import { useState } from "react";
import DrinkFormModal from "../components/DrinkForm/DrinkFormModal";
import Header from "../components/Header";
import { PlusCircle } from "react-bootstrap-icons";

const DrinkListPage: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonButton onClick={() => setOpenModal(true)}>
          <PlusCircle size={30} />
        </IonButton>

        <IonModal isOpen={openModal} onDidDismiss={() => setOpenModal(false)}>
          <DrinkFormModal />
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default DrinkListPage;