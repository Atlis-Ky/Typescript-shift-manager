import { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { Shift } from "../types/Shift";

interface EditShiftTemplateModalProps {
  show: boolean;
  onClose: () => void;
  onEdit: (updatedShiftData: Shift) => void;
  shiftData: Shift | null;
}

const EditShiftTemplateModal = ({
  show,
  onClose,
  onEdit,
  shiftData,
}: EditShiftTemplateModalProps) => {
  const [name, setName] = useState("");
  const [group, setGroup] = useState<Shift["group"]>("Developer");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    if (shiftData) {
      setName(shiftData.name);
      setGroup(shiftData.group);
      setStartTime(shiftData.startTime);
      setEndTime(shiftData.endTime);
    }
  }, [shiftData]);

  const handleSave = () => {
    // Validates & saves the changes made to selected shift, then closes modal
    if (!shiftData) return;

    const updatedShift: Shift = {
      ...shiftData,
      name,
      group,
      startTime,
      endTime,
    };

    onEdit(updatedShift);
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton style={{ backgroundColor: "#e8e9eb" }}>
        <Modal.Title>Edit Shift Template</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="shiftName" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="shiftGroup" className="mb-3">
            <Form.Label>Group</Form.Label>
            <Form.Select
              value={group}
              onChange={(e) =>
                setGroup(e.target.value as Shift["group"])
              }
            >
              <option value="Developer">Developer</option>
              <option value="Admin">Admin</option>
              <option value="Management">Management</option>
            </Form.Select>
          </Form.Group>

          <Row>
            <Col>
              <Form.Group controlId="startTime" className="mb-3">
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="endTime" className="mb-3">
                <Form.Label>End Time</Form.Label>
                <Form.Control
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-warning text-black" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="outline-primary text-black" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditShiftTemplateModal;