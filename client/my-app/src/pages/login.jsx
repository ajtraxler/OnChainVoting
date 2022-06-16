import { Link } from "react-router-dom";
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

useEffect(() => {
  if (window.ethereum) {
    window.ethereum.request({ method: 'eth_requestAccounts' })
    .then(response => {
      setEthAddress(response[0]);
    })
    .catch( error => {
      console.log(error)
      console.log("Error occured.")
  })
} else {
  console.log("metamask not connected")
}
  }
, [])

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

            <div className="loginMainContent">
                <h1> Connect with Your NFT Community </h1>
                {(ethAddress) ? <h3>Wallet connected: {ethAddress}</h3> : <h3>Connect your metamask wallet</h3>}
                <Link to={`tokens/${ethAddress}`}>
                  <button className="loginButton" id="loginDash" >LOGIN </button>
                </Link>
            </div> 
    </main>
  );
}