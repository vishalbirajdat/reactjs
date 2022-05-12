import {
  Box,
  Stack,
  VStack,
  Flex,
  HStack,
  Icon,
  Text,
  Image,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import { BiChevronUp, BiChevronDown, BiMailSend } from "react-icons/bi";

function Accordions() {

  const [chat, setChat] = useState(false)
  const [social, setSocial] = useState(false)
  const [sendQuery, setSendQuery] = useState(false)


  return (  
    <VStack mb={6}>

      <Box marginTop={3} marginBottom={3} minW={{ base: 'full', md: '600px', lg: '600px' }} boxShadow="xl"
        p="6"
        rounded="lg">

        <Flex cursor={'pointer'} my={3} onClick={()=>{if(chat){
          setChat(false)
        }else{setChat(true)}}} justify={'space-between'}>

          <Flex
            justify={"space-between"}
            bg="white"
          >
            <Icon
              as={BsFillChatRightDotsFill}
              w={{ base: 45, md: 50, lg: 50 }}
              h={{ base: 45, md: 50, lg: 50 }}
              p={2}
              color="pink.400"
              marginRight={7}
            />

            <Stack direction={"column"}>
              <Text fontWeight={'bold'} fontSize={{ base: 15, md: 16, lg: 16 }}>Chat</Text>
              <Text fontSize={{ base: 11, md: 14, lg: 14 }} fontWeight='semibold' color={'gray.500'}>Lorem ips dfnsnf um dolor. </Text>
            </Stack>
          </Flex>


          <Icon
            as={chat ? BiChevronUp : BiChevronDown}
            w={15}
            h={15}
            marginRight={7}
          />

        </Flex>

        <Stack display={chat ? 'block' : 'none'}>

        <VStack>
          <HStack p={6}>

            <VStack p={5}>
                <Image src='/telegram.png' w={{ base: 25, md: 30, lg: 30 }}
                  h={{ base: 25, md: 30, lg: 30 }} alt='error' />
                <Text fontWeight={'semibold'} fontSize={{ base: 11, md: 14, lg: 14 }}>Telegram</Text>

            </VStack>

            <VStack p={5}>
                <Image src='/whatsapp.jfif' w={{ base: 25, md: 30, lg: 30 }}
                  h={{ base: 25, md: 30, lg: 30 }} alt='error' />
                <Text fontWeight={'semibold'} fontSize={{ base: 11, md: 14, lg: 14 }}>Whatsapp</Text>

            </VStack>


            <VStack p={5}>
                <Image src='/livechat.jfif' w={{ base: 25, md: 30, lg: 30 }}
                  h={{ base: 25, md: 30, lg: 30 }} alt='error' />
                <Text fontWeight={'semibold'} fontSize={{ base: 11, md: 14, lg: 14 }}>Live Chat</Text>

            </VStack>

           
          </HStack>
        </VStack>

      </Stack>

</Box>




      <Box marginTop={3} marginBottom={3} minW={{ base: 'full', md: '600px', lg: '600px' }} boxShadow="xl"
        p="6"
        rounded="lg">

        <Flex cursor={'pointer'} my={3} onClick={() => {
          if (social) {
            setSocial(false)
          } else { setSocial(true) }
        }} justify={'space-between'}>

          <Flex
            justify={"space-between"}
            bg="white"
          >
            <Icon
              as={TiSocialInstagramCircular}
              w={{ base: 45, md: 50, lg: 50 }}
              h={{ base: 45, md: 50, lg: 50 }}
              p={2}
              color="pink.400"
              marginRight={7}
            />

            <Stack direction={"column"}>
              <Text fontWeight={'bold'} fontSize={{ base: 15, md: 16, lg: 16 }}>Social</Text>
              <Text fontSize={{ base: 11, md: 14, lg: 14 }} fontWeight='semibold' color={'gray.500'}>Lorem ips dfnsnf um dolor. </Text>
            </Stack>
          </Flex>


          <Icon
            as={social ? BiChevronUp : BiChevronDown}
            w={15}
            h={15}
            marginRight={7}
          />

        </Flex>



        <Stack display={social ? 'block' : 'none'}>
        <VStack>
          <HStack p={3}>
            <Box p={6}>
                <Image src='/facebook.jfif' w={{ base: 25, md: 30, lg: 30 }}
                  h={{ base: 25, md: 30, lg: 30 }} alt='error' />
            </Box>

            <Box p={6}>
                <Image src='/instagram.jfif' w={{ base: 25, md: 30, lg: 30 }}
                  h={{ base: 25, md: 30, lg: 30 }} alt='error' />

            </Box>

            <Box p={6}>
                <Image src='/twitter.png' w={{ base: 25, md: 30, lg: 30 }}
                  h={{ base: 25, md: 30, lg: 30 }} alt='error' />
            </Box>

            <Box p={6}>
                <Image src='/lindin.png' w={{ base: 25, md: 30, lg: 30 }}
                  h={{ base: 25, md: 30, lg: 30 }} alt='error' />
            </Box>


          </HStack>
        </VStack>
        </Stack>


      </Box>







      <Box marginTop={3} marginBottom={5} minW={{ base: 'full', md: '600px', lg: '600px' }} boxShadow="xl"
        p="6"
        rounded="lg">

        <Flex cursor={'pointer'} my={3} onClick={() => {
          if (sendQuery) {
            setSendQuery(false)
          } else { setSendQuery(true) }
        }} justify={'space-between'}>

          <Flex
            justify={"space-between"}
            bg="white"
          >
            <Icon
              as={BiMailSend}
              w={{ base: 45, md: 50, lg: 50 }}
              h={{ base: 45, md: 50, lg: 50 }}
              p={2}
              color="pink.400"
              marginRight={7}
            />

            <Stack direction={"column"}>
              <Text fontWeight={'bold'} fontSize={{ base: 15, md: 16, lg: 16 }}>SendQuery</Text>
              <Text fontSize={{ base: 11, md: 14, lg: 14 }} fontWeight='semibold' color={'gray.500'}>Lorem ips dfnsnf um dolor. </Text>
            </Stack>
          </Flex>


          <Icon
            as={sendQuery ? BiChevronUp : BiChevronDown}
            w={15}
            h={15}
            marginRight={7}
          />

        </Flex>

        <Stack display={sendQuery ? 'block' : 'none'}>
        <Stack p={6}>

            <Flex justify={'space-between'} direction={{ base: 'column', md: 'row', lg: 'row' }}>


            <Stack direction={'column'}>


              <Text fontWeight={'semibold'} fontSize={13}>Name</Text>


              <Input
                type="text"
                
                minW={{ base: 'full', md: '250px', lg: '250px' }}
                placeholder="Name"
                fontSize={12}
                fontWeight={'semibold'}
              />

            </Stack>


            <Stack direction={'column'}>


              <Text fontWeight={'semibold'} fontSize={13}>Email</Text>


              <Input
                type="email"
                minW={{ base: 'full', md: '250px', lg: '250px' }}
                placeholder="Email"
                fontSize={12}
                fontWeight={'semibold'}
              />

            </Stack>

          </Flex>


            <Flex justify={'space-between'} direction={{ base: 'column', md: 'row', lg: 'row' }}>

            <Stack direction={'column'}>


              <Text fontWeight={'semibold'} fontSize={13}>Subject</Text>


              <Input
                type="text"
                minW={{ base: 'full', md: '250px', lg: '250px' }}
                placeholder="Subject"
                fontSize={12}
                fontWeight={'semibold'}
              />

            </Stack>



            <Stack direction={'column'}>


              <Text fontWeight={'semibold'} fontSize={13}>Order No</Text>


              <Input
                type="text"
                minW={{ base: 'full', md: '250px', lg: '250px' }}
                placeholder="Order No"
                fontSize={12}
                fontWeight={'semibold'}
              />

            </Stack>


          


          </Flex>




            <Stack direction={'column'}>


              <Text fontWeight={'semibold'} fontSize={13}>Your Query</Text>


              <Textarea
              type="text"
              minW={{ base: 'full', md: '250px', lg: '250px' }}
              placeholder="Your Query"
              fontSize={12}
              fontWeight={'semibold'}
              />

            </Stack>



</Stack>

<VStack p={3}>

            <Button size={"md"} colorScheme='pink' variant='solid'>
              Submit
            </Button>

</VStack>

        </Stack>

      </Box>


    </VStack>
  );
}

export default Accordions;
