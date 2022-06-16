import LogoutButton from "../navigation-buttons/logout-button";
import { Flex } from "rebass";
import React, { useEffect, useState } from 'react';
import TokensList from "../lists/tokensList";

export default function Tokens() {
  const [tokenCollection, setTokenCollection] = useState('No Tokens yet')

  useEffect(() => {
    window.ethereum.request({ method: 'eth_requestAccounts' })
    .then((NFTObject) => {
      //console.log(NFTObject.nft_groups, "nftList from .then")
      //I'm assuming this needs to change?
      console.log(NFTObject.nft_groups);
      setTokenCollection(NFTObject.nft_groups);
    })
    .catch( error => {
      console.log(error)
      console.log("Error occured.")
    })
  }, [])

  return (
    <main style={{ padding: "1rem 0" }}>
      <Flex>
        <LogoutButton/>
      </Flex>
      <h2>Tokens</h2>
      <TokensList tokens={tokenCollection}></TokensList>
    </main>
  )
}