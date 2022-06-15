import LogoutButton from "../navigation-buttons/logout-button";
import ElectionsButton from "../navigation-buttons/elections-button";
import TokensButton from "../navigation-buttons/tokens-button";
import CandidatesButton from "../navigation-buttons/candidates-button";

export default function Candidate() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Candidate</h2>
      <TokensButton/>
      <ElectionsButton/>
      <CandidatesButton/>
      <LogoutButton/>
    </main>
  );
}