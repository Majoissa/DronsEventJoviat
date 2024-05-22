import {
  Heading,
  Box,
  VStack,
  Image,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  TableCaption,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  getDocs,
} from "firebase/firestore";
import app from "../firebaseConfig";
import logo from "./Joviat_Dron.png";
import { Link } from "wouter";
import Nav from "./Nav/Nav";
import Main from "./Main";
import Info from "./Info";
import MoreInfo from "./MoreInfo";
import Circuit from "./Circuit";
import Normas from "./Normas";

const HomePage = () => {
  return (
    <Box bg={"#313337"}>
      <Nav showList={true} />
      <VStack pt={"5rem"}>
        <Main />
        <Info />
        <MoreInfo />
        <Circuit />
        <Normas />
      </VStack>
    </Box>
  );
};

export default HomePage;
