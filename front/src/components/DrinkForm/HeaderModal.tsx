import { FC } from "react";
import CloseButton from "../Button/CloseButton";

interface HeaderModalProps {
  onClose: () => void;
}

const HeaderModal: FC<HeaderModalProps> = ({ onClose }) => {
  return (
    <>
      <CloseButton onClick={onClose} />
    </>
  );
};

export default HeaderModal;
