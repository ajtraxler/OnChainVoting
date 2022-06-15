import { Link } from "react-router-dom";
import React from 'react'
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
       <Link to="/tokens/:userId">
          <Button>Login</Button>
       </Link>
    </main>
  );
}