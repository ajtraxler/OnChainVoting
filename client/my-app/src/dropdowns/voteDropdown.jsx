import React from "react";
import { Box, } from "rebass";
import { Label, Select } from '@rebass/forms'

export default function DropDown (props) {
  function onSelect(event) {
      this.props.selectItem(this.props.name, event.target.value);
  }

  return (
  <Box width={1/2} px={2}>
    <Label>select an option…</Label>
    <Select onChange={onSelect}>
      {props.candidates.map(candidate => (<option key={candidate.candidateId} value={candidate.candidateId}>{candidate.candidateName}</option>
      ))}
    </Select>
  </Box>
  );
}