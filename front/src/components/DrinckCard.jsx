import React, { useState } from 'react';
import { Card, Grid } from '@nextui-org/react';
import { IonAlert, IonButton } from '@ionic/react';
import { Pencil, Trash } from 'react-bootstrap-icons';

const DrinkCard = ({ drink, onDelete, onEdit }) => {
  const { name, date, providedBy, images } = drink;
  const [showAlert, setShowAlert] = useState(false);

  const handleDelete = () => {
    setShowAlert(true);
  };

  const handleConfirmDelete = () => {
    setShowAlert(false);
    onDelete(drink._id);
  };

  const handleEdit = () => {
    onEdit(drink._id);
  };

  return (
    <>
      <Grid.Container gap={1}>
        <Grid xs={12} md={6} lg={4}>
          <Card variant="bordered">
            <Card.Header>{name}</Card.Header>
            <Card.Body>
              {images && images[0] && <img src={images[0]} alt={name} style={{ width: '100%' }} />}
              <p>
                <strong>Offert par:</strong> {providedBy}
              </p>
              <p>
                <strong>Date:</strong> {new Date(date).toLocaleDateString()}
              </p>
            </Card.Body>
            <Card.Footer>
              <IonButton style={{ padding: 5, margin: 10 }} onClick={handleEdit}>
                <Pencil />
              </IonButton>
              <IonButton style={{ padding: 5, margin: 10 }} onClick={handleDelete}>
                <Trash />
              </IonButton>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="Confirmation"
        message="Êtes-vous sûr de vouloir supprimer?"
        buttons={[
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => setShowAlert(false),
          },
          {
            text: 'OK',
            handler: handleConfirmDelete,
          },
        ]}
      />
    </>
  );
};

export default DrinkCard;
