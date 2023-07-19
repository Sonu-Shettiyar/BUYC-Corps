import { Box, Button, Center, Flex, Heading, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts, getOEMSpecsData, updateProduct } from '../redux/productReducer/action';
import OEMCard from './OEMCard';
import { Navigate, useNavigate } from 'react-router-dom';

const AddProduct = () => {

  const { data, OEMData, forUpdate, forEdit } = useSelector((store) => store.carReducer);
  const { isAuth } = useSelector((store) => store.authReducer);

  const { user } = useSelector((store) => store.authReducer);
  const [tableOEMData, setTableOemData] = useState(OEMData || []);
  const [specs, setSpecs] = useState({});
  const dispatch = useDispatch();
  const [title, setTitle] = useState(forUpdate.title || "");
  const [image, setImage] = useState(forUpdate.image || "");
  const [KMsOnOdometer, setKMsOnOdometer] = useState(forUpdate.KMsOnOdometer || 0);
  const [majorScratches, setmajorScratches] = useState(forUpdate.majorScratches || "");
  const [originalPaint, setoriginalPaint] = useState(forUpdate.originalPaint || "");
  const [accidentsReported, setaccidentsReported] = useState(forUpdate.accidentsReported || 0);
  const [previousBuyers, setpreviousBuyers] = useState(forUpdate.previousBuyers || 0);
  const [registrationPlace, setregistrationPlace] = useState(forUpdate.registrationPlace || "");
  const [price, setprice] = useState(forUpdate.price || 0);
  const [color, setColor] = useState(forUpdate.color || "");
  const [description, setDescription] = useState(forUpdate.description || []);
  const [bulletPoint, setBulletPoint] = useState("");
  const navigate = useNavigate();

  const addDescription = () => {
    let newArr = [...description];
    newArr.push(bulletPoint);
    setDescription(newArr);
  }

  const storeOEMSpecs = (payload) => {
    setSpecs(payload);
    // console.log(payload)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (specs) {

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
      dispatch(addProducts(payload)).then(() => {

        navigate("/")
      }).catch((err) => alert(err.message))
    } else {
      alert("Please Select OEM")
    }

  }
  const handleUpdate = () => {
    if (specs) {

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
      dispatch(updateProduct(forUpdate?._id && forUpdate?.dealerId, payload))
      alert("Updated Succesfully...")
      navigate("/")
    } else {
      alert("Please Select OEM")
    }


  }

  if (!isAuth) {
    return <Navigate to={"/login"} />
  }

  useEffect(() => {
    dispatch(getOEMSpecsData)
    setTableOemData(OEMData);
  }, [])
  return (

    <Flex justify={"space-between"} ml={5} mr={5}>
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
            {
              tableOEMData.length == 0 && <Heading>Loading....</Heading>
            }
          </tbody>
        </table>
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
          <Input type="text" value={bulletPoint} onChange={(e) => setBulletPoint(e.target.value)} placeholder='add description' required />
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
          <Button onClick={forEdit ? handleUpdate : handleSubmit}>{forEdit ? "UPDATE DEAL" : "ADD TO MARKETPLACE"}</Button>
        </form>
      </Box>
      <Box id="preview">
        {image ? <img src={image} alt="PREVIEW" width={"100px"} /> : <Center><img src='https://placehold.co/300x300?text=Car+Preview' width={"50%"}></img></Center>}
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

  )
}

export default AddProduct