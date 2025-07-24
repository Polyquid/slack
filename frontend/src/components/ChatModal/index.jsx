import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import RenameChannelModal from './RenameChannelModal';
import DeleteChannelModal from './DeleteChannelModal';
import AddChannelModal from './AddChannelModal';

const mapModal = {
  renameChannel: RenameChannelModal,
  deleteChannel: DeleteChannelModal,
  addChannel: AddChannelModal,
};

const ChatModal = ({ onHide, validationData }) => {
  const { name, show } = useSelector((state) => state.ui.currentModal);
  const ModalBody = mapModal[name] ?? (() => null);

  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalBody onHide={onHide} validationData={validationData} />
    </Modal>
  );
};

export default ChatModal;
