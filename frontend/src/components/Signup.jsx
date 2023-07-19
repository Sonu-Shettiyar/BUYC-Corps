import React from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    // const 

    return (
        <>
         <Flex p={"5px"} pl={"50px"}  alignItems={"center"} gap={"20px"}>
                    
                    <img src='https://png.pngtree.com/png-clipart/20210606/original/pngtree-sport-car-logo-vector-png-image_6398339.jpg' style={{borderRadius:"100px",boxShadow:"2px 3px"}} width={"60px"} />
                    <Heading  fontSize={'4xl'} textAlign={'center'}>
                    Buy Cars
                </Heading>
                </Flex>
        <Flex
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
           
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>

                    <Flex alignItems={"center"} gap={"20px"}>
                    
                        <img src='https://png.pngtree.com/png-clipart/20210606/original/pngtree-sport-car-logo-vector-png-image_6398339.jpg' style={{borderRadius:"100px",boxShadow:"2px 3px"}} width={"70px"} />
                        <Heading  fontSize={'4xl'} textAlign={'center'}>
                        Buy Cars
                    </Heading>
                    </Flex>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        One stop for Selling and Buying Pre-Owned cars
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <HStack>
                            <Box>
                                <FormControl id="firstName" isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input type="text"  />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName">
                                    <FormLabel>Last Name</FormLabel>
                                    <Input type="text" />
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() =>
                                            setShowPassword((showPassword) => !showPassword)
                                        }>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={1}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user? <Link color={'blue.400'} to={"/login"}>Login</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
        </>
    );
}

export default Signup