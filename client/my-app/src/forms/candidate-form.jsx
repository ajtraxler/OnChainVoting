import React from "react";
import { Box, Text, Button} from "rebass";
import { Label, Input, Textarea, Select } from '@rebass/forms'

export default function CandidateForm (props) {

  return (
  <div>
        {/* make sure that the onSubmit stuff matches on index.js */}
        <form className='election-form' onSubmit={props.handleFormSubmit}>
          <Text fontFamily='Roboto' fontSize={[ 3, 4, 5 ]} fontWeight='bold' color='#33e'>
            Create a New Candidate
          </Text>
          <Box>
            <Label fontFamily='Roboto' htmlFor='candidate'> Election Name: </Label>
            <Input fontFamily='Roboto' name='newCandidate' type='text' 
            value={props.newCandidate} onChange={(evt) => props.setNewCandidate(evt.target.value)} required/>
            <Text> This will say the candidate's eth address </Text>
            <Text> This will say the chosen Token </Text>
            {/* We could have it that a drop down menu appears w all of the tokens so they can select the token */}
            <Label fontFamily='Roboto' htmlFor='position'> Position: </Label>
            <Input fontFamily='Roboto' name='position' type='text'
            value={props.position} onChange={(evt) => props.setPosition(evt.target.value)} required/>
            <Label fontFamily='Roboto' htmlFor='about'> About Candidate: </Label>
            <Textarea fontFamily='Roboto' name='about' type='text' 
            value={props.about} onChange={(evt) => props.setAbout(evt.target.value)} required/>
          </Box>
          <Button>Submit</Button> 
          {/* once the form has been submitted, do we want a modal to come up that
          says that the form has been submitted and when you click "ok" it takes you 
          back to the home page? */}
        </form>
</div>
  )
}