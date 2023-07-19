import React from 'react'
import { Box, Button, Flex, Image } from "@chakra-ui/react";
const Navbar = () => {

    return (
        <Flex id='navbar' justify={"space-between"} align={"center"}>
            <Box>
            <img src='https://png.pngtree.com/png-clipart/20210606/original/pngtree-sport-car-logo-vector-png-image_6398339.jpg' width={"90px"} />
          </Box>

            <Box>
                <Button>Sign In</Button>
            </Box>
        </Flex>
    )
}

export default Navbar