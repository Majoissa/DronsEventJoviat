import {
  Box,
  List,
  ListItem,
  UnorderedList,
  Button,
  IconButton,
  Collapse,
  useDisclosure,
  useColorMode,
  VStack,
  Image,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "wouter";

const Nav = ({ showList }) => {
  const logo = require("./logo.webp");
  const imgSm = require("./logo.png");
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Box
        as="nav"
        className="navBar"
        bg="#111820"
        padding={"1rem"}
        pt={5}
        position={"fixed"}
        width={"100%"}
        height={"70px"}
        top={0}
        zIndex={11}
        display={{ base: "flex", lg: "none" }}
      >
        <Stack
          direction={"row"}
          spacing={4}
          align={"flex-start"}
          justify={"flex-start"}
        >
          <Link to="/">
            <Image src={imgSm} alt="Joviat logo" width={50} mt={"-0.6rem"} />
          </Link>
          {showList && (
            <>
              <Button
                onClick={onToggle}
                colorScheme="gray"
                _hover={{ opacity: 0.8 }}
                variant="ghost"
                position="absolute"
                right={3}
                top={0}
                zIndex={1}
                mt={3}
              >
                <HamburgerIcon boxSize={30} color="white" />
              </Button>
              <Collapse in={isOpen} animateOpacity textAlign={"center"}>
                <Box
                  bg="#111820"
                  position="absolute"
                  top="100%"
                  right={0}
                  zIndex={0}
                  width="100%"
                  display="flex"
                  justifyContent="center"
                >
                  <List
                    textAlign="center"
                    fontFamily='"Hanken Grotesk", sans-serif'
                    fontWeight={500}
                    textTransform={"uppercase"}
                  >
                    <UnorderedList
                      listStyleType={"none"}
                      color="white"
                      fontSize="16px"
                      textTransform="uppercase"
                    >
                      <ListItem p={4}>
                        <a href="#info">Info</a>
                      </ListItem>
                      <ListItem p={4}>
                        <a href="#circuit">Circuit</a>
                      </ListItem>
                      <ListItem p={4}>
                        <a href="#normas">Normes</a>
                      </ListItem>
                      <ListItem p={4}>
                        <Link to="/registration">Inscriu-te</Link>
                      </ListItem>
                    </UnorderedList>
                  </List>
                </Box>
              </Collapse>
            </>
          )}
        </Stack>
      </Box>
      <Box
        as="nav"
        className="navBar"
        bg="#111820"
        padding={"1rem"}
        pt={5}
        width={"100%"}
        height={"70px"}
        top={0}
        zIndex={11}
        display={{ base: "none", lg: "flex" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        position={"fixed"}
      >
        <Link to="/">
          <Image
            src={logo}
            alt="Joviat logo"
            width={150}
            ml={{ lg: "8rem", xl: "12rem" }}
          />
        </Link>
        {showList && (
          <>
            <List
              mr={{ lg: "8rem", xl: "12rem" }}
              display={"flex"}
              flexDirection={"row"}
              gap={10}
              textAlign="center"
              fontFamily='"Hanken Grotesk", sans-serif'
              fontWeight={500}
              textTransform={"uppercase"}
              color="white"
              fontSize="16px"
            >
              <ListItem>
                <a href="#info">Info</a>
              </ListItem>
              <ListItem>
                <a href="#circuit">Circuit</a>
              </ListItem>
              <ListItem>
                <a href="#normas">Normes</a>
              </ListItem>
              <ListItem>
                <Link to="/registration">Inscriu-te</Link>
              </ListItem>
            </List>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Nav;
