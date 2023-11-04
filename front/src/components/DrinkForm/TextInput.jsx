import { Input } from '@nextui-org/react';

const TextInput = ({ label, placeHolder, onChange, value }) => {
  return (
    <>
      <Input
        css={{ textAlign: 'left' }}
        rounded
        bordered
        label={label}
        placeholder={placeHolder}
        onChange={onChange}
        color="default"
        value={value}
      />
    </>
  );
};

export default TextInput;
