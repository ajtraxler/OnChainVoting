import { Link } from "react-router-dom";

export default function logoutButton() {
  return (
    <div>
      <h1>Logout</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/login">Logout</Link>
      </nav>
    </div>
  );
}