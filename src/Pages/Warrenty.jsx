import { Box, Heading, Image } from '@chakra-ui/react'
import warrenty from '../Logos/Vector (11).svg'
const Warrenty = () => {
  return (
   <Box w={'240px'} height={'380px'} boxShadow={"0px 4px 8px rgba(0, 79, 149, 0.25)"}  borderRadius={" 30px"}>
          <Heading color={"#004F95"} fontSize={'32px'} fontFamily={'Poppins'} marginTop={'40px'}>Warranty</Heading>
          <Image src={warrenty} height={'150px'}  marginLeft={'40px'} marginTop={'40px'} />
   </Box> 
  )
}

export default Warrenty