import React, { useEffect, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Button,
    useDisclosure,
    Box,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleCar, updateProduct } from '../redux/productReducer/action'
function UpdateModal({ id }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const { forUpdate, forEdit } = useSelector((store) => store.carReducer);
    const { user } = useSelector((store) => store.authReducer);
    const dispatch = useDispatch();
    const [title, setTitle] = useState(forUpdate.title|| "");
    const [image, setImage] = useState(forUpdate.image||"");
    const [KMsOnOdometer, setKMsOnOdometer] = useState(forUpdate.KMsOnOdometer||"");
    const [majorScratches, setmajorScratches] = useState(forUpdate.majorScratches||"");
    const [originalPaint, setoriginalPaint] = useState(forUpdate.originalPaint||"");
    const [accidentsReported, setaccidentsReported] = useState(forUpdate.accidentsReported||"");
    const [previousBuyers, setpreviousBuyers] = useState(forUpdate.previousBuyers||"");
    const [registrationPlace, setregistrationPlace] = useState(forUpdate.registrationPlace||"");
    const [price, setprice] = useState(forUpdate.price||"");
    const [description, setDescription] = useState(forUpdate.description||[]);
    const [bulletPoint, setBulletPoint] = useState("");
    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
    const [overlay, setOverlay] = useState(<OverlayOne />)
    const addDescription = () => {
        let newArr = [...description];
        newArr.push(bulletPoint);
        setDescription(newArr);
        setBulletPoint("")
    }

    const handleSubmit = () => {
        const payload = { title, image, KMsOnOdometer, majorScratches, originalPaint, accidentsReported, previousBuyers, registrationPlace, price, description }
        dispatch(updateProduct(id, payload))
        // navigate("/")
    }
    useEffect(() => {
        dispatch(getSingleCar(id));
    }, [])

    return (
        <>
            <Button onClick={() => {
                setOverlay(<OverlayOne />)

                onOpen()

            }} width={"50%"}>Edit</Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                {overlay}
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Box border={"3px dashed #5dcd"} p={3} id='add-form'>
                            <form>
                                <Input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder='Image URL' required />
                                <br /><br />
                                <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter Title' required />
                                <br /><br />
                                <Input type="number" value={KMsOnOdometer} onChange={(e) => setKMsOnOdometer(e.target.value)} placeholder='Kilometers as per Odometer' required />
                                <br /><br />
                                <select name="scrath" id="scratch" value={majorScratches} onChange={(e) => setmajorScratches(e.target.value)} required>
                                    <option value="">Major Scratches</option>
                                    <option value="No">NO</option>
                                    <option value="Yes">YES</option>
                                </select>
                                <br />
                                <br />
                                <Input type="text" value={bulletPoint} onChange={(e) => setBulletPoint(e.target.value)} placeholder='add description' />
                                <br />
                                <Button onClick={addDescription}>➕</Button>
                                <br />
                                <br />
                                <Input type="text" value={originalPaint} onChange={(e) => setoriginalPaint(e.target.value)} placeholder='Original Paint' required />
                                <br />
                                <br />
                                <Input placeholder='Selling Price' type='number' value={price} onChange={(e) => setprice(e.target.value)}></Input>
                                <br />
                                <br />
                                <Input type="number" value={accidentsReported} onChange={(e) => setaccidentsReported(e.target.value)} placeholder='Number of accident reported' required />
                                <br />
                                <br />
                                <Input type="number" value={previousBuyers} onChange={(e) => setpreviousBuyers(e.target.value)} placeholder='Number of Previous owner' required />
                                <br />
                                <br />
                                <Input type="text" value={registrationPlace} onChange={(e) => setregistrationPlace(e.target.value)} placeholder='Registration Place' required />
                                <br />
                                <br />
                            </form>
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' onClick={() => {
                            handleSubmit()
                        onClose()
                        }} mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


export default UpdateModal;