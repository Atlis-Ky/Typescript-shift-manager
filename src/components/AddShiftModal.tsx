import { useState } from "react";
import { Modal, Button, Toast, ToastContainer } from "react-bootstrap";
import ShiftForm from "./ShiftForm";
import { AddNewShiftButton } from "./ShiftButtonGroup";

interface AddShiftModalProps {
  show: boolean;
  onClose: () => void;
  onSave: (shiftData: any) => void;
}

const AddShiftModal = ({ show, onClose, onSave }: AddShiftModalProps) => {
  const [name, setName] = useState("");
  const [group, setGroup] = useState("Developer");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSave = () => {
    // Input validation statements
    if (!name.trim()) {
      setToastMessage("Shift name cannot be empty.");
      return;
    }
    if (name.length > 22) {
      setToastMessage("Shift name cannot exceed 22 characters.");
      return; // have set a limit of 22 over in shift form, should just cover any unwanted edge cases
    }
    if (!startTime || !endTime) {
      setToastMessage("Please provide both start and end times.");
      return;
    }
    if (startTime === endTime) {
      setToastMessage("Start time and end time cannot be the same.");
      return;
    }
    if (startTime > endTime) {
      setToastMessage("Start time must be earlier than end time.");
      return;
    }

    // Saves shift
    onSave({
      name,
      group,
      startTime,
      endTime,
    });

    // Clears out form & exits modal
    setName("");
    setGroup("Developer");
    setStartTime("");
    setEndTime("");
    onClose();
  };

  return (
    <>
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

      {/* Toast for input validation, replacing alert handler to prevent browser extensions blocking etc */}
      <ToastContainer position="top-end" className="p-3">
        {toastMessage && (
          <Toast
            onClose={() => setToastMessage(null)}
            show={!!toastMessage}
            delay={4000}
            autohide
            style={{
              backgroundColor: "#ead4d4",
              color: "#black",
              border: "1px solid #b51437", 
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)", 
              fontSize: "0.8rem", 
              fontWeight: "500", 
            }}
          >
            <Toast.Body>{toastMessage}</Toast.Body>
          </Toast>
        )}
      </ToastContainer>
    </>
  );
};

export default AddShiftModal;
