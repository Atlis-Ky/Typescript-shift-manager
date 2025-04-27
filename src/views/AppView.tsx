import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ShiftList from "../components/ShiftList";
import Footer from "../components/Footer";
import PageButtons from "../components/PageButtons";
import { sampleShifts } from "../data/sampleShifts";
import { AddNewShiftButton } from "../components/ShiftButtonGroup";
import AddShiftModal from "../components/AddShiftModal";
import EditShiftTemplateModal from "../components/EditShiftTemplateModal";
import DeleteShiftTemplateModal from "../components/DeleteShiftTemplateModal";

const AppView: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedShiftId, setSelectedShiftId] = useState<string | null>(null);

  const handleAddShift = (shiftData: any) => {
    console.log("New shift added:", shiftData);
    // Add logic to update the shift list with the new shift
  };

  const handleEdit = (id: string) => {
    setSelectedShiftId(id); // Set the selected shift ID
    setShowEditModal(true); // Open the edit modal
  };

  const handleDelete = (id: string) => {
    setSelectedShiftId(id); // Set the selected shift ID
    setShowDeleteModal(true); // Open the delete modal
  };

  return (
    <>
      <Navbar />
      <section className="mb-5 pb-3">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-3 pb-3 fw-bold">Upcoming Shifts:</h5>
          <AddNewShiftButton onClick={() => setShowAddModal(true)} />
        </div>
        <ShiftList
          shifts={sampleShifts}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
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
        onEdit={(updatedShiftData) => {
          console.log("Shift updated:", updatedShiftData);
          setShowEditModal(false);
        }}
      />

      <DeleteShiftTemplateModal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => {
          console.log(`Shift with ID ${selectedShiftId} deleted`);
          setShowDeleteModal(false);
        }}
        templateName={
          sampleShifts.find((shift) => shift.id === selectedShiftId)?.name ||
          "this shift"
        }
      />
    </>
  );
};

export default AppView;
