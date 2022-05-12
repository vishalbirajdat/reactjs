import { Box, Flex, HStack, Icon, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { GiTrail } from 'react-icons/gi'
import { FaQuestionCircle } from 'react-icons/fa'
import { MdOutlineOpenInNew } from 'react-icons/md'


function Header() {
  return (
      <Stack>
          <Stack bg='blue.100'  minH={{ base: 150, md: 300, lg: 300 }}>

              <VStack my={10} p={{ base: 2, md: 1, lg: 1 }}>
                  <Text fontWeight={'bold'} color={'teal.900'} fontSize={{ base: '2xl', md: '3xl', lg: '3xl' }}>Hello, How can we help you ?</Text>
                  <Text fontWeight={'semibold'} fontSize={{ base: 14, md: 16, lg: 16 }} color={'gray.700'}>Find Travel Guide, FAQ , chat</Text>
        </VStack>

              <Flex cursor={'pointer'} justify={'center'} direction={{ base: "column", md: 'row', lg: 'row' }}>


        
            <VStack  m={5}>
                      <Flex w={'full'} boxShadow='lg' p='6' rounded='lg' justify={'space-between'} bg='white'>

                          <Flex justify={'space-between'} marginRight={3}>

                            
                          <Icon as={FaQuestionCircle} w={{ base: 45, md: 50, lg: 50 }}
                              h={{ base: 45, md: 50, lg: 50 }} p={2} color='yellow.300' marginRight={7} />

                          <Stack direction={'column'}>
                              <Text fontWeight={'bold'} fontSize={{ base: 15, md: 16, lg: 16 }}>FAQ</Text>
                              <Text fontSize={{ base: 11, md: 14, lg: 14 }} fontWeight='semibold' color={'gray.500'}>Lorem ips dfnsnf um dolor. </Text>
                              </Stack>

                          </Flex>

                          <HStack display={{base:'block', md:'none', lg:'none'}}>


                              <Icon
                                  as={MdOutlineOpenInNew}
                                  w={18}
                                  h={18}
                              />

                          </HStack>

                </Flex>
            </VStack>

                      

                  
            <VStack  m={5}>
                          <Flex w={'full'} boxShadow='lg' p='6' rounded='lg' justify={'space-between'} bg='white'>
                              
                          <Flex justify={'space-between'} marginRight={3}>
                          <Icon as={GiTrail} w={{ base: 45, md: 50, lg: 50 }}
                              h={{ base: 45, md: 50, lg: 50 }} p={2} color='yellow.300' marginRight={7} />

                          <Stack direction={'column'}>
                              <Text fontWeight={'bold'} fontSize={{ base: 15, md: 16, lg: 16 }}>Travel Guide</Text>
                              <Text fontSize={{ base: 11, md: 14, lg: 14 }} fontWeight='semibold' color={'gray.500'}>Lorem ips dfnsnf um dolor, sit </Text>
                              </Stack>

                      </Flex>

                          <HStack display={{ base: 'block', md: 'none', lg: 'none' }}>


                          <Icon
                              as={MdOutlineOpenInNew}
                              w={18}
                              h={18}
                          />

                      </HStack>
                </Flex>
            </VStack>

                  



              </Flex>

          </Stack>
      </Stack>


  )
}

export default Header