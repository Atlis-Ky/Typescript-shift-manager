import { Button } from 'react-bootstrap';

const ShiftButtonGroup = () => {
  return (
    <div className="d-flex flex-wrap gap-3 bg-white py-3 px-3 rounded-3 shadow-sm display-flex justify-content-center align-items-center">
      <Button variant="primary">Add New Shift</Button>
      <Button variant="outline-secondary" className="border-1 text-black">Edit</Button>
      <Button variant="outline-warning" className="border-1 text-black">Cancel</Button>
      <Button variant="danger">Delete</Button>
      
    </div>
  );
};

export default ShiftButtonGroup;