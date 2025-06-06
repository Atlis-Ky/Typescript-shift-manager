import { Modal, Button } from "react-bootstrap";

export interface DeleteShiftTemplateModalProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
  templateName?: string;
}

const DeleteShiftTemplateModal = ({
  show,
  onClose,
  onConfirm,
  templateName = "this template",
}: DeleteShiftTemplateModalProps) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Delete Shift</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete <strong>{templateName}</strong>? This
        action cannot be undone.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-warning text-black" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteShiftTemplateModal;
