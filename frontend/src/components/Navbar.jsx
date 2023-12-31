import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Text
} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { logoutHandler } from '../redux/authReducer/action';



function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { user, isAuth } = useSelector((store) => store.authReducer);
    const dispatch = useDispatch();
    return (
        <>
            <Box position={"sticky"} zIndex={999} mt={0} p={0}  bg={useColorModeValue('blue.100', 'gray.900')} px={4}>
                <Flex pl={6} h={20} pr={6} alignItems={'center'} justifyContent={'space-between'}>
                    <Link to={"/"}>
                    <Flex gap={5}  >
                        <img src='https://png.pngtree.com/png-clipart/20210606/original/pngtree-sport-car-logo-vector-png-image_6398339.jpg' style={{ borderRadius: "100px", boxShadow: "2px 3px" }} width={"60px"} />
                        <Text mt={3} fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                            BuyCars
                        </Text>
                    </Flex>
                    </Link>
                    

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                            {!isAuth && <Link to="/login"><Button>Sign In</Button></Link>}
                            {isAuth && <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470951917131-VO6KK2XIFP4LPLCYW7YU/McQueen15.jpg'}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={'https://www.petsworld.in/blog/wp-content/uploads/2016/10/Car-Ride-1.jpg'}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>{user?.firstName}</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Your Servers</MenuItem>
                                    <MenuItem>Account Settings</MenuItem>
                                    <MenuItem><Button onClick={() => dispatch(logoutHandler)}>Sign out</Button></MenuItem>
                                </MenuList>
                            </Menu>}
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
export default Navbar;
