import LogoutButton from "../navigation-buttons/logout-button";
import TokensButton from "../navigation-buttons/tokens-button";
import ElectionsButton from "../navigation-buttons/elections-button";
import CandidateForm from "../forms/candidate-form";
import { Flex } from "rebass";

export default function AddCandidate() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <Flex>
        <TokensButton/>
        <ElectionsButton/>
        <LogoutButton/>
      </Flex>
      <h2>addCandidate page</h2>
      <CandidateForm/>
    </main>
  );
}