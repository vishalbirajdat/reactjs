import { Box, Flex, HStack, Icon, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { IoHelpBuoyOutline } from 'react-icons/io5'
import { IoIosMenu } from 'react-icons/io'
import { RiAccountCircleFill } from 'react-icons/ri'
import { HiMenuAlt3 } from 'react-icons/hi'

function Navbar() {
    return (
        <Stack >
            <Flex justify={'space-between'} mx={2}>

                <Box p={1} marginLeft={{ base: 0, md: 4, lg: 4 }} cursor={'pointer'}>

                    <Image src='/logo.png' w={{ base: 70, md: 75, lg: 75 }} h={{ base: 35 ,md: 42, lg: 42 }}  alt='error' />
            </Box>

            <Box display={{base:'none', md:'block', lg:'block'}}>

            <HStack alignItems={'right'}>
                        <Box p={2}>
                            <HStack cursor={'pointer'}>
                    
                    <IoHelpBuoyOutline size={18}/>
                    <Text fontWeight={'semibold'} fontSize={12}>Help</Text>
                    </HStack>
                        </Box>

              <Box p={2}>
                            <HStack cursor={'pointer'}>
                        <Image src='/flag.png' w={7} h={4} alt='Dan Abramov' />
                    <Text fontWeight={'semibold'} fontSize={12}>Deutsch | EUR</Text></HStack>
             </Box>         
                        <Box p={1}> 
                            <HStack cursor={'pointer'} rounded={'xl'} px={3} py={2} bg='gray.200'>
                    <RiAccountCircleFill size={18} />
                    <IoIosMenu />
                </HStack>
             </Box>         
            </HStack>
                </Box>


                <Box display={{ base: 'block', md: 'none', lg: 'none' }}>

                    <HStack alignItems={'right'}>

                        <Box p={2}>
                            <HStack cursor={'pointer'}>
                                <Text fontWeight={'semibold'} fontSize={12}>Open Requests</Text></HStack>
                        </Box>
                        <Box p={1}>
                            <HStack cursor={'pointer'}  px={3} py={2}>
                                <RiAccountCircleFill size={18} />
                                <HiMenuAlt3 />
                            </HStack>
                        </Box>
                    </HStack>
                </Box>


        </Flex>
        </Stack>

    )
}

export default Navbar