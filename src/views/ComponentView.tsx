import Navbar from '../components/Navbar';
import ShiftForm from '../components/ShiftForm';
import ShiftButtonGroup from '../components/ShiftButtonGroup';
import ShiftList from '../components/ShiftList';
import { Shift } from '../types/Shift';

const ComponentView = () => {
  const sampleShifts: Shift[] = [
    {
      id: '1',
      name: 'Test Shift',
      group: 'Developer',
      startTime: '09:00',
      endTime: '16:30',
    },
    {
      id: '2',
      name: 'Afternoon Shift',
      group: 'Admin',
      startTime: '12:00',
      endTime: '18:00',
    },
  ];

  const handleDelete = (id: string) => {
    console.log(`Delete shift with ID: ${id}`);
    //placeholder for component preview
  };

  const handleEdit = (id: string) => {
    console.log(`Edit shift with ID: ${id}`);
    // Placeholder for editing 
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5 pt-4">
        {/* Shift Form */}
        <section className="mb-5">
          <h5 className="mb-3">Shift Form</h5>
          <ShiftForm />
        </section>

        {/* Buttons */}
        <section className="mb-5">
          <h5 className="mb-3">Button Group</h5>
          <ShiftButtonGroup />
        </section>

        {/* Shift Table */}
        <section className="mb-5">
          <h5 className="mb-3">Shift List</h5>
          <ShiftList shifts={sampleShifts} onEdit={handleEdit} onDelete={handleDelete} />
        </section>
      </div>
    </>
  );
};

export default ComponentView;