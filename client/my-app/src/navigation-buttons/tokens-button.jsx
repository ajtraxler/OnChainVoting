import { useNavigate } from "react-router-dom";
import { Button, Text} from "rebass";

export default function TokensButton() {

  let navigate = useNavigate(); 
  const TokensRoute = () =>{ 
    let path = `/tokens/:userId`; 
    navigate(path);
  }

  return (
    <div>
      <Button mr={2} onClick={TokensRoute} backgroundColor="#33e">
        <Text>
          Tokens
        </Text>
      </Button>
    </div>
  );
}