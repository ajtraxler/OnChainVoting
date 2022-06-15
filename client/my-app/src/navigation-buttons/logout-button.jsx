import { useNavigate } from "react-router-dom";
import { Button, Text} from "rebass";

export default function LogoutButton() {

  let navigate = useNavigate(); 
  const LogoutRoute = () =>{ 
    let path = `/`; 
    navigate(path);
  }

  return (
    <div>
      <Button mr={2} onClick={LogoutRoute} backgroundColor="#33e">
        <Text>
          Logout
        </Text>
      </Button>
    </div>
  );
}