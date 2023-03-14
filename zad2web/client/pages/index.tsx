import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Meh, Mail, MapPin, GitBranch, Lock, User } from 'react-feather';

export default function contact() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const logIn = () => {
    axios.get('http://localhost:3001/api/login', { withCredentials: true, params: { login: login, password: password } }).then(function (response) {
      if (response.status === 200) {
        router.push({
          pathname: '/account',
        });
      }
    }).catch(e => {
      return alert(`❌ BŁĄD: ${e.response.data.msg}`)
    })
  };

  return (
    <Container height={'100vh'} bg={'white'} maxW="full" mt={0} centerContent overflow="hidden">
      <Flex marginTop={'10vh'}>
        <Box
          bg={'green.500'}
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Bank10</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.700">
                    Zaloguj się
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<Meh size="20px" />}>
                        +48420692137
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<Mail size="20px" />}>
                        pomoc@bank10.pl
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MapPin size="20px" />}>
                        Polska, Dobre Miasto
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg" marginTop={'7vh'}>
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Login</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<User color='#000000' />}
                          />
                          <Input onChange={(e) => {return setLogin(e.target.value)}} type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Hasło</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<Lock color='#000000' />}
                          />
                          <Input onChange={(e) => {return setPassword(e.target.value)}} type="password" size="md" />
                        </InputGroup>
                      </FormControl>
                      <Button onClick={() => {return logIn();}} colorScheme={'green'}>
                        Zaloguj
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}