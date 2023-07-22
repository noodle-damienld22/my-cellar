// DatePicker.tsx
import { FC } from "react";
import { IonDatetimeButton, IonModal, IonDatetime } from "@ionic/react";

interface DatePickerProps {
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onIonChange: (event: CustomEvent<any>) => void;
}

const DatePicker: FC<DatePickerProps> = ({
  open,
  onOpenChange,
  onIonChange,
}) => {
  return (
    <>
      <IonDatetimeButton
        datetime="datetime"
        onClick={() => onOpenChange(true)}
      ></IonDatetimeButton>
      <IonModal
        isOpen={open}
        onDidDismiss={() => onOpenChange(false)}
        keepContentsMounted={true}
      >
        <IonDatetime id="datetime" onIonChange={onIonChange}></IonDatetime>
      </IonModal>
    </>
  );
};

export default DatePicker;
