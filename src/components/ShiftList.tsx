import React from "react";
import { Shift } from "../types/Shift";
// import ShiftRow from "./ShiftRow";

interface Props {
  shifts: Shift[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const ShiftList: React.FC<Props> = ({ shifts, onDelete, onEdit }) => {
  return (
    <div className="mt-4">
      {/* Header Row */}
      <div className="d-flex align-items-center fw-bold border-bottom pb-3 mb-2">
        <div style={{ width: "25%" }}>Name</div>
        <div style={{ width: "25%" }}>Group</div>
        <div style={{ width: "25%" }}>Time</div>
        <div style={{ width: "25%", textAlign: "right" }}>Actions</div>
      </div>

      {/* Shift Rows */}
      {shifts.length > 0 ? (
        shifts.map((shift) => (
          <div
            key={shift.id}
            className="d-flex align-items-center border-bottom py-3"
            style={{ fontSize: "0.95rem" }}
          >
            <div style={{ width: "25%" }}>{shift.name}</div>
            <div style={{ width: "25%" }}>{shift.group}</div>
            <div style={{ width: "25%" }}>
              {shift.startTime} - {shift.endTime}
            </div>
            <div
              style={{
                width: "25%",
                display: "flex",
                justifyContent: "flex-end",
                gap: "1rem",
              }}
            >
              <button
                onClick={() => onEdit(shift.id)}
                style={{
                  background: "none",
                  border: "none",
                  color: "grey",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(shift.id)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#b51437",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-muted">No shifts added yet.</p>
      )}
    </div>
  );
};

export default ShiftList;
