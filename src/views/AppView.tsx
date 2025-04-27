import React from "react";
import Navbar from "../components/Navbar";
import ShiftForm from "../components/ShiftForm";
import ShiftList from "../components/ShiftList";
import Footer from "../components/Footer";

const AppView: React.FC = () => {
  const handleEdit = (id: string) => {
    console.log(`Edit shift with ID: ${id}`);
    // Placeholder for edit functionality
  };

  return (
    <>
      <Navbar />
      <ShiftList shifts={[]} onEdit={handleEdit} onDelete={() => {}} />
      <Footer />
    </>
  );
};

export default AppView;
