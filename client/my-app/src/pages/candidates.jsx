import LogoutButton from "../navigation-buttons/logout-button";
import TokensButton from "../navigation-buttons/tokens-button";
import ElectionsButton from "../navigation-buttons/elections-button";
import AddCandidateButton from "../navigation-buttons/add-candidate-button";

export default function Candidates() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Candidates</h2>
      <div className="menu">
        <TokensButton/>
        <ElectionsButton/>
        <LogoutButton/>
      </div>
      <AddCandidateButton/>
    </main>
  );
}