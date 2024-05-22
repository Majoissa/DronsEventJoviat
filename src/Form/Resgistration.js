import { Box, VStack, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import FormHeader from "./FormHeader";
import FormFields from "./FormFields";
import FormSubmitButton from "./FormSubmitButton";
import Nav from "../Components/Nav/Nav";

const ResgistrationPage = () => {
  return (
    <Box bg={"#313337"}>
      <Nav />
      <VStack py={150} spacing={6}>
        <FormHeader />
        <FormFields />
      </VStack>
    </Box>
  );
};

export default ResgistrationPage;
