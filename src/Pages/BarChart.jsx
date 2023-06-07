import { Box, Flex, Heading ,Text} from '@chakra-ui/react';
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const BarChart = () => {
    const data = [
    { name: '1', h:0 },
    { name: '2', h:2 },
    { name: '3', h:6 },
    { name: '4', h:4},
        { name: '5', h:8 },
     { name: '6', h:6},
        { name: '7',  h:4},
     { name: '8', h:6 },
        { name: '9', h: 8 },
    
  ];


    return (
        <Box w={'670px'} textAlign={'start'} boxShadow={" 0px 4px 8px rgba(0, 79, 149, 0.25)"}
borderRadius= {"30px"} h={"550px"}>
            <Heading font-family={'Poppins'}
            fontStyle={"normal"}
            fontWeight={"500"}
            fontSize={"36px"}
            lineHeight={"54px"}
            textTransform= {'capitalize'}
                marginTop={'30px'}
                marginLeft={'80px'}
                color={'#004F95'}
                marginBottom={'30px'}
                        >Total Downtime</Heading>
            <LineChart width={553} height={299} data={data}  >
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="h" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
            
            <Flex justifyContent={'space-evenly'} marginTop={'30px'}>
                <Flex justifyContent={"space-evenly"} width={'50%'}>
                    <Box><Flex><Text fontSize={'24px'} color={"#004F95"} textTransform={"capitalize"}>X - Axis : </Text> <Text fontSize={'17px'} textTransform={"capitalize"} color='black' marginLeft={'5px'} marginTop={'8px'}>Weeks</Text></Flex></Box>
                    <Box><Flex><Text fontSize={'24px'} color={"#004F95"}>Y - Axis : </Text> <Text color='black'marginLeft={'5px'} fontSize={'17px'} marginTop={'8px'}> Incidents</Text></Flex></Box>
                </Flex>

                <Box>
                    <Text fontStyle={"normal"}
                    fontWeight={"400"}
                    fontSize={"16px"}
                    lineHeight={"19px"}
                    textTransform={"capitalize"}
                    color={"#004F95"}
                    >Total Downtime</Text>
                      <Text fontStyle={"normal"}
                            fontWeight={"700"}
                            fontSize={"24px"}
                            lineHeight={"29px"}
                            textTransform={"capitalize"}
                            color={"#004F95"}
                    >12Days 3h 20m </Text>
                </Box>
            </Flex>
      </Box>
  )
}

export default BarChart