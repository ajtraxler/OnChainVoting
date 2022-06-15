import AddElectionButton from "../navigation-buttons/add-election-button";
import LogoutButton from "../navigation-buttons/logout-button";
import TokensButton from "../navigation-buttons/tokens-button";

export default function Elections() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Elections</h2>
      <div className="menu">
        <TokensButton/>
        <LogoutButton/>   
      </div>
      <AddElectionButton/>
    </main>
  );
}