
import React from "react";
import { Box,Flex } from "@chakra-ui/react";
import Chart from "../Pages/Chart";
import Sidebar from "../Pages/SideBar";
import Navbar from "./Navbar";
import Graphs from "./Graphs";
import Graph from "./Graph";
import Last from "./Last";

const Vajra = () => {
	return (
		<Box>
			<Flex>
				<Box width={'10%'}><Sidebar /></Box>
				<Box width={'90%'}>
					<Navbar />
					<Chart />
					<Graphs />
					<Graph />
					<Last/>
				</Box>
			</Flex>

		</Box>
	);
};

export default Vajra;