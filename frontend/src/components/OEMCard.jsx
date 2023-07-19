import { Button } from '@chakra-ui/react'
import React from 'react'

const OEMCard = (props) => {
    const { Model, Year, List_Price, Mileage, imageUrl, Power,storeOEMSpecs,specs,_id } = props;
  return (
      <tr>
          <td>
              <img src={imageUrl} width={"60px"} />
          </td>
          <td>{ Model}</td>
          <td>{ Year}</td>
          <td>{Power}</td>
          <td><Button bg={specs?._id===_id?"green":""} onClick={() => storeOEMSpecs(props)}>{ specs?._id===_id?"Selected":"Select"}</Button></td>
</tr>
    )
}

export default OEMCard