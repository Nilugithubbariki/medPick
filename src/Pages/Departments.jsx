import React from 'react'
import { Box,Flex,Text } from '@chakra-ui/react'

const Departments = () => {
  return (
     <Box className="container" zIndex={'-1'}>
          <h1 className="title-text">Departments</h1>
          
          <Flex gap={'5px'} marginTop={"10px"}>
              <Box w={'68px'} h={'20px'} bgColor={"#004F95"}></Box>
              <Box w={'68px'} h={'20px'} bgColor={"#3DA5D9"}></Box>
              <Box w={'68px'} h={'20px'} bgColor={"#73BFB8"}></Box>
              <Box w={'68px'} h={'20px'} bgColor={"#FEC601"}></Box>
              <Box w={'68px'} h={'20px'} bgColor={"#EA7317"}></Box>
          </Flex>

            <div className="skill-box">
                <span className="title">Laboratory</span>
                <div className="skill-bar">
                    <span className="skill-per html "style={{backgroundColor:"#004F95"}}>
                        <span className="tooltip" style={{ right:"-40px" }}>91</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Radiology</span>
                <div className="skill-bar">
                    <span className="skill-per radiology" style={{backgroundColor:"#3DA5D9"}}>
                        <span className="tooltip" style={{ right:"-190px" }}>53</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">ICU</span>
                <div className="skill-bar">
                    <span className="skill-per icu" style={{backgroundColor:"#73BFB8"}}>
                        <span className="tooltip">98</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Operation Theatre</span>
                <div className="skill-bar">
                    <span className="skill-per ot" style={{background: "#FEC601"}}>
                        <span className="tooltip" style={{ right:"-110px" }}>75</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">OPD</span>
                <div className="skill-bar">
                    <span className="skill-per opd" style={{background: "#EA7317"}}>
                        <span className="tooltip" style={{ right:"-250px" }}>36</span>
                    </span>
                </div>
            </div>
          <Box>
              <Text className='Text'>See More</Text>
           </Box>
        </Box>
  )
}

export default Departments