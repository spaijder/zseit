// @ts-nocheck

import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    Tabs, TabList, TabPanels, Tab, TabPanel,
    ModalBody,
    ModalCloseButton,
    PinInput,
    PinInputField,
    useColorModeValue,
    useDisclosure,
    HStack,
    ButtonGroup,
    Input
} from '@chakra-ui/react';
import axios from 'axios';
import { Suspense, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function SocialProfileSimple() {
    const [option, setOption] = useState();
    const [amount, setAmount] = useState(0);

    const [pin1, setPin1] = useState();
    const [pin2, setPin2] = useState();
    const [pin3, setPin3] = useState();
    const [pin4, setPin4] = useState();

    const router = useRouter();
    const [user, setUser] = useState(
        {
            login: '',
            haslo: '',
            imie: '',
            nazwisko: '',
            tag: '@brak'
        }
    );
    const [balance, setBalance] = useState();

    useEffect(() => {
        axios.get('http://localhost:3001/api/data', { withCredentials: true })
            .then(async function (response) {
                if (response.status === 200) {
                    if (!response.data.msg.user.imie) {
                        return router.push({
                            pathname: '/'
                        });
                    }

                    axios.get('http://localhost:3001/api/balance', { withCredentials: true, params: { login: response.data.msg.user.login } })
                        .then(async function (response) {
                            if (response.status === 200) {
                                return await setBalance(response.data.msg)
                            }
                        }).catch((e) => {
                            setBalance(0);
                        })

                    return await setUser(response.data.msg.user)
                } else {
                    return router.push({
                        pathname: '/'
                    });
                }
            }).catch((e) => {
                return router.push({
                    pathname: '/'
                })
            })
    }, [])


    const operation = () => {
        if (pin1 + pin2 + pin3 + pin4 === "1111")

        console.log(option);
        if (option === 0) {
            if (balance < amount) {
                return alert('Nie masz tyle na koncie!');
            }
            axios.get('http://localhost:3001/api/withdraw', { withCredentials: true, params: { login: user.login, amount: amount } })
                .then(function (response) {
                    if (response.status === 200) {
                        window.location.reload()
                        return alert(`Wypłacono ${amount}zł z konta`);
                    }
                }).catch((e) => {
                    return alert(e);
                });
        }

        if (option === 1) {

            axios.get('http://localhost:3001/api/deposit', { withCredentials: true, params: { login: user.login, amount: amount } })
                .then(function (response) {
                    if (response.status === 200) {
                        window.location.reload()
                        return alert(`Wpłacono ${amount}zł na konto`);
                    }
                }).catch((e) => {
                    return alert(e);
                })
        }
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Center py={6}>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent bg={'green.500'}>
                    <ModalHeader color={'white'}>Wymagane potwierdzenie</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody justifyContent={'center'} textAlign={'center'}>
                        <Tabs variant='enclosed'>
                            <TabList>
                                <Tab onClick={() => { return setOption(0) }} color={'white'} fontWeight={'black'}>Wypłać</Tab>
                                <Tab onClick={() => { return setOption(1) }} color={'white'} fontWeight={'black'}>Wpłać</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Heading padding={'6'} color={'white'} fontWeight={'black'}>Wypłać pieniądze</Heading>
                                    <Box color={'white'} padding={'2'}>Wprowadź kod PIN:</Box>
                                    <HStack width={'10vw'} marginX={'auto'} textAlign={'center'}>
                                        <PinInput size={'lg'}>
                                            <PinInputField onChange={(e) => {return setPin1(e.target.value)}} color={'white'} fontWeight={'black'} />
                                            <PinInputField onChange={(e) => {return setPin2(e.target.value)}} color={'white'} fontWeight={'black'} />
                                            <PinInputField onChange={(e) => {return setPin3(e.target.value)}} color={'white'} fontWeight={'black'} />
                                            <PinInputField onChange={(e) => {return setPin4(e.target.value)}} color={'white'} fontWeight={'black'} />
                                        </PinInput>
                                    </HStack><br />
                                    <Input onChange={(e) => { return setAmount(e.target.value); }} width={'5vw'} type={'number'} placeholder={'Kwota'} min={1} max={1000} /> <Text as={'span'} color={'white'} fontWeight={'black'}>zł</Text>
                                </TabPanel>
                                <TabPanel>
                                    <Heading padding={'6'} color={'white'} fontWeight={'black'}>Wpłać pieniądze</Heading>
                                    <Box color={'white'} padding={'2'}>Wprowadź kod PIN:</Box>
                                    <HStack width={'10vw'} marginX={'auto'} textAlign={'center'}>
                                        <PinInput size={'lg'}>
                                            <PinInputField color={'white'} fontWeight={'black'} />
                                            <PinInputField color={'white'} fontWeight={'black'} />
                                            <PinInputField color={'white'} fontWeight={'black'} />
                                            <PinInputField color={'white'} fontWeight={'black'} />
                                        </PinInput>
                                    </HStack><br />
                                    <Input onChange={(e) => { return setAmount(e.target.value); }} width={'5vw'} type={'number'} placeholder={'Kwota'} min={1} max={500} /> <Text as={'span'} color={'white'} fontWeight={'black'}>zł</Text>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </ModalBody>
                    <ModalFooter>
                        <ButtonGroup>
                            <Button onClick={onClose}>Anuluj</Button>
                            <Button onClick={() => { operation(); }}>Dalej</Button>
                        </ButtonGroup>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Box
                marginTop={'20vh'}
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('green.500', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}>
                <Avatar
                    size={'xl'}
                    src={
                        'data:image/jpeg;base64,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'
                    }
                    mb={4}
                    pos={'relative'}
                />
                <Heading fontSize={'2xl'} color={'white'} fontFamily={'body'}>
                    <Suspense fallback={'Loading...'}>
                        {user.imie} {user.nazwisko}
                    </Suspense>
                </Heading>
                <Text fontWeight={600} color={'gray.200'} mb={4}>
                    <Suspense fallback={'Lodaing...'}>
                        @{user.tag}
                    </Suspense>
                </Text>
                <Text
                    textAlign={'center'}
                    fontSize={'2xl'}
                    fontWeight={'black'}
                    color={useColorModeValue('white', 'gray.400')}
                    px={3}>
                    <Suspense fallback={'Loading...'}>
                        {balance === 0 ? 'jesteś zerem' : `${balance}zł`}
                    </Suspense>
                </Text>
                <Stack mt={8} direction={'row'} spacing={4}>
                    <Button
                        onClick={onOpen}
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        _focus={{
                            bg: 'gray.200',
                        }}>
                        Wpłać
                    </Button>
                    <Button
                        onClick={onOpen}
                        variant={'solid'}
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'green.700'}
                        color={'white'}
                        _hover={{
                            bg: 'green.500',
                        }}
                        _focus={{
                            bg: 'green.500',
                        }}>
                        Wypłać
                    </Button>
                </Stack>
            </Box>
        </Center>
    );
}