import {
  SimpleGrid,
  VStack,
  Box,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import Btn from "./Btn";

const MoreInfo = () => {
  const img = require("./Nav/logo.png");
  return (
    <VStack>
      <SimpleGrid
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
            +INFO
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
            Destinat a alumnes de l'escola Joviat- Grau Superior, mitjà,
            batxillerat
          </Heading>
          <Text
            fontFamily={'"Hanken Grotesk", sans-serif'}
            color={"white"}
            fontSize={"25px"}
            fontWeight={400}
          >
            Requisits per inscriure's: Un dron (opcional), i ser integrant de
            lEscola Joviat.
          </Text>
        </Box>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Image
            width={{ base: "100%", xl: "70%" }}
            src={img}
            alt="logo competencia drones"
          />
        </Box>
      </SimpleGrid>
      <Text
        fontFamily={'"Hanken Grotesk", sans-serif'}
        color={"white"}
        fontSize={"25px"}
        width={"70%"}
        textAlign={"justify"}
        fontWeight={"bold"}
      >
        Categories:{" "}
      </Text>
      <Text
        fontFamily={'"Hanken Grotesk", sans-serif'}
        color={"white"}
        fontSize={"22px"}
        width={"70%"}
        textAlign={"justify"}
      >
        Totes les edats competiran juntes, en cas que el participant s'inscrigui
        i porti el dron que compti amb la característica de poder esquivar
        obstacles sol (el qual s'ha d'indicar al formulari si assisteix amb dron
        i si compta amb aquesta característica o una altra especial que pugui
        posar en avantatge el participant sobre la resta dels concursants) es
        faran dues categories: Amb detecció d'obstacles. Sense detecció
        d'obstacles.
      </Text>
      <Text
        fontFamily={'"Hanken Grotesk", sans-serif'}
        color={"white"}
        fontSize={"25px"}
        width={"70%"}
        textAlign={"justify"}
        fontWeight={"bold"}
      >
        Modalitat únicament per equips:
      </Text>
      <Text
        fontFamily={'"Hanken Grotesk", sans-serif'}
        color={"white"}
        fontSize={"22px"}
        width={"70%"}
        textAlign={"justify"}
      >
        Es comptarà per equip amb el màxim de 2 participants que consta amb 1
        pilot i un assistent (amb possibilitat de revertir els llocs a la
        primera i segona ronda o de poder repetir la fórmula, queda a criteri
        dels integrants del mateix).
      </Text>
    </VStack>
  );
};

export default MoreInfo;
