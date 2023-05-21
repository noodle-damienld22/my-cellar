import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { FC } from "react";

const ListSelector: FC = () => {
  return (
    <>
      <IonAccordionGroup>
        <IonAccordion value="first">
          <IonItem slot="header" color="light">
            <IonLabel>Liste des catégories</IonLabel>
          </IonItem>
          <div>First Content</div>
        </IonAccordion>
      </IonAccordionGroup>
    </>
  );
};

export default ListSelector;
