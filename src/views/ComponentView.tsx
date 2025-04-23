import Navbar from "../components/Navbar";
import ShiftForm from "../components/ShiftForm";
import ShiftButtonGroup from "../components/ShiftButtonGroup";
import ShiftList from "../components/ShiftList";
import { Shift } from "../types/Shift";
import PageButtons from "../components/PageButtons";

const ComponentView = () => {
  const sampleShifts: Shift[] = [
    {
      id: "1",
      name: "Test Shift",
      group: "Developer",
      startTime: "09:00",
      endTime: "16:30",
    },
    {
      id: "2",
      name: "Afternoon Shift",
      group: "Admin",
      startTime: "12:00",
      endTime: "18:00",
    },
    {
      id: "3",
      name: "Evening Shift",
      group: "Admin",
      startTime: "16:00",
      endTime: "22:00",
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
      <div style={{ backgroundColor: "#dbdbdb", borderRadius: "0.5rem" }}>
        <Navbar />
        <div className="container mt-5 pt-4">
          <section className="mb-5">
            <h5 className="mb-3 text-center">Shift Form</h5>
            <ShiftForm />
          </section>

          <section className="mb-5">
            <h5 className="mb-3 text-center">Button Group</h5>
            <ShiftButtonGroup />
          </section>

          <section className="mb-5">
            <h5 className="mb-3 text-center">Shift List</h5>
            <ShiftList
              shifts={sampleShifts}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </section>

        <section className="mb-5">
          <h5 className="mb-5 text-center">Page Buttons</h5>
          <PageButtons
            totalPages={5}
            currentPage={1}
            onPageChange={(page) => console.log("Go to page:", page)}
          />
      </section>
        </div>
      </div>
    </>
  );
};

export default ComponentView;
