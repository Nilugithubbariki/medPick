import React from 'react'
import Calibrated from '../Pages/Calibrated'
import { Flex } from '@chakra-ui/react'
import Manula from '../Pages/Manula'
import Warrenty from '../Pages/Warrenty'
import '../App.css'
const Last = () => {
    
    return (
        
           <Flex position={'absolute'} zIndex={'-1'} gap={'20px'} marginTop={'20px'} marginLeft={'10px'} marginBottom={'90px'} className='last'>
                <Calibrated />
                <Manula />
                <Warrenty/>
            </Flex>
      
  )
}

export default Last