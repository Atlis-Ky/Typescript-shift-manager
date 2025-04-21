import React from 'react';
import Navbar from '../components/Navbar';
import ShiftForm from '../components/ShiftForm';
import ShiftList from '../components/ShiftList';

const AppView: React.FC = () => {
  const handleEdit = (id: string) => {
    console.log(`Edit shift with ID: ${id}`);
    // Placeholder for edit functionality
  };

  return (
    <>
      <Navbar />
      <h2 className="mt-3">App View</h2>
      <ShiftForm />
      <ShiftList shifts={[]} onEdit={handleEdit} onDelete={() => {}} />
    </>
  );
};

export default AppView;