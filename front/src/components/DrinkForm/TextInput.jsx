import { Input } from "@nextui-org/react";

const TextInput = ({ label, placeHolder, onChange }) => {
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
