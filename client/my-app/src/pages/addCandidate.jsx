import LogoutButton from "../navigation-buttons/logout-button";
import TokensButton from "../navigation-buttons/tokens-button";
import ElectionsButton from "../navigation-buttons/elections-button";
import CandidateForm from "../forms/candidate-form";

export default function AddCandidate() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <div className="menu">
        <TokensButton/>
        <ElectionsButton/>
        <LogoutButton/>
      </div>
      <h2>addCandidate</h2>
      <CandidateForm/>
    </main>
  );
}