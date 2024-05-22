import {
  Heading,
  Box,
  VStack,
  Image,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  TableCaption,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  getDocs,
} from "firebase/firestore";
import app from "../firebaseConfig";
import logo from "./Joviat_Dron.png";
import { Link } from "wouter";
import Nav from "./Nav/Nav";



const Results = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const db = getFirestore(app);
      const teamsCollection = collection(db, "equipos");
      const teamsQuery = query(teamsCollection, orderBy("Tiempo Fin"));
      const querySnapshot = await getDocs(teamsQuery);
      const teamsData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        const inicio = new Date(data["Tiempo Inicio"]);
        const fin = new Date(data["Tiempo Fin"]);
        const tiempoTotal = (fin - inicio) / 1000;
        return {
          nombre: data.Equipo.nombre,
          inicio: inicio.toLocaleTimeString(),
          fin: fin.toLocaleTimeString(),
          tiempoTotal,
          puntos: data.Diferencial,
        };
      });
      setTeams(teamsData);
    };

    fetchTeams();
  }, []);

  return (
    <Box>
      <Nav showList={false} />
      <Box padding={5} bg={"#313337"} py={"10rem"}>
        <VStack spacing={8}>
          <Heading
            as="h1"
            fontFamily={'"Hanken Grotesk", sans-serif'}
            textTransform={"uppercase"}
            color={"white"}
            size={"2xl"}
            textAlign="center"
          >
            Resultats del Esdeveniment
          </Heading>
          <TableContainer borderRadius={15} bg="#95959e" width={"80%"}>
            <Table
              variant="striped"
              fontFamily={'"Hanken Grotesk", sans-serif'}
            >
              <Thead>
                <Tr>
                  <Th>Equipo</Th>
                  <Th>Inicio</Th>
                  <Th>Fin</Th>
                  <Th isNumeric>Tiempo (s)</Th>
                  <Th isNumeric>Puntos</Th>
                </Tr>
              </Thead>
              <Tbody>
                {teams.map((team) => (
                  <Tr key={team.nombre}>
                    <Td>{team.nombre}</Td>
                    <Td>{team.inicio}</Td>
                    <Td>{team.fin}</Td>
                    <Td isNumeric>{team.tiempoTotal}</Td>
                    <Td isNumeric>{team.puntos}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <Button as={Link} to="/round1" colorScheme="red">
            Top 3 Ranking Primera Ronda
          </Button>
          <Button as={Link} to="/round2" colorScheme="red">
            Top 3 Ranking Segunda Ronda
          </Button>
          <Button as={Link} to="/final-round" colorScheme="red">
            Guanyadors
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Results;
