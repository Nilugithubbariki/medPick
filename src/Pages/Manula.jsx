import { Box, Button, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import manual from '../Logos/Frame.svg'
const Manula = () => {
  return (
      <Box w={'242px'} height={'380px'} boxShadow={"0px 4px 8px rgba(0, 79, 149, 0.25)"}  borderRadius={" 30px"}>
          <Heading color={"#004F95"} fontSize={'32px'} fontFamily={'Poppins'} marginTop={'40px'}>Manuals</Heading>
          <Image src={manual} height={'130px'} marginLeft={'70px'} marginTop={'20px'} />
          <Box marginTop={'20px'}>
              <Button background={"#004F95"}
              box-shadow={"0px 4px 8px -2px rgba(0, 79, 149, 0.25)"}
                border-radius={" 5px"} color={'white'} w={'223px'} h={'48px'} marginBottom={'10px'} _hover={{  bg: 'Orange',
          color: 'white',
}}>User Manual</Button>
          
          <Button background={"#004F95"}
              box-shadow={"0px 4px 8px -2px rgba(0, 79, 149, 0.25)"}
                border-radius={" 5px"} color={'white'} w={'223px'} h={'48px'} marginBottom={'10px'} _hover={{  bg: 'Orange',
          color: 'white',
}}>Service Manual</Button>
          </Box>
   </Box> 
  )
}

export default Manula