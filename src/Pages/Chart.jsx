import { Bar } from "react-chartjs-2";
import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip,
} from "chart.js";
import { Text, Button, Box, Flex, Heading } from "@chakra-ui/react";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const option = {
	indexAxis: "x",
	elements: {
		bar: {
			borderWidth: 1,
		},
	},
	responsive: true,
	
	plugins: {
		legend: { position: "top" },
		title: {
			display: true,
		},
		datalabels: {
			formatter: value => value + " %",
			align: "end",
			anchor: "end",
			clip: true,
		  },
	},
};

const data = {
	labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
	datasets: [
		{
			label: "Vote",
			data: [5, 10, 15, 20, 25],
			backgroundColor: "#FEC601",
		},
	],
};

export default function Chart() {
	return (
		<Box width={'70%'}>
		<Heading marginTop={'24px'} color={"#004F95"} textAlign={'start'} marginLeft={'80px'} fontFamily={'Poppins'} >Total Incidents Recorded</Heading>
				<Box display="flex" justifyContent={'space-between'} mt={"2%"} width={"100%"} >
					<Box
						display="flex"
						alignItems="center"
						width={"300px"}
					color={"#004F95"}
					marginLeft={'80px'}
					>
						<Button border={"1px solid #7A7A7A"} bgColor={"white"} borderRadius={'0px'} borderStartStartRadius={'5px'} borderEndStartRadius={'5px'}  _hover={{ backgroundColor:"#004F95",
							color:"white" }} fontFamily={'Poppins'}>Days</Button>
						<Button
						border={"1px solid #7A7A7A"} bgColor={"white"}
						_hover={{ backgroundColor:"#004F95",
							color:"white" }}
						borderRadius={'0px'}	
						fontFamily={'Poppins'}
					>
							Week
						</Button>
						<Button bgColor={"white"} borderRadius={'0px'} border={"1px solid #7A7A7A"} fontFamily={'Poppins'} _hover={{ backgroundColor:"#004F95",
							color:"white" }}>Month</Button>
						<Button bgColor={"white"} fontFamily={'Poppins'} borderRadius={'0px'} borderStartEndRadius={'5px'} borderEndEndRadius={'5px'} border={"1px solid #7A7A7A"} _hover={{ backgroundColor:"#004F95",
							color:"white" }}>Custom</Button>
					</Box>
					<Box display="flex" marginLeft={'-110px'}>
						<Button fontFamily={'Poppins'} border={"1px solid #7A7A7A"} borderRadius={'0px'} borderStartStartRadius={'5px'} borderEndStartRadius={'5px'}color={"#004F95"} _hover={{ backgroundColor:"#004F95",
							color:"white" }}>Recorded</Button>
						<Button fontFamily={'Poppins'} bg={'white'} color={'#004F95'} borderRadius={'0px'} borderStartEndRadius={'5px'} borderEndEndRadius={'5px'} border={"1px solid #7A7A7A"} _hover={{ backgroundColor:"#004F95",
							color:"white" }}>Cleared</Button>
					</Box>
				</Box>
				<Box marginLeft={'229px'}>
					<div style={{ width: 600, textAlign: "center" }}  border={"1px solid red"}>
					<Bar options={option} data={data} height={"300px"}  />
					</div>
				</Box>
        <Flex ml={'20%'} gap="2%" justifyContent={'center'}>
          <Text display={'flex'} fontFamily={'Poppins'} color="#004F95"> X-Axis : <Text color={'black'} marginLeft={'5px'} > Weeks </Text></Text>
          <Text  display={'flex'} fontFamily={'Poppins'} color="#004F95"> Y-Axis : <Text color={'black'} marginLeft={'5px'}> Incidents </Text></Text>
        </Flex>
			</Box>
		
	);
}