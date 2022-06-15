// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract STV{

    struct Candidate{
        address candidate; //first only msg.sender, maybe later
        string name;
        string about;
        uint electionId;
    }

    struct ElectionSpecs{
        address electioncreator; //msg.sender
        uint endOfElectionDate;
        uint numberofElected;
        uint numberofCastBallots;
    }

    struct Ballot{
        address voter;
        address[] preferences;
    }

    struct NFT{

    }

    mapping(uint=>Candidate[]) candidates; //electionId to all candidates of an election
    //electionId to ElectionSpecs
    mapping(uint => ElectionSpecs) public elections; 
    //electionId to ballotBox
    
    //keeps track of the number of elections we have
    uint ElectionCounter; 

    //MVP:
    //function createNewElection()
    //function addNewCandidate()
    //function mintWinnerNFTWithResults() //laterstage ?
    //function vote()

    //optional:
    //function removeCandidatebeforeFirstVote()
    //function deleteElectionbeforeFirstVote() 
    //function requireStaking() 
    //function sendBackStake() 
    //function approveCandidateByCreator() 
    //function setCandidateNFT()


    //the algorithm:
    //once the cutoff date arrives, trigger the voting

    //1.Step sort ballots/user votes according to first preferences and count them.
    //2.Step Determine total Number of ballots. Calculate quota for election (Droop quota).
    //3.Step distribute surplus ballots to other next preferred candidates.
    //4.Step eleminate candidates with the least votes and distribute their ballots to peoples next preference
    //5. Continue transferring ballots form winners/loosers until all winners are selected
    
    //collection of things that could go wrong:
    //people can pretend to run as someone else -> proof of  humanity?


    
    
    

    //


    function createNewElection(uint _endOfElectionDate) public {
        elections[ElectionCounter] = ElectionSpecs(msg.sender, _endOfElectionDate);
        ElectionCounter++;
    }
    //Voting functions
    
    function castBallot(uint _electionId, address[] calldata _preferences) public {
            Ballot storage ballot = ballotBox[_electionId].push();
            ballot.voter = msg.sender;
            ballot.preferences =_preferences;
            elections[_electionId].numberofCastBallots++;
    }
    function getVote(uint _electionId, uint i) public view returns(Vote memory) {
            return ballotBox[_electionId][i];
    }

    //5.1.1 Count all the voting papers to determine the total number of votes cast.
    uint totalNumberofVotsCast = elections[_electionId].numberofCastBallots;
    //5.1.2 Sort the voting papers into first preferences. (No invalid votes coming from Frontend)
    
    //How to store the ballots?
    //First idea: Map the electionId to an array of Ballots. The ballots are stored in a dynamic array
    mapping(uint =>Ballot[]) public ballotBox; 
    //how to pull out the first preference:
    function sortBallots(uint _electionId) public{
        for(uint i; i<ballotBox[electionId].length; i++){
        ballot = ballotBox[electionId][i];
        }
    }
