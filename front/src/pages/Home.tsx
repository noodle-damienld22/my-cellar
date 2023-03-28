import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import HelloWorld from "../components/HelloWorld";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Cellar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <HelloWorld />
      </IonContent>
    </IonPage>
  );
};

export default Home;
