import { useNavigate } from "react-router-dom";
import { Button, Text} from "rebass";

export default function ElectionsButton() {

  let navigate = useNavigate(); 
  const ElectionsRoute = () =>{ 
    let path = `/elections/:tokenId`; 
    navigate(path);
  }

  return (
    <div>
      <Button mr={2} onClick={ElectionsRoute} backgroundColor="#33e">
        <Text>
          Elections
        </Text>
      </Button>
    </div>
  );
}
