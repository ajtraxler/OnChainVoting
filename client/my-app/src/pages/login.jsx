import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react'
import theme from '@rebass/preset'
import {
  Box,
  Card,
  Image,
  Heading,
  Text,
  Button, 
} from 'rebass'



export default function Login(props) {

  const [ethAddress, setEthAddress] = useState('No address yet')
  const [nftCollection, setNftCollection] = useState('No NFTs yet')
  const navigate = useNavigate();

  //login with metamask
  const loginHandler = () => {
    try {
      if (window.ethereum) {
        window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(result => {
          setEthAddress(result[0]);
          return result[0]
        })
        .then((NFTObject) => {
          //console.log(NFTObject.nft_groups, "nftList from .then")
          setNftCollection(NFTObject.nft_groups);
          navigate('./tokens', { state: NFTObject.nft_groups })
        })
      }
      else {
        console.log("install metamask")
      }
    }
    catch (err) {
        console.log(err, "Error logging into Metamask")
    }
}


  return (
    <main style={{ padding: "1rem 0" }}>


        <ThemeProvider theme={theme}>
        <Box width={256}>
    <Card
      sx={{
        p: 1,
        borderRadius: 2,
        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
      }}>
      <Image src={"https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg"} />
      <Box px={2}>
        <Heading as='h3'>
          Hey
        </Heading>
        <Text fontSize={0}>
          this is a koala
        </Text>
      </Box>
    </Card>
  </Box>
        </ThemeProvider>

{/* <div className="grad">

            <div className="loginMainContent">
                <h1> Connect with Your NFT Community </h1>
                <h3>Wallet connected: {ethAddress}</h3>
                <h3>NFTS: {nftCollection ?
                    nftCollection :
                    null}</h3>
                <button className="loginButton" id="loginDash" onClick={loginHandler} >LOGIN </button>
            </div>

        </div> */}

       <Link to="/tokens/:userId">
          <Button>Login</Button>
       </Link>

       
    </main>
  );
}