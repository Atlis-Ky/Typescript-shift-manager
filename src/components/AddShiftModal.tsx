import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ShiftForm from "./ShiftForm";
import { AddNewShiftButton } from "./ShiftButtonGroup";

interface AddShiftModalProps {
  show: boolean;
  onClose: () => void;
  onSave: (shiftData: any) => void;
}

const AddShiftModal: React.FC<AddShiftModalProps> = ({
  show,
  onClose,
  onSave,
}) => {
  const [name, setName] = useState("");
  const [group, setGroup] = useState("Developer");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSave = () => {
    if (!name || !startTime || !endTime) {
      alert("Please fill in all fields.");
      return;
    }

    onSave({
      name,
      group,
      startTime,
      endTime,
    });

    // Clears out form and closes modal
    setName("");
    setGroup("Developer");
    setStartTime("");
    setEndTime("");
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton style={{ backgroundColor: "#e8e9eb" }}>
        <Modal.Title>Add New Shift</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ShiftForm
          name={name}
          group={group}
          startTime={startTime}
          endTime={endTime}
          onNameChange={setName}
          onGroupChange={setGroup}
          onStartChange={setStartTime}
          onEndChange={setEndTime}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-warning text-black" onClick={onClose}>
          Cancel
        </Button>
        <AddNewShiftButton onClick={handleSave} />
      </Modal.Footer>
    </Modal>
  );
};

export default AddShiftModal;