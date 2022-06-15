import React from "react";
import { Box, Text, Button} from "rebass";
import { Label, Input, Textarea } from '@rebass/forms'

export default function ElectionForm (props) {

  return (
  <div>
        {/* make sure that the onSubmit stuff matches on index.js */}
        <form className='election-form' onSubmit={props.handleFormSubmit}>
          <Text fontFamily='Roboto' fontSize={[ 3, 4, 5 ]} fontWeight='bold' color='#33e'>
            Create a New Election
          </Text>
          <Box>
            <Label fontFamily='Roboto' htmlFor='title'> Election Name: </Label>
            <Input fontFamily='Roboto' name='newTitle' type='text' 
            value={props.electionTitle} onChange={(evt) => props.setElectionTitle(evt.target.value)} required/>
            <Label fontFamily='Roboto' htmlFor='cutOffDate'> Last day to vote: </Label>
            <Input fontFamily='Roboto' name='cutOffDate' type='date' 
            value={props.cutOffDate} onChange={(evt) => props.setCutOffDate(evt.target.value)} required/>
            <Label fontFamily='Roboto' htmlFor='information'> Information </Label>
            <Textarea fontFamily='Roboto' name='info' type='text' 
            value={props.info} onChange={(evt) => props.setInfo(evt.target.value)} required/>
            <Label fontFamily='Roboto' htmlFor='information'> Max number of electees: </Label>
            <Input fontFamily='Roboto' name='max' type='number' 
            value={props.max} onChange={(evt) => props.setMax(evt.target.value)} required/>
          </Box>
          <Button></Button> 
        </form>
</div>
  )
}