import React from "react";
import { Form } from "react-bootstrap";

export const ShiftName: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => (
  <Form.Group className="mb-2" id="shiftName">
    <Form.Label>Shift Name</Form.Label>
    <Form.Control value={value} onChange={(e) => onChange(e.target.value)} />
  </Form.Group>
);

export const ShiftGroup: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => (
  <Form.Group className="mb-2" id="shiftGroup">
    <Form.Label>Shift Group</Form.Label>
    <Form.Select value={value} onChange={(e) => onChange(e.target.value)}>
      <option>Developer</option>
      <option>Admin</option>
      <option>Management</option>
    </Form.Select>
  </Form.Group>
);

export const ShiftTime: React.FC<{
  start: string;
  end: string;
  onStartChange: (value: string) => void;
  onEndChange: (value: string) => void;
}> = ({ start, end, onStartChange, onEndChange }) => (
  <div className="d-flex gap-3" id="shiftTime">
    <Form.Group className="mb-2 flex-fill">
      <Form.Label>Start Time</Form.Label>
      <Form.Control
        type="time"
        value={start}
        onChange={(e) => onStartChange(e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-2 flex-fill">
      <Form.Label>End Time</Form.Label>
      <Form.Control
        type="time"
        value={end}
        onChange={(e) => onEndChange(e.target.value)}
      />
    </Form.Group>
  </div>
);

const ShiftForm: React.FC = () => {
  const [name, setName] = React.useState("");
  const [group, setGroup] = React.useState("Developer");
  const [start, setStart] = React.useState("");
  const [end, setEnd] = React.useState("");

  return (
    <div className="d-flex justify-content-center">
      <div className="form-container form-container-lg">
        <Form className="mb-5">
          <ShiftName value={name} onChange={setName} />
          <ShiftGroup value={group} onChange={setGroup} />
          <ShiftTime
            start={start}
            end={end}
            onStartChange={setStart}
            onEndChange={setEnd}
          />
        </Form>
      </div>
    </div>
  );
};

export default ShiftForm;
