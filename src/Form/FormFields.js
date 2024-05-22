import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "../firebaseConfig";

const FormFields = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    const formDataJson = generateFormDataJson();

    // Save form data to Firestore
    const db = getFirestore(app);
    try {
      await addDoc(collection(db, "provaEquips"), formDataJson);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const generateFormDataJson = () => {
    return {
      nomEquip: document.getElementById("nomEquip").value,
      participant1: document.getElementById("participant1").value,
      participant2: document.getElementById("participant2").value,
      email: document.getElementById("email").value,
      dretsImatge: document.getElementById("dretsImatge").checked,
    };
  };

  return (
    <VStack spacing={4} width={{ base: "90%", md: "60%" }}>
      <FormControl>
        <FormLabel fontFamily={'"Hanken Grotesk", sans-serif'} color={"white"}>
          Team Name
        </FormLabel>
        <Input
          bg={"white"}
          type="text"
          id="nomEquip"
          placeholder="Enter your team name"
        />
      </FormControl>
      <FormControl>
        <FormLabel fontFamily={'"Hanken Grotesk", sans-serif'} color={"white"}>
          Participant 1 Name
        </FormLabel>
        <Input
          bg={"white"}
          type="text"
          id="participant1"
          placeholder="Enter the name of participant 1"
        />
      </FormControl>
      <FormControl>
        <FormLabel fontFamily={'"Hanken Grotesk", sans-serif'} color={"white"}>
          Participant 2 Name
        </FormLabel>
        <Input
          bg={"white"}
          type="text"
          id="participant2"
          placeholder="Enter the name of participant 2"
        />
      </FormControl>
      <FormControl>
        <FormLabel fontFamily={'"Hanken Grotesk", sans-serif'} color={"white"}>
          Email
        </FormLabel>
        <Input
          bg={"white"}
          type="email"
          id="email"
          placeholder="Enter your email"
        />
      </FormControl>
      <FormControl id="dretsImatge">
        <Checkbox fontFamily={'"Hanken Grotesk", sans-serif'} color={"white"}>
          I accept the image rights terms and conditions
        </Checkbox>
      </FormControl>
      <Button colorScheme="blue" onClick={handleSubmit} isLoading={loading}>
        Submit
      </Button>
    </VStack>
  );
};

export default FormFields;
