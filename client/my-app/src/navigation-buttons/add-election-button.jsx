import { useNavigate } from "react-router-dom";
import { Button, Text} from "rebass";

export default function AddElectionButton() {

  let navigate = useNavigate(); 
  const AddElectionRoute = () =>{ 
    let path = `/addElection/:tokenId`; 
    navigate(path);
  }

  return (
    <div>
      <Button mr={2} onClick={AddElectionRoute} backgroundColor="#33e">
        <Text>
          + Election
        </Text>
      </Button>
    </div>
  );
}