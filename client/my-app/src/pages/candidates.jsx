import LogoutButton from "../navigation-buttons/logout-button";
import TokensButton from "../navigation-buttons/tokens-button";
import ElectionsButton from "../navigation-buttons/elections-button";
import { Flex } from "rebass";
import VotingForm from "../forms/voting-form";

export default function Candidates() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Candidates</h2>
      <Flex>
        <TokensButton/>
        <ElectionsButton/>
        <LogoutButton/>
      </Flex>
        {/* get the hard coded data from the smart contract */}
        <VotingForm/>
    </main>
  );
}