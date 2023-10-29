import React from 'react';
import { Card, Grid } from '@nextui-org/react';

const DrinkCard = ({ drink }) => {
  const { name, date, providedBy, images } = drink;

  return (
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
        </Card>
      </Grid>
    </Grid.Container>
  );
};

export default DrinkCard;
