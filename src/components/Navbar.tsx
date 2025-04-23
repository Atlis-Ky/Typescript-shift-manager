import profileImg from "../assets/atlis-profile.jpg";
import { BellFill } from "react-bootstrap-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top w-100 py-2">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <span className="navbar-brand mb-0 h5 me-4">Shift Manager |</span>
          <span className="fs-6 fw-normal text-white">
            {" "}
            TypeScript & Bootstrap component library with app view demo
          </span>
        </div>

        <div className="d-flex align-items-center">
          <BellFill color="white" size={18} className="me-3" />
          <img
            src={profileImg}
            alt="Profile"
            style={{
              width: "40px",
              height: "40px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
