import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import '../App.css'
const Calibrated = () => {
  return (
      <Box width={'550px'}  h={'380px'} boxShadow={"0px 4px 8px rgba(0, 79, 149, 0.25)"}
          borderRadius={" 30px"}>
          <Heading color={"#004F95"} fontSize={'32px'} fontFamily={'Poppins'} marginTop={'40px'}>Calibrated</Heading>
          <Box textAlign={'start'} marginLeft={'50px'} maringTop={"9px"}>
              <Box marginBottom={'29px'}>
                   <div className="skill-box1" style={{ bgColor:"white",maringBottom:"19px"}}>
                <span className="title1">Calibrated</span>
                <div className="skill-bar1" style={{ height:"28px", }} >
                    <span className="skill-per clear" style={{background: "#3DA5D9"}}>
                        <span className="tooltip" style={{ right:"-40px", top:"-2px",fontSize:"24px" }}>33</span>
                    </span>
                </div>
               </div>
              </Box>
              <Box marginBottom={'29px'}>
            <div className="skill-box1" style={{maringTop:"19px"}}>
                <span className="title1">Not Calibrated</span>
                <div className="skill-bar1" style={{ height:"28px" }}>
                    <span className="skill-per noclear" style={{background: "#EA7317"}}>
                        <span className="tooltip" style={{ right:"-60px",fontSize:"24px", top:"-1px" }}>16</span>
                    </span>
                </div>
              </div>
              </Box>
              <Box marginBottom={'30px'}>
               <div className="skill-box1" style={{maringTop:"19px"}}>
                <span className="title1">Not Required</span>
                <div className="skill-bar1" style={{ height:"28px" }}>
                    <span className="skill-per norequired" style={{background: "#FEC601"}}>
                        <span className="tooltip" style={{ right:"-60px",fontSize:"24px", top:"-1px" }}>16</span>
                    </span>
              </div>
                  </div>
                  </Box>
             </Box>
   </Box>
  )
}

export default Calibrated