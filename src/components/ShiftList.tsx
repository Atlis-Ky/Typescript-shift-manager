import React from 'react';
import { Shift } from '../types/Shift';
import ShiftRow from './ShiftRow';

interface Props {
  shifts: Shift[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const ShiftList: React.FC<Props> = ({ shifts, onDelete, onEdit }) => {
  return (
    <div className="mt-4">
      {/* Header Row */}
      <div className="d-flex align-items-center fw-bold border-bottom pb-2 mb-2">
        <div style={{ width: '25%' }}>Name</div>
        <div style={{ width: '25%' }}>Group</div>
        <div style={{ width: '25%' }}>Time</div>
        <div style={{ width: '25%', textAlign: 'right' }}>Actions</div>
      </div>

      {/* Shift Rows */}
      {shifts.length > 0 ? (
        shifts.map((shift) => (
          <ShiftRow key={shift.id} shift={shift} onEdit={onEdit} onDelete={onDelete} />
        ))
      ) : (
        <p className="text-muted">No shifts added yet.</p>
      )}
    </div>
  );
};

export default ShiftList;