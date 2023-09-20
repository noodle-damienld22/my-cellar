import { IonButton } from '@ionic/react';
import { Grid } from '@nextui-org/react';
import { XCircle } from 'react-bootstrap-icons';

const CloseButton = ({ onClick }) => {
  return (
    <Grid>
      <IonButton onClick={onClick}>
        <XCircle size={15} />
      </IonButton>
    </Grid>
  );
};

export default CloseButton;
