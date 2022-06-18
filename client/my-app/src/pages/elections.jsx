import LogoutButton from "../navigation-buttons/logout-button";
import TokensButton from "../navigation-buttons/tokens-button";
import { Flex } from "rebass";

export default function Elections() {

  return (
    <main style={{ padding: "1rem 0" }}>
        <Flex>
          <TokensButton/>
          <LogoutButton/>   
        </Flex>
      <h2>Elections</h2>
      {/* get the hard coded data from the smart contract */}
      
    </main>
  );
}