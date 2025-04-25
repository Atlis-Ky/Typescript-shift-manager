import { Button } from 'react-bootstrap';

interface ViewSwitcherProps {
  view: 'app' | 'components';
  onSwitch: () => void;
}

const ViewSwitcher = ({ view, onSwitch }: ViewSwitcherProps) => {
  return (
    <div className="d-flex justify-content-center">
      <Button className="px-5 fw-bold fs-5" variant="primary" onClick={onSwitch}>
        Switch to {view === 'app' ? 'App View' : 'Component View'}
      </Button>
    </div>
  );
};

export default ViewSwitcher;