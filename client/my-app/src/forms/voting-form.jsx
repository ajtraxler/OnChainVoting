import { Select } from "@rebass/forms";
import React, { useState } from "react";
import DropDown from "../dropdowns/voteDropdown";

export default function VotingForm (props) {
  const [selected, setSelected] = useState( {});
  const candidates = ["Magnus", "Aonia", "Imogen", "Teddy"]

  function getFilteredCandidates(position) {
    const removedCandidates = { ...selected.selectedCandidates };
    delete removedCandidates[position];
    const removedCandidatesList = Object.values(removedCandidates);
    return candidates.filter((item) => {
      return !removedCandidatesList.includes(item); //I think there is an issue here with the id
    });
  };

  const getCandidate = (position) => {
    return selected.selectedCandidates[position];
  };

  const selectCandidate = (position, candidate) => {
    setSelected({
      selectedCandidates: {
        ...selected.selectedCandidates,
        [position]: candidate,
      },
    });
  };

  return (
    <div>
      {/* <select onChange={handleSelectItem}>
    {candidates
     .filter((item) => !selected.find(candidate=> item))
     .map((item) => <option value={item}>{item}</option>)}
</select> */}
      <DropDown
        position="first preference"
        selectCandidate={selectCandidate}
        candidates={getFilteredCandidates("first preference")}
        candidate={getCandidate("first preference")}
      />

      <DropDown
        position="second preference"
        selectCandidate={selectCandidate}
        property={getFilteredCandidates("second preference")}
        candidate={getCandidate("second preference")}
      />
      <DropDown
        position="third preference"
        selectCandidate={selectCandidate}
        property={getFilteredCandidates("third preference")}
        candidate={getCandidate("third preference")}
      />
    </div>
  );
  }