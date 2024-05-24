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

    document.getElementById("nomEquip").value = "";
    document.getElementById("participant1").value = "";
    document.getElementById("participant2").value = "";
    document.getElementById("email").value = "";
    document.getElementById("dretsImatge").checked = true;
  };

  const generateFormDataJson = () => {
    return {
      nomEquip: document.getElementById("nomEquip").value,
      participant1: document.getElementById("participant1").value,
      participant2: document.getElementById("participant2").value,
      email: document.getElementById("email").value,
      dretsImatge: document.getElementById("dretsImatge").checked,
      inici: "",
      fi: "",
      tempsTotal: "",
      puntsRonda1: "",
      puntsRonda2: "",
      puntsTotal: "",
      ranking: "",
    };
  };

  return (
    <VStack spacing={4} width={{ base: "90%", md: "60%" }}>
      <FormControl>
        <FormLabel fontFamily={'"Hanken Grotesk", sans-serif'} color={"white"}>
          Nom del equip
        </FormLabel>
        <Input
          bg={"white"}
          type="text"
          id="nomEquip"
          placeholder="Entra el nom del seu equip"
        />
      </FormControl>
      <FormControl>
        <FormLabel fontFamily={'"Hanken Grotesk", sans-serif'} color={"white"}>
          Nom participant 1
        </FormLabel>
        <Input
          bg={"white"}
          type="text"
          id="participant1"
          placeholder="Entra el nom del participant 1"
        />
      </FormControl>
      <FormControl>
        <FormLabel fontFamily={'"Hanken Grotesk", sans-serif'} color={"white"}>
          Nom participant 2
        </FormLabel>
        <Input
          bg={"white"}
          type="text"
          id="participant2"
          placeholder="Entra el nom del participant 2"
        />
      </FormControl>
      <FormControl>
        <FormLabel fontFamily={'"Hanken Grotesk", sans-serif'} color={"white"}>
          Correu
        </FormLabel>
        <Input
          bg={"white"}
          type="email"
          id="email"
          placeholder="Entra el seu correu"
        />
      </FormControl>
      <FormControl id="dretsImatge">
        <Checkbox fontFamily={'"Hanken Grotesk", sans-serif'} color={"white"}>
          Accepto els termes i condicions dels drets d'imatge
        </Checkbox>
      </FormControl>
      <Button colorScheme="blue" onClick={handleSubmit} isLoading={loading}>
        Enviar
      </Button>
    </VStack>
  );
};

export default FormFields;
