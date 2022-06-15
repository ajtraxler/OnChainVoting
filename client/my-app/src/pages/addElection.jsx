import LogoutButton from "../navigation-buttons/logout-button";
import TokensButton from "../navigation-buttons/tokens-button";

export default function AddElection() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <div className="menu">
        <TokensButton/>
        <LogoutButton/>
      </div>
      <h2>addElection</h2>
    </main>
  );
}