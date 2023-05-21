import { Grid, Button } from "@nextui-org/react";

import { FC } from "react";

interface ValidateButtonProps {
  onClick: () => void;
}

const CancelButton: FC<ValidateButtonProps> = ({ onClick }) => {
  return (
    <Grid>
      <Button auto color="primary" rounded onClick={onClick}>
        Annuler
      </Button>
    </Grid>
  );
};

export default CancelButton;
