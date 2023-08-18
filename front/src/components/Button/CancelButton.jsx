import { Grid, Button } from "@nextui-org/react";

const CancelButton = ({ onClick }) => {
  return (
    <Grid>
      <Button auto color="primary" rounded onClick={onClick}>
        Annuler
      </Button>
    </Grid>
  );
};

export default CancelButton;
