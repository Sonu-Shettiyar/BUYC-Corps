import { Box, Button, Center, Flex, Heading, Input, Spinner, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts, getOEMSpecsData, updateProduct } from '../redux/productReducer/action';
import OEMCard from './OEMCard';
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from './Navbar'

const AddProduct = () => {

  const { OEMData, isLoading } = useSelector((store) => store.carReducer);
  const { isAuth } = useSelector((store) => store.authReducer);
  const { user } = useSelector((store) => store.authReducer);
  const [tableOEMData, setTableOemData] = useState(OEMData || []);
  const [specs, setSpecs] = useState({});
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [KMsOnOdometer, setKMsOnOdometer] = useState("");
  const [majorScratches, setmajorScratches] = useState("");
  const [originalPaint, setoriginalPaint] = useState("");
  const [accidentsReported, setaccidentsReported] = useState("");
  const [previousBuyers, setpreviousBuyers] = useState("");
  const [registrationPlace, setregistrationPlace] = useState("");
  const [price, setprice] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState([]);
  const [bulletPoint, setBulletPoint] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const addDescription = () => {
    let newArr = [...description];
    newArr.push(bulletPoint);
    setDescription(newArr);
    setBulletPoint("")
  }

  const storeOEMSpecs = (payload) => {
    setSpecs(payload);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (specs.Model) {

      const payload = {
        ...specs,
        title,
        image,
        dealerId: user?._id,
        dealerName: user.firstName,
        KMsOnOdometer,
        majorScratches,
        originalPaint,
        accidentsReported,
        previousBuyers,
        registrationPlace,
        price,
        color,
        description,
      }
      dispatch(addProducts(payload)).then((res) => {
        toast({
          title: "Added to MarketPlace",
          status: 'success',
          duration: 9000,
          isClosable: true,
          position: "top"
        })
        navigate("/");
      }).catch((err) => (
        toast({
          title: err?.message,
          status: 'error',
          duration: 4000,
          isClosable: true,
          position: "top"
        })
      ))
    } else {
      toast({
        title: 'Please Select OEM',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: "top"
      })
    }

  }

  if (!isAuth) {
    return <Navigate to={"/login"} />
  }

  useEffect(() => {
    dispatch(getOEMSpecsData)
    setTableOemData(OEMData);
  }, [])
  return (isLoading ? <Center h={"60vh"} >
    <Flex justify={"center"} alignItems={"center"}>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl' m={5}
      /><Heading>
        Loading.....
      </Heading>
    </Flex>
  </Center> : (<>
    <Navbar />
    <Flex justify={"space-between"} m={5}>
      <Box>
        <table>
          <thead>
            <tr>
              <th>IMAGE</th>
              <th>MODEL</th>
              <th>YEAR</th>
              <th>POWER</th>
              <th>Choose</th>
            </tr>

          </thead>
          <tbody>
            {
              tableOEMData?.map((ele) => <OEMCard key={ele._id} {...ele} specs={specs} storeOEMSpecs={storeOEMSpecs} />)
            }

          </tbody>
        </table>
        {
          tableOEMData.length == 0 && <Center h={"60vh"} >
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl' m={5}
            /><Heading>
              Loading...
            </Heading>
          </Center>
        }
      </Box>
      <Box border={"3px dashed #5dcd"} p={3} id='add-form'>
        <form onSubmit={handleSubmit}>
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
          <button style={{ padding: "10px", borderRadius: "12px" }} type="submit">{"ADD TO MARKETPLACE"}</button>
        </form>
      </Box>
      <Box id="preview">
        {image ? <Center><img src={image} alt="PREVIEW" width={"300px"} /> </Center> : <Center><img src='https://placehold.co/300x300?text=Car+Preview' width={"50%"}></img></Center>}
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
    </Flex>
  </>)

  )
}

export default AddProduct