import { Input, FormElement } from "@nextui-org/react";

import { FC } from "react";
interface TextInputProps {
  label: string;
  placeHolder: string;
  onChange: (event: React.ChangeEvent<FormElement>) => void;
}

const TextInput: FC<TextInputProps> = ({ label, placeHolder, onChange }) => {
  return (
    <>
      <Input
        css={{ textAlign: "left" }}
        rounded
        bordered
        label={label}
        placeholder={placeHolder}
        onChange={onChange}
        color="default"
      />
    </>
  );
};

export default TextInput;
