import React, { useEffect, useState } from "react";
import { Box, VStack, Heading, Text, Button, Image } from "@chakra-ui/react";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import app from "../firebaseConfig";
import logo from "./Joviat_Dron.png";
import Nav from "./Nav/Nav";
const RoundPage = ({ round }) => {
  const [teams, setTeams] = useState([]);
  const db = getFirestore(app);

  useEffect(() => {
    const fetchTopTeams = async () => {
      const teamsCollection = collection(db, "equipos");
      const roundQuery = query(
        teamsCollection,
        orderBy("Tiempo Fin"),
        limit(3)
      );
      const snapshot = await getDocs(roundQuery);
      const teamsData = snapshot.docs.map((doc) => ({
        nombre: doc.data().Equipo.nombre,
        tiempoTotal:
          (new Date(doc.data()["Tiempo Fin"]) -
            new Date(doc.data()["Tiempo Inicio"])) /
          1000,
        ...doc.data(),
      }));
      setTeams(teamsData);
    };

    fetchTopTeams();
  }, [round]);

  return (
    <Box bg={"#313337"} py={"10rem"}>
      <Nav showList={false} />
      <Box padding={5}>
        <VStack spacing={8}>
          <Heading
            textTransform={"uppercase"}
            fontFamily={'"Hanken Grotesk", sans-serif'}
            color={"white"}
          >{`Guanyadors Ronda ${round}`}</Heading>
          {teams.map((team) => (
            <Box
              key={team.nombre}
              p={5}
              boxShadow="md"
              borderWidth="1px"
              bg="white"
              borderRadius="lg"
            >
              <Text fontSize="xl">{team.nombre}</Text>
              <Text>Tiempo Total: {team.tiempoTotal.toFixed(2)} segundos</Text>
              {/* Agrega más datos si lo necesitas */}
            </Box>
          ))}
          <Button onClick={() => window.history.back()} colorScheme="red">
            Volver
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default RoundPage;
