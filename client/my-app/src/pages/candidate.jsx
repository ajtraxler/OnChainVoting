import LogoutButton from "../navigation-buttons/logout-button";
import ElectionsButton from "../navigation-buttons/elections-button";
import TokensButton from "../navigation-buttons/tokens-button";
import CandidatesButton from "../navigation-buttons/candidates-button";
import { Flex } from "rebass";

export default function Candidate() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Candidate</h2>
      <Flex>
        <TokensButton/>
        <ElectionsButton/>
        <CandidatesButton/>
        <LogoutButton/>
      </Flex>
        {/* get the hard coded data from the smart contract */}

    </main>
  );
}