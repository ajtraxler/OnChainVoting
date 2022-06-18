import React from "react";
import { Box, } from "rebass";
import { Label, Select } from '@rebass/forms'

export default function DropDown (props) {
  function onSelect(event) {
      props.selectCandidate(props.position, event.target.value);
  }

  return (
  <Box width={1/2} px={2}>
<select onChange={onSelect}>
      <option>select an option…</option>
      {props.candidates.map((candidate) => (
        <option key={candidate} value={candidate}>
          {candidate}
        </option>
      ))}
    </select>
  </Box>
  );
}