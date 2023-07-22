import { IonButton } from "@ionic/react";
import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { XCircle } from "react-bootstrap-icons";

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton: FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <Grid>
      <IonButton onClick={onClick}>
        <XCircle size={15} />
      </IonButton>
    </Grid>
  );
};

export default CloseButton;
