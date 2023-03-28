import { Button } from "@nextui-org/react";
import { FC } from "react";

const HelloWorld: FC = () => {
  return (
    <>
      <Button color="success" auto ghost>
        Default
      </Button>
      <p>Hello world</p>
    </>
  );
};

export default HelloWorld;
