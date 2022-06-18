import LogoutButton from "../navigation-buttons/logout-button";
import { Flex, Box } from "rebass";
import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import {Tiles} from "@rebass/layout";

export default function Tokens() {
  const [tokenCollection, setTokenCollection] = useState([])

  useEffect(() => {
    window.ethereum.request({ method: 'eth_requestAccounts' })
    .then((NFTObject) => {
      console.log(NFTObject.nft_groups, "nftList from .then")
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
      <Box px={2} py={2} width={2 / 3}>
      <Tiles width={[96, null, 128]}>
        {tokenCollection.map( token => 
          // need to replace the _id with what the actual thing is
          <div key={token.token_id}> 
          {/* need to change the "token_name" to the actual object key */}
          {/* here will we will also need to add an image or something but let's start with the name */}
            <NavLink to={`elections/${token.token_id}`}>{token.token_name}</NavLink>
          </div>
          )}
      </Tiles>
    </Box>
    </main>
  )
}