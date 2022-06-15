import LogoutButton from "../navigation-buttons/logout-button";
import { Flex } from "rebass";

export default function Tokens() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <Flex>
        <LogoutButton/>
      </Flex>
      <h2>Home</h2>
    </main>
  );
}