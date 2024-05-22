import { Box } from "@chakra-ui/react";
import Btn from "../Components/Btn";

const FormSubmitButton = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      mt={8}
    >
      <Btn />
    </Box>
  );
};

export default FormSubmitButton;
