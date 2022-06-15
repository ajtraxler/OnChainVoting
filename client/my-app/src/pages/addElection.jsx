import ElectionForm from "../forms/election-form";
import LogoutButton from "../navigation-buttons/logout-button";
import TokensButton from "../navigation-buttons/tokens-button";
import { Flex, Box } from "rebass";

export default function AddElection() {
  return (
    <main style={{ padding: "1rem 0" }}>
        <Flex>
            <TokensButton/>
            <LogoutButton/>
        </Flex>
      <h2>addElection</h2>
      <ElectionForm></ElectionForm>
    </main>
  );
}