import { Grid, Button } from "@nextui-org/react";
import { FC } from "react";

interface ValidateButtonProps {
  onClick: () => void;
}

const ValidateButton: FC<ValidateButtonProps> = ({ onClick }) => {
  return (
    <Grid>
      <Button auto color="primary" rounded onClick={onClick}>
        Ajouter
      </Button>
    </Grid>
  );
};

export default ValidateButton;
