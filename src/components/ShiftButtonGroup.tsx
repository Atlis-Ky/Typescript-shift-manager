import { Button } from 'react-bootstrap';

const ShiftButtonGroup = () => {
  return (
    <div className="d-flex flex-wrap gap-3">
      <Button variant="primary">Add Shift</Button>
      <Button variant="warning">Edit Shift</Button>
      <Button variant="danger">Delete Shift</Button>
      <Button variant="secondary">Cancel</Button>
    </div>
  );
};

export default ShiftButtonGroup;