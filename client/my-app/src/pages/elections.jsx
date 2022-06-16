import AddElectionButton from "../navigation-buttons/add-election-button";
import LogoutButton from "../navigation-buttons/logout-button";
import TokensButton from "../navigation-buttons/tokens-button";
import { Flex } from "rebass";
import ElectionsList from "../lists/electionsList";

export default function Elections() {
  
  // useEffect that gets the elections
  // for that specific token which should
  // filter based on that one token id

  return (
    <main style={{ padding: "1rem 0" }}>
        <Flex>
          <TokensButton/>
          <LogoutButton/>   
        </Flex>
      <h2>Elections</h2>
      <ElectionsList/>
      <AddElectionButton/>
    </main>
  );
}