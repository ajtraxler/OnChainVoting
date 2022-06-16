import { React} from 'react';
import { NavLink } from 'react-router-dom';
import { Box } from 'rebass'
import { Tiles } from '@rebass/layout'

export default function CandidatesList(props) {

  return (
    <Box px={2} py={2} width={2 / 3}>
      <Tiles width={[96, null, 128]}>
        {props.cadidates.map( candidate => 
          // need to replace the _id with what the actual thing is
          <div key={candidate.candidate_id}> 
          {/* need to change the "token_name" to the actual object key */}
          {/* here will we will also need to add an image or something but let's start with the name */}
            <NavLink to={`candidate/${candidate.candidate_id}`}>{candidate.candidate_name}</NavLink>
          </div>
          )}
      </Tiles>
    </Box>
  )
}