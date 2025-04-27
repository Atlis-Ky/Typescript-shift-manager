import { Button } from "react-bootstrap";

// Export individual buttons
export const AddNewShiftButton = ({ onClick }: { onClick?: () => void }) => (
  <Button variant="primary" onClick={onClick}>
    <i className="bi bi-plus-circle-dotted me-1"></i>Add New Shift
  </Button>
);

export const EditButton = ({ onClick }: { onClick?: () => void }) => (
  <Button
    variant="outline-secondary"
    className="border-1 text-black"
    onClick={onClick}
  >
    Edit
  </Button>
);

export const CancelButton = ({ onClick }: { onClick?: () => void }) => (
  <Button
    variant="outline-warning"
    className="border-1 text-black"
    onClick={onClick}
  >
    Cancel
  </Button>
);

export const DeleteButton = ({ onClick }: { onClick?: () => void }) => (
  <Button variant="danger" onClick={onClick}>
    Delete<i className="bi bi-dash-circle-dotted ms-1"></i>
  </Button>
);


const ShiftButtonGroup = () => {
  return (
    <div className="d-flex flex-wrap gap-3 bg-white py-3 px-3 rounded-3 shadow-sm display-flex justify-content-center align-items-center">
      <AddNewShiftButton />
      <EditButton />
      <CancelButton />
      <DeleteButton />
    </div>
  );
};

export default ShiftButtonGroup;
