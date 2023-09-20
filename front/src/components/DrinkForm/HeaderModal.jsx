import CloseButton from '../Button/CloseButton';

const HeaderModal = ({ onClose }) => {
  return (
    <>
      <CloseButton onClick={onClose} />
    </>
  );
};

export default HeaderModal;
