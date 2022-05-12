import { Text, Stack } from '@chakra-ui/react'
import React from 'react'
import Accordions from './Accordions';
import Header from './Header';
import Navbar from './Navbar';

function Home(props) {
    const {setProgress} = props;
  return (
    <>
          <Navbar />
          <Header />
          <Accordions />

          
    </>
  )
}

export default Home