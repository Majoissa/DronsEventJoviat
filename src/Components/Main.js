import {
  SimpleGrid,
  Box,
  Image,
  Heading,
  Text,
  VStack,
  AspectRatio,
} from "@chakra-ui/react";
import YouTube from "react-youtube";
import Btn from "./Btn";

const Main = () => {
  const img = require("./Joviat_Dron.png");
  const videoId = "RleSt7igJ3U";

  return (
    <VStack>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        maxW={{ base: "80%", sm: "70%" }}
        gap={50}
        pt={{ base: "5rem", sm: "7rem", lg: "5rem" }}
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
            L'ESDEVENIMENT DE DRONS DE L'ESCOLA JOVIAT
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
      <Box
        mt={50}
        width={{ base: "100%", md: "80%", lg: "60%" }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <AspectRatio width="100%" ratio={16 / 9}>
          <YouTube videoId={videoId} />
        </AspectRatio>
      </Box>
    </VStack>
  );
};

export default Main;
