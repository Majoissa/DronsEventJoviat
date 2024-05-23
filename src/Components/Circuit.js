import { SimpleGrid, Box, Image, Heading, Text } from "@chakra-ui/react";

const Circuit = () => {
  const img = require("./circuito.png");
  return (
    <SimpleGrid
      columns={{ base: 1, xl: 2 }}
      maxW={"70%"}
      gap={50}
      pt={{ base: "8rem", lg: "5rem" }}
      textAlign={{ base: "justify" }}
      id="circuit"
    >
      <Image src={img} alt="logo competencia drones" />
      <Box>
        <Heading
          as="h1"
          fontFamily={'"Hanken Grotesk", sans-serif'}
          textTransform={"uppercase"}
          color={"white"}
          size={"2xl"}
        >
          EL CIRCUIT
        </Heading>
        <Heading
          fontWeight={600}
          as="h1"
          fontFamily={'"Hanken Grotesk", sans-serif'}
          textTransform={"uppercase"}
          color={"white"}
          size={"xl"}
        >
          ON INICIA I ON ACABA?
        </Heading>
        <Text
          fontFamily={'"Hanken Grotesk", sans-serif'}
          color={"white"}
          fontSize={"22px"}
          fontWeight={400}
        >
          L'inici és a terra on està marcada la X (on estarà col·locat el dron)
          i finalitza en una taula on hi ha la H delimitada (simulant una pista
          d'aterratge).
        </Text>
        <Text
          fontFamily={'"Hanken Grotesk", sans-serif'}
          color={"white"}
          fontSize={"25px"}
          fontWeight={"bold"}
        >
          Sistema de competició:
        </Text>
        <Text
          fontFamily={'"Hanken Grotesk", sans-serif'}
          color={"white"}
          fontSize={"22px"}
          fontWeight={400}
        >
          Es realitzen 2 rondes en les quals cada equip podrà sumar punts (que
          s'aniran acumulant) i un cop tinguem els resultats, els 3 millors
          posicionats al rànquing accedeixen a la final on serà el mateix
          circuit però amb la dificultat de la disminució de temps de les rondes
          d'eliminació. L'equip en estar conformat per dos integrants, a la
          primera i segona ronda no és obligatori que s'intercanviïn els llocs
          (pilot i assistent), això quedés a decisió dels mateixos integrants.
        </Text>
      </Box>
    </SimpleGrid>
  );
};

export default Circuit;
