import { useNavigate } from "react-router-dom";
import { Button, Text} from "rebass";

export default function CandidatesButton() {

  let navigate = useNavigate(); 
  const CandidatesRoute = () =>{ 
    let path = `/candidates/:electionId`; 
    navigate(path);
  }

  return (
    <div>
      <Button mr={2} onClick={CandidatesRoute} backgroundColor="#33e">
        <Text>
          Candidates
        </Text>
      </Button>
    </div>
  );
}
