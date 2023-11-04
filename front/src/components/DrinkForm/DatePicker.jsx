import { IonDatetimeButton, IonModal, IonDatetime } from '@ionic/react';

const DatePicker = ({ open, onOpenChange, onIonChange, value }) => {
  return (
    <>
      <IonDatetimeButton datetime="datetime" onClick={() => onOpenChange(true)}></IonDatetimeButton>
      <IonModal isOpen={open} onDidDismiss={() => onOpenChange(false)} keepContentsMounted={true}>
        <IonDatetime id="datetime" onIonChange={onIonChange} presentation="date" value={value}></IonDatetime>
      </IonModal>
    </>
  );
};

export default DatePicker;
