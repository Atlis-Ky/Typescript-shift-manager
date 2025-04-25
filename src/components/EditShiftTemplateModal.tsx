import React from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

interface EditShiftTemplateModalProps {
  show: boolean;
  onClose: () => void;
}

const EditShiftTemplateModal: React.FC<EditShiftTemplateModalProps> = ({
  show,
  onClose,
}) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Shift Template</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="shiftName" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value="Afternoon Shift" readOnly />
          </Form.Group>

          <Form.Group controlId="shiftGroup" className="mb-3">
            <Form.Label>Group</Form.Label>
            <Form.Control as="select" disabled>
              <option>Admin</option>
            </Form.Control>
          </Form.Group>

          <Row>
            <Col>
              <Form.Group controlId="startTime" className="mb-3">
                <Form.Label>Start Time</Form.Label>
                <Form.Control type="time" value="12:00" readOnly />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="endTime" className="mb-3">
                <Form.Label>End Time</Form.Label>
                <Form.Control type="time" value="18:00" readOnly />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-warning text-black" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditShiftTemplateModal;