import { Grid, Button } from "@nextui-org/react";

import { FC } from "react";

interface CancelButtonProps {
  onClick: () => void;
}

const CancelButton: FC<CancelButtonProps> = ({ onClick }) => {
  return (
    <Grid>
      <Button auto color="primary" rounded onClick={onClick}>
        Annuler
      </Button>
    </Grid>
  );
};

export default CancelButton;
