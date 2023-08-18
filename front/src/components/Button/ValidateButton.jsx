import { Grid, Button } from "@nextui-org/react";

const ValidateButton = ({ onClick }) => {
  return (
    <Grid>
      <Button auto color="primary" rounded onClick={onClick}>
        Ajouter
      </Button>
    </Grid>
  );
};

export default ValidateButton;
