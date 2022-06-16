import { React} from 'react';
import { NavLink } from 'react-router-dom';
import { Box } from 'rebass'
import {Tiles} from '@rebass/layout'

export default function ElectionsList(props) {

  return (
    <Box px={2} py={2} width={2 / 3}>
      <Tiles width={[96, null, 128]}>

    {props.elections.map( election => 
      // need to replace the _id with what the actual thing is
      <div key={election.election_id}> 
      {/* need to change the "election_name" to the actual object key */}
      {/* here will we will also need to add an image or something but let's start with the name */}
        <NavLink to={`candidates/${election.election_id}`}>{election.election_name}</NavLink>
      </div>
      )}
      </Tiles>
      </Box>
  )
}


