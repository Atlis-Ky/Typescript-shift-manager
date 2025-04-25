import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const ShiftForm: React.FC = () => {
  const [name, setName] = useState('');
  const [group, setGroup] = useState('Developer');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  return (
    <div className="d-flex justify-content-center">
      <div className="form-container form-container-lg">
        <Form className="mb-5">
          <Form.Group className="mb-2">
            <Form.Label>Shift Name</Form.Label>
            <Form.Control value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Shift Group</Form.Label>
            <Form.Select value={group} onChange={(e) => setGroup(e.target.value)}>
              <option>Developer</option>
              <option>Admin</option>
              <option>Management</option>
            </Form.Select>
          </Form.Group>

          <div className="d-flex gap-3">
            <Form.Group className="mb-2 flex-fill">
              <Form.Label>Start Time</Form.Label>
              <Form.Control type="time" value={start} onChange={(e) => setStart(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-2 flex-fill">
              <Form.Label>End Time</Form.Label>
              <Form.Control type="time" value={end} onChange={(e) => setEnd(e.target.value)} />
            </Form.Group>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ShiftForm;