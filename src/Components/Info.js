import { SimpleGrid, Box, Image, Heading, Text } from "@chakra-ui/react";
import Btn from "./Btn";

const Info = () => {
  const img = require("./publi.png");
  return (
    <SimpleGrid
      id="info"
      columns={{ base: 1, xl: 2 }}
      maxW={"70%"}
      gap={50}
      pt={{ base: "8rem", lg: "5rem" }}
      textAlign={{ base: "justify", xl: "left" }}
    >
      <Box>
        <Heading
          as="h1"
          fontFamily={'"Hanken Grotesk", sans-serif'}
          textTransform={"uppercase"}
          color={"white"}
          size={"2xl"}
          textAlign="left"
        >
          INFO DEL ESDEVENIMENT
        </Heading>
        <Heading
          fontWeight={600}
          as="h1"
          fontFamily={'"Hanken Grotesk", sans-serif'}
          textTransform={"uppercase"}
          color={"white"}
          size={"xl"}
          textAlign="left"
        >
          NO ET PERDIS LA PRIMERA COMPETÈNCIA DE DRONS
        </Heading>
        <Text
          fontFamily={'"Hanken Grotesk", sans-serif'}
          color={"white"}
          fontSize={"25px"}
          fontWeight={400}
        >
          El dijous 30 de maig 11:30 hs. Al Pavelló Joviat C/Folch i Torres 5-13
          Manresa 08240
        </Text>
        <Text
          fontFamily={'"Hanken Grotesk", sans-serif'}
          color={"white"}
          fontSize={"25px"}
          fontWeight={400}
        >
          Un competidor només pot ser part d'un equip, no més d'un
        </Text>
        <Text
          fontFamily={'"Hanken Grotesk", sans-serif'}
          color={"white"}
          fontSize={"25px"}
          fontWeight={"bold"}
          textTransform={"uppercase"}
        >
          TEMPS LIMIT D'INSCRIPCIÓ: 29 DE MAIG A LES 13:00 HS
        </Text>
        <Box
          display={{ base: "none", xl: "flex" }}
          justifyContent={"flex-start"}
          alignItems={"flex-end"}
          mt={50}
        >
          <Btn />
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"flex-end"}>
        <Image src={img} alt="logo competencia drones" />
      </Box>
    </SimpleGrid>
  );
};

export default Info;
