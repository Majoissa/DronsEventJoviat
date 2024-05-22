import { Heading } from "@chakra-ui/react";

const FormHeader = () => {
  return (
    <Heading
      as="h1"
      fontFamily={'"Hanken Grotesk", sans-serif'}
      textTransform={"uppercase"}
      color={"white"}
      size={"2xl"}
      textAlign="center"
      mb={4}
    >
      Inscripcions
    </Heading>
  );
};

export default FormHeader;
