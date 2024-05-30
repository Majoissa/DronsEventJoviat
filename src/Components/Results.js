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
  onSnapshot,
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
      const teamsCollection = collection(db, "provaEquips");
      const teamsQuery = query(teamsCollection, orderBy("ranking"));

      onSnapshot(teamsQuery, (querySnapshot) => {
        const teamsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          const inicio = data["inici"] ? new Date(data["inici"]) : null;
          const fin = data["fi"] ? new Date(data["fi"]) : null;
          const tiempoTotal = inicio && fin ? (fin - inicio) / 1000 : '-';
          
          return {
            nombre: data.nomEquip || '-',
            inicio: inicio ? inicio.toLocaleTimeString() : '-',
            fin: fin ? fin.toLocaleTimeString() : '-',
            tiempoTotal: !isNaN(tiempoTotal) && tiempoTotal !== null ? tiempoTotal : '-',
            puntos1: data.puntsRonda1 || '0',
            puntos2: data.puntsRonda2 || '0',
            puntosTotal: data.puntsTotal,
            ranking: data.ranking || '-'
          };
        });
        setTeams(teamsData);
      });
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
            Resultats de l' Esdeveniment
          </Heading>
          <TableContainer borderRadius={15} bg="#95959e" width={"95%"}>
            <Table
              variant="striped"
              fontFamily={'"Hanken Grotesk", sans-serif'}
            >
              <Thead>
                <Tr >
                  <Th fontSize="18px" p={15}>Equipo</Th>
                  <Th fontSize="18px" p={15}>Inicio</Th>
                  <Th fontSize="18px" p={15}>Fin</Th>
                  <Th isNumeric fontSize="18px" p={15}>Tiempo (s)</Th>
                  <Th isNumeric fontSize="18px" p={15}>Puntos R.1</Th>
                  <Th isNumeric fontSize="18px" p={15}>Puntos R.2</Th>
                  <Th isNumeric fontSize="18px" p={15}>Total</Th>
                  <Th isNumeric fontSize="18px" p={15}>Ranking</Th>
                </Tr>
              </Thead>
              <Tbody>
                {teams.map((team) => (
                  <Tr key={team.nombre}>
                    <Td fontSize="16px">{team.nombre}</Td>
                    <Td fontSize="16px">{team.inicio}</Td>
                    <Td fontSize="16px">{team.fin}</Td>
                    <Td fontSize="16px" isNumeric>{team.tiempoTotal}</Td>
                    <Td fontSize="16px"isNumeric>{team.puntos1}</Td>
                    <Td fontSize="16px" isNumeric>{team.puntos2}</Td>
                    <Td fontSize="16px" isNumeric>{team.puntosTotal}</Td>
                    <Td fontSize="16px" isNumeric>{team.ranking}</Td>
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
