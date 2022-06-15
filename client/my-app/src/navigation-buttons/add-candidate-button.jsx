import { useNavigate } from "react-router-dom";
import { Button, Text} from "rebass";

export default function AddCandidateButton() {

  let navigate = useNavigate(); 
  const AddCandidateRoute = () =>{ 
    let path = `/addCandidate/:electionId`; 
    navigate(path);
  }

  return (
    <div>
      <Button mr={2} onClick={AddCandidateRoute} backgroundColor="#33e">
        <Text>
          + Candidate
        </Text>
      </Button>
    </div>
  );
}
