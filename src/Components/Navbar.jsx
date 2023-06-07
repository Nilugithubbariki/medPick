import React from "react";
import {
  Flex,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Box,
  Image,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import add from "../Logos/Group 7.svg";
const Navbar = () => {
  return (
    <Flex
      height={"56px"}
      width={"100%"}
      display="flex"
      alignItems="center"
      marginTop={"48px"}
      justifyContent="space-between"
      padding={"2%"}
      gap={"2px"}
      boxShadow={"0px 2px 8px -2px rgba(0, 79, 149, 0.25)"}
    >
      <InputGroup width={"520px"} marginLeft={"10px"}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color={"#004F95"} />
        </InputLeftElement>
        <Input
          type="tel"
          borderRadius={"50px"}
          border={"1px solid black"}
          width={"520px"}
          height={"36px"}
          boxSizing={"border-box"}
          mr={"64px"}
        />
      </InputGroup>
      <Box
        _hover={{ bg: "Orange", color: "white" }}
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
        padding={"5px"}
        flexDirection={"row"}
        boxShadow={"2px 4px 8px -2px rgba(0, 79, 149, 0.2)"}
        borderRadius={"10px"}
        marginBottom={"5px"}
        bg={"#004F95"}
        h={"52px"}
        color={"white"}
        w={"181px"}
        mr={"2%"}
      >
        <Image src={add} alt="add" paddingLeft={"5px"} height={"40px"} />
        <Text fontFamily={"Poppins"} width={"100px"} fontSize={"18px"}>
          {" "}
          Add New
        </Text>
      </Box>
      <Button
        _hover={{ bg: "Orange", color: "white" }}
        fontFamily={"Poppins"}
        bg={"#004F95"}
        mr={"2%"}
        w={"149px"}
        color={"white"}
      >
        Sign In
      </Button>
      <Button
        _hover={{ bg: "Orange", color: "white" }}
        fontFamily={"Poppins"}
        bg={"orange"}
        color={"white"}
        w={"149px"}
      >
        Sign Up
      </Button>
    </Flex>
  );
};

export default Navbar;
