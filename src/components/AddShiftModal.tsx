import React from "react";
import { Modal, Button } from "react-bootstrap";
import ShiftForm from "./ShiftForm";
import { AddNewShiftButton } from "./ShiftButtonGroup"; // Import the reusable AddNewShiftButton

interface AddShiftModalProps {
  show: boolean;
  onClose: () => void;
  onSave: (shiftData: any) => void; // Replace `any` with a proper type if you have one
}

const AddShiftModal: React.FC<AddShiftModalProps> = ({
  show,
  onClose,
  onSave,
}) => {
  const handleSave = () => {
    // Example: Collect form data and pass it to the onSave handler
    const shiftData = {
      name: "Example Shift",
      group: "Developer",
      startTime: "09:00",
      endTime: "17:00",
    };
    onSave(shiftData);
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton style={{backgroundColor: "#e8e9eb"}}>
        <Modal.Title>Add New Shift</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ShiftForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-warning text-black" onClick={onClose}>
          Cancel
        </Button>
        {/* Use the AddNewShiftButton here */}
        <AddNewShiftButton onClick={handleSave} />
      </Modal.Footer>
    </Modal>
  );
};

export default AddShiftModal;
