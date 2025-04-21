import React from 'react';
import { Shift } from '../types/Shift';
import { Button, Row, Col } from 'react-bootstrap';

interface Props {
  shift: Shift;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const ShiftRow: React.FC<Props> = ({ shift, onEdit, onDelete }) => {
  return (
    <Row className="mb-2 align-items-center">
      <Col>{shift.name}</Col>
      <Col>{shift.group}</Col>
      <Col>{shift.startTime} - {shift.endTime}</Col>
      <Col>
        <Button size="sm" variant="warning" onClick={() => onEdit(shift.id)}>Edit</Button>{' '}
        <Button size="sm" variant="danger" onClick={() => onDelete(shift.id)}>Delete</Button>
      </Col>
    </Row>
  );
};

export default ShiftRow;