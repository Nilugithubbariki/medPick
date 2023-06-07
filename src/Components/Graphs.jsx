import React from 'react'
import DonutChart from '../Pages/DonutChart';
import { Box, Flex,Image,Text } from '@chakra-ui/react';
import Inser from '../Logos/inservice icon.svg'
import CircleArrowGraph from '../Pages/CircleArrowGraph';
import '../App.css'
const Graphs = () => {
  return (
      <Flex height={'350px'} marginTop={'80px'} gap={'20px'} zIndex={'-1'}>
          <Box bgColor="#F8FBFF"
               boxShadow={'0px 4px 8px -2px rgba(0, 79, 149, 0.25)'}
              borderRadius={"30px"} height={"300px"} width={"290px"}>
              <Box width={'100%'} marginTop={'10px'}><Text fontSize={'32px'} fontFamily={'Poppins'} color={'#004F95'}>Expenses</Text></Box>
              <DonutChart/>
          </Box>
          
             <Box bgColor="#F8FBFF"
               boxShadow={'0px 4px 8px -2px rgba(0, 79, 149, 0.25)'}
              borderRadius={"30px"} height={"300px"} width={"300px"}>
              <Box width={'100%'} marginTop={'10px'}><Text fontSize={'32px'} fontFamily={'Poppins'} color={'#004F95'}>In service</Text></Box>
              <Box justifyContent={'center'} alignItems={'center'} marginLeft={'80px'} marginTop={'15px'} width={'128px'} >
                  <Image src={ Inser } alt='icon' width={"128px"} height={"129px"} />
              </Box>
              <Flex justifyContent={'space-evenly'} marginTop={'25px'}>
                  <Box fontFamily={'Poppins'} color={'#004F95'}>
                      Total services
                      <br />
                    38
                  </Box>
                  <Box fontFamily={'Poppins'} color={'#004F95'}>
                      Open services
                      <br />
                    18
                  </Box>
              </Flex>
          </Box>
          
             <Box bgColor="#F8FBFF"
               boxShadow={'0px 4px 8px -2px rgba(0, 79, 149, 0.25)'}
              borderRadius={"30px"} height={"300px"} width={"300px"}>
              <Box width={'100%'} marginTop={'10px'}><Text fontSize={'32px'} fontFamily={'Poppins'} color={'#004F95'}>Total Assets</Text></Box>
              <CircleArrowGraph />
              <Box marginLeft={'70px'} fontFamily={'Poppins'} color={'#004F95'} fontSize={'54px'} fontWeight={'700'} marginTop={'-48px'} position={'absolute'}>
                    46
                  </Box>
          </Box>
          
             <Box bgColor="#F8FBFF"
               boxShadow={'0px 4px 8px -2px rgba(0, 79, 149, 0.25)'}
              borderRadius={"30px"} height={"300px"} width={"300px"}>
              <Box width={'100%'} marginTop={'10px'}><Text fontSize={'28px'} fontWeight={'500'} fontFamily={'Poppins'} color={'#004F95'}>Incident
Management</Text></Box>
        <Box textAlign={'start'} marginLeft={'10px'} maringTop={"9px"}>
           <div className="skill-box1" style={{ bgColor:"white"}}>
                <span className="title1">Cleared</span>
                <div className="skill-bar1" style={{ height:"58px", }}>
                    <span className="skill-per clear" style={{background: "#29A343"}}>
                        <span className="tooltip" style={{ right:"-40px", top:"10px",fontSize:"24px" }}>36</span>
                    </span>
                </div>
            </div>
            <div className="skill-box1">
                <span className="title1">Not Cleared</span>
                <div className="skill-bar1" style={{ height:"58px" }}>
                    <span className="skill-per noclear" style={{background: "#E12C33"}}>
                        <span className="tooltip" style={{ right:"-60px",fontSize:"24px", top:"10px" }}>16</span>
                    </span>
                </div>
                  </div>
             </Box>
          </Box>
          
      </Flex>
  )
}

export default Graphs