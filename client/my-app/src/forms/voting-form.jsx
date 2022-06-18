import React, { useState } from "react";
import { Box, Text, Button} from "rebass";
import { Label, Select } from '@rebass/forms'
import DropDown from "../dropdowns/voteDropdown";

export default function VotingForm (props) {
  const [selected, setSelected] = useState({ selectedCandidates: {} });

  function getFilteredCandidates(name) {
    const removedCandidates = { ...selected.selectedCandidates };
    delete removedCandidates[name];
    const removedCandidatesList = Object.values(removedCandidates);
    return props.candidates.filter((item) => {
      return !removedCandidatesList.includes(item.id);
    });
  };

  const getValue = (name) => {
    return selected.selectedCandidates[name];
  };

  const selectCandidate = (name, value) => {
    setSelected({
      selectedCandidates: {
        ...selected.selectedCandidates,
        [name]: value,
      },
    });
  };

  return (
    <div>
      <DropDown
        name="first preference"
        selectCandidate={selectCandidate}
        candidates={getFilteredCandidates("first preference")}
        value={getValue("first preference")}
      />
      <DropDown
        name="second preference"
        selectCandidate={selectCandidate}
        property={getFilteredCandidates("second preference")}
        value={getValue("second preference")}
      />
      <DropDown
        name="third preference"
        selectCandidate={selectCandidate}
        property={getFilteredCandidates("third preference")}
        value={getValue("third preference")}
      />
    </div>
  );
};

