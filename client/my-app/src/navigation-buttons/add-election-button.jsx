import { Link } from "react-router-dom";

export default function AddElectionButton() {
  return (
    <div>
        <Link to="/addElection/:userId">Add Election</Link>
    </div>
  );
}