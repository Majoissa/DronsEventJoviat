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
                  <Th isNumeric>Puntos R.1</Th>
                  <Th isNumeric>Puntos R.2</Th>
                  <Th isNumeric>Total</Th>
                  <Th isNumeric>Ranking</Th>
                </Tr>
              </Thead>
              <Tbody>
                {teams.map((team) => (
                  <Tr key={team.nombre}>
                    <Td>{team.nombre}</Td>
                    <Td>{team.inicio}</Td>
                    <Td>{team.fin}</Td>
                    <Td isNumeric>{team.tiempoTotal}</Td>
                    <Td isNumeric>{team.puntos1}</Td>
                    <Td isNumeric>{team.puntos2}</Td>
                    <Td isNumeric>{team.puntosTotal}</Td>
                    <Td isNumeric>{team.ranking}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </VStack>
      </Box>
    </Box>
  );
};

export default Results;
