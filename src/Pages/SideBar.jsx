import React from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import {
  FiHome,
  FiMenu,
} from 'react-icons/fi';
import { HiOutlineUserGroup } from 'react-icons/hi'
import { BsPerson } from 'react-icons/bs' 
import {ImTree} from 'react-icons/im'
import Logo from "../Logos/logo1.svg"
import { CgMenuBoxed } from 'react-icons/cg'
import { CiHeadphones } from 'react-icons/ci'
import { VscSignOut } from 'react-icons/vsc'
const LinkItems = [
  { name: 'Home', icon: FiHome },
  { name:'Profile', icon:BsPerson },
  { name: 'Group', icon: HiOutlineUserGroup },
  { name: 'department', icon: ImTree },
  { name: 'Menu', icon: CgMenuBoxed },
  
  {name:"headPhone", icon:CiHeadphones},
  { name: 'SignOut', icon: VscSignOut },
];

export default function SideBar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh"
      width="120px"
      bg={'#F0F8FF'}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}


const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={"#F0F8FF"}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
       
          <Image h={'50px'} src={Logo} alt="logo"/>
        
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
       {LinkItems.map((link) => (
        <NavItem color="#F78117" key={link.name} icon={link.icon}>
          {/* {link.name} */}
         </NavItem>
      ))} 
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="2"
        mx="7"
        width={'90px'}
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#004F95',
          color: 'white',

        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            mt={'20px'}
            ml={'20px'}
            fontSize="36"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};



const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={'#F0F8FF'}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

       <Image src={Logo} alt="logo"/>
    </Flex>
  );
};