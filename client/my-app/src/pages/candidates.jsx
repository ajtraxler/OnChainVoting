import LogoutButton from "../navigation-buttons/logout-button";
import TokensButton from "../navigation-buttons/tokens-button";
import ElectionsButton from "../navigation-buttons/elections-button";

export default function Candidates() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Candidates</h2>
      <TokensButton/>
      <ElectionsButton/>
      <LogoutButton/>
    </main>
  );
}