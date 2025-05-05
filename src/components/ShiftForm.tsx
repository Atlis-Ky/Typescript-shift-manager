import { Form } from "react-bootstrap";

export interface ShiftFormProps {
  name: string;
  group: string;
  startTime: string;
  endTime: string;
  onNameChange: (value: string) => void;
  onGroupChange: (value: string) => void;
  onStartChange: (value: string) => void;
  onEndChange: (value: string) => void;
}

const ShiftForm = ({
  name,
  group,
  startTime,
  endTime,
  onNameChange,
  onGroupChange,
  onStartChange,
  onEndChange,
}: ShiftFormProps) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="form-container form-container-lg">
        <Form className="mb-5">
          <Form.Group className="mb-2" id="shiftName">
            <Form.Label>Shift Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => onNameChange(e.target.value)}
              maxLength={22}
              placeholder="Enter shift name"
            />
          </Form.Group>
          <Form.Group className="mb-2" id="shiftGroup">
            <Form.Label>Shift Group</Form.Label>
            <Form.Select
              value={group}
              onChange={(e) => onGroupChange(e.target.value)}
            >
              <option>Developer</option>
              <option>Admin</option>
              <option>Management</option>
            </Form.Select>
          </Form.Group>
          <div className="d-flex gap-3" id="shiftTime">
            <Form.Group className="mb-2 flex-fill">
              <Form.Label>Start Time</Form.Label>
              <Form.Control
                type="time"
                value={startTime}
                onChange={(e) => onStartChange(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-2 flex-fill">
              <Form.Label>End Time</Form.Label>
              <Form.Control
                type="time"
                value={endTime}
                onChange={(e) => onEndChange(e.target.value)}
              />
            </Form.Group>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ShiftForm;
