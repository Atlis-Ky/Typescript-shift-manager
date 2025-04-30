import { useState } from "react";
import Navbar from "../components/Navbar";
import ShiftList from "../components/ShiftList";
import Footer from "../components/Footer";
import PageButtons from "../components/PageButtons";
import { sampleShifts } from "../data/sampleShifts";
import { AddNewShiftButton } from "../components/ShiftButtonGroup";
import AddShiftModal from "../components/AddShiftModal";
import EditShiftTemplateModal from "../components/EditShiftTemplateModal";
import DeleteShiftTemplateModal from "../components/DeleteShiftTemplateModal";
import { Shift } from "../types/Shift";

const AppView: React.FC = () => {
  const [shifts, setShifts] = useState<Shift[]>(sampleShifts);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedShiftId, setSelectedShiftId] = useState<string | null>(null);
  const [shiftToEdit, setShiftToEdit] = useState<Shift | null>(null);


  const handleAddShift = (shiftData: Omit<Shift, "id">) => {
    const newShift: Shift = {
      id: Date.now().toString(),
      ...shiftData,
    };
    setShifts((prev) => [...prev, newShift]);
  };

  const handleDelete = (id: string) => {
    setSelectedShiftId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (selectedShiftId) {
      setShifts((prev) => prev.filter((shift) => shift.id !== selectedShiftId));
    }
    setShowDeleteModal(false);
    setSelectedShiftId(null);
  };

  const handleEdit = (id: string) => {
    const shift = shifts.find((s) => s.id === id);
    setShiftToEdit(shift || null);
    setShowEditModal(true);
  };

  const confirmEdit = (updatedShift: Shift) => {
    setShifts((prev) =>
      prev.map((s) => (s.id === updatedShift.id ? updatedShift : s))
    );
    setShowEditModal(false);
    setShiftToEdit(null);
  };

  return (
    <>
      <Navbar />
      <section className="mb-5 pb-3">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-3 pb-3 fw-bold">Upcoming Shifts:</h5>
          <AddNewShiftButton onClick={() => setShowAddModal(true)} />
        </div>
        <ShiftList shifts={shifts} onEdit={handleEdit} onDelete={handleDelete} />
      </section>

      <section className="mb-5 pb-3">
        <PageButtons
          totalPages={5}
          currentPage={1}
          onPageChange={(page) => console.log("Go to page:", page)}
        />
      </section>

      <Footer />

      <AddShiftModal
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={handleAddShift}
      />

<EditShiftTemplateModal
  show={showEditModal}
  onClose={() => setShowEditModal(false)}
  onEdit={confirmEdit}
  shiftData={shiftToEdit}
/>

      <DeleteShiftTemplateModal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
        templateName={
          shifts.find((shift) => shift.id === selectedShiftId)?.name || "this shift"
        }
      />
    </>
  );
};

export default AppView;