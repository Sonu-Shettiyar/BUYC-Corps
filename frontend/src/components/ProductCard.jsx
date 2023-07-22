import React from 'react'
import {
    Badge,
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { deleteProduct } from '../redux/productReducer/action';
import { UPDATE_PRODUCT } from '../redux/actionTypes';
import { useNavigate } from 'react-router-dom';
import UpdateModal from './UpdateModal';
function ProductCard({
    title,
    image,
    dealerId,
    dealerName,
    KMsOnOdometer,
    majorScratches,
    originalPaint,
    accidentsReported,
    previousBuyers,
    registrationPlace,
    price,
    color,
    description,
    Model,
    Max_Speed,
    Mileage,
    Colors,
    _id, ...rest
}) {

    const { user } = useSelector((store) => store.authReducer);
    const props = {
        title,
        image,
        dealerId,
        dealerName,
        KMsOnOdometer,
        majorScratches,
        originalPaint,
        accidentsReported,
        previousBuyers,
        registrationPlace,
        price,
        color,
        description,
        Model,
        Max_Speed,
        Mileage,
        Colors,
        ...rest
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleDelete = (id) => {
        dispatch(deleteProduct(id))
    }
  
    
    return (
        <Center py={6}>
            <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: '100%', md: '540px' }}
                height={{ sm: '400px', md: '100%' }}
                direction={{ base: 'column', md: 'row' }}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'xl'}
                padding={2}>
                <Flex flex={1} bg="blue.200">
                    <Image
                        objectFit="cover"
                        boxSize="100%"
                        src={image}
                    />
                </Flex>
                <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    // alignItems="center"
                    p={1}
                    pt={2}>
                    <Heading fontSize={'2xl'} fontFamily={'body'}>
                        {title}
                    </Heading>
                    <Flex justify="space-between">
                    <Text fontWeight={600} color={'gray.500'} size="sm" >
                            {Model} </Text>
                        <Box>
                           {
                            Colors?.map((el,ind)=>( <Badge
                                px={1}
                                py={1}
                                bg={el}
                                key={ind}
                              >{el}
                            </Badge>))
                           }
                        </Box>
                    </Flex>

                    <Stack align={'center'} justify={'center'} direction={'row'} mt={2}>
                        <Badge
                            px={2}
                            py={1}
                            bg={useColorModeValue('gray.50', 'gray.800')}
                            fontWeight={'400'}>
                            Price: {price} /-
                        </Badge>
                        <Badge
                            px={2}
                            py={1}
                            bg={useColorModeValue('gray.50', 'gray.800')}
                            fontWeight={'400'}>
                            Speed: {Max_Speed} km/hr            </Badge>
                            
                        <Badge
                            px={2}
                            py={1}
                            bg={useColorModeValue('gray.50', 'gray.800')}
                            fontWeight={'400'}>
                            Mileage: {Mileage}/ltr
                        </Badge>
                    </Stack>

                    {
                        user._id && user._id === dealerId &&
                        (<Stack
                            width={'90%'}
                            mt={'1rem'}
                            direction={'row'}
                            justifyContent={'space-evenly'}
                            alignItems={'center'}>
                           
                            <UpdateModal id={_id} />
                            <Button
                                onClick={() => handleDelete(_id)}
                                // flex={1}
                                width={"50%"}
                                fontSize={'sm'}
                                bg={'blue.400'}
                                color={'white'}
                                boxShadow={
                                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                                }
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                _focus={{
                                    bg: 'blue.500',
                                }}>
                                DELETE
                            </Button>
                        </Stack>)}

                    (
                    <BasicUsage {...props} />
                    )

                </Stack>
            </Stack>
        </Center>
    );
}

function BasicUsage({
    title,
    image,
    dealerId,
    dealerName,
    KMsOnOdometer,
    majorScratches,
    originalPaint,
    accidentsReported,
    previousBuyers,
    registrationPlace,
    price,
    color,
    description,
    Model,
    Max_Speed,
    Mileage
}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen} w={"90%"} bg={"#89cfd8ab"}>SEE MORE DETAILS</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <Box id="preview">
                            {<Center><img src={image} width={"80%"}></img></Center>}
                            <br />
                            <hr style={{ border: "2px dashed gray" }} />
                            <br />

                            <h1>Title: {title}</h1> <br />
                            <h1>Kilometers: {KMsOnOdometer}</h1> <br />
                            <h3>Description:</h3>
                            <div style={{ marginLeft: "20px" }}> <ul>
                                {
                                    description?.map((el) => {
                                        return <li key={el}>{el}</li>
                                    })
                                }
                            </ul></div>
                            <br />
                            <h1>Major Scratches: {majorScratches}</h1> <br />
                            <h1>Original Paint: {originalPaint}</h1> <br />
                            <h1>No. of Accident Reported: {accidentsReported}</h1> <br />
                            <h1>Previous Owner: {previousBuyers}</h1> <br />
                            <h1>Registration Place: {registrationPlace}</h1> <br />



                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ProductCard;