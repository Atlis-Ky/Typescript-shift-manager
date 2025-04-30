import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ShiftForm from "../components/ShiftForm";
import ShiftButtonGroup from "../components/ShiftButtonGroup";
import ShiftList from "../components/ShiftList";
import PageButtons from "../components/PageButtons";
import EditShiftTemplateModal from "../components/EditShiftTemplateModal";
import DeleteShiftTemplateModal from "../components/DeleteShiftTemplateModal";
import { Button } from "react-bootstrap";
import Footer from "../components/Footer";
import { sampleShifts } from "../data/sampleShifts";
import AddShiftModal from "../components/AddShiftModal";
import { Shift } from "../types/Shift"; 

const ComponentView = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);


  const shiftToEdit: Shift = {
    id: "example-id",
    name: "Afternoon Shift",
    group: "Developer",
    startTime: "12:00",
    endTime: "18:00",
  };

  const handleDelete = (id: string) => {
    console.log(`Delete shift with ID: ${id}`);
  };

  const handleEdit = (id: string) => {
    console.log(`Edit shift with ID: ${id}`);
  };

  const confirmEdit = (updatedShift: Shift) => {
    console.log("Edited shift:", updatedShift);
    setShowEditModal(false);
  };

  return (
    <>
      <div style={{ backgroundColor: "#dbdbdb", borderRadius: "0.5rem" }}>
        <Navbar />
        <div className="container mt-5 pt-4">
          <section className="mb-5">
            <h5 className="mb-3 text-center">Shift Form Template</h5>
            <ShiftForm
              name=""
              group="Developer"
              startTime=""
              endTime=""
              onNameChange={() => {}}
              onGroupChange={() => {}}
              onStartChange={() => {}}
              onEndChange={() => {}}
            />
          </section>

          <section className="mb-5 pb-3">
            <h5 className="mb-3 text-center">Generic Button Group</h5>
            <ShiftButtonGroup />
          </section>

          <section className="mb-5 pb-3">
            <h5 className="mb-3 text-center">
              Shift List Template (with placeholders)
            </h5>
            <ShiftList
              shifts={sampleShifts}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </section>

          <section className="mb-5 pb-3">
            <h5 className="mb-3 text-center">Page Buttons Template</h5>
            <PageButtons
              totalPages={5}
              currentPage={1}
              onPageChange={(page) => console.log("Go to page:", page)}
            />
          </section>

          <section className="mb-5 text-center py-3">
            <h5 className="text-center">Edit & Delete Modals (Click For Previews)</h5>
            <p className="text-muted">
              (Logic stored in their own components, doesn't have to be tied to
              below buttons, can be used elsewhere such as the actions in my
              Shift List)
            </p>
            <div className="mt-3 pb-3">
              <Button
                variant="primary"
                className="me-2"
                onClick={() => setShowAddModal(true)}
              >
                Show Add Modal
              </Button>
              <Button
                variant="outline-primary text-black"
                className="me-2"
                onClick={() => setShowEditModal(true)}
              >
                Show Edit Modal
              </Button>
              <Button variant="danger" onClick={() => setShowDeleteModal(true)}>
                Show Delete Modal
              </Button>
            </div>
          </section>

          <AddShiftModal
            show={showAddModal}
            onClose={() => setShowAddModal(false)}
            onSave={(shiftData) => console.log("New shift added:", shiftData)}
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
            onConfirm={() => console.log("Shift deleted")}
            templateName="Afternoon Shift"
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ComponentView;