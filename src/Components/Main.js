import { SimpleGrid, Box, Image, Heading, Text } from "@chakra-ui/react";
import Btn from "./Btn";

const Main = () => {
  const img = require("./Joviat_Dron.png");
  return (
    <SimpleGrid
      columns={{ base: 1, xl: 2 }}
      maxW={"70%"}
      gap={50}
      pt={{ base: "8rem", lg: "5rem" }}
      textAlign={{ base: "justify", xl: "left" }}
    >
      <Image src={img} alt="logo competencia drones" />
      <Box>
        <Heading
          as="h1"
          fontFamily={'"Hanken Grotesk", sans-serif'}
          textTransform={"uppercase"}
          color={"white"}
          size={"2xl"}
          textAlign="left"
        >
          JOVIAT DRON RACING
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
          EL ESDEVENIMENT DE DRONS DE L'ESCOLA JOVIAT
        </Heading>
        <Text
          fontFamily={'"Hanken Grotesk", sans-serif'}
          color={"white"}
          fontSize={"25px"}
          fontWeight={400}
        >
          Descobreix aquí com inscriure't, els horaris, el lloc de
          l'esdeveniment, les normatives i moltes coses més
        </Text>
        <Box
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"flex-end"}
          mt={50}
        >
          <Btn />
        </Box>
      </Box>
    </SimpleGrid>
  );
};

export default Main;
