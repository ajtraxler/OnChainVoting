import { Link } from "react-router-dom";

export default function AddCandidateButton() {
  return (
    <div>
        <Link to="/addCandidate/:electionId">Add Candidate</Link>
    </div>
  );
}
