import {
  Box,
  VStack,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import Btn from "./Btn";

const Normas = () => {
  return (
    <VStack my={"5rem"}>
      <Heading
        as="h1"
        fontFamily={'"Hanken Grotesk", sans-serif'}
        textTransform={"uppercase"}
        color={"white"}
        size={"2xl"}
        id="normas"
        textAlign={"center"}
      >
        NORMAS DEL ESDEVENIMENT
      </Heading>
      <Box width={"70%"} textAlign={"justify"}>
        <Text
          fontFamily={'"Hanken Grotesk", sans-serif'}
          color={"white"}
          fontSize={"22px"}
          fontWeight={400}
        >
          Com que és una competència per equips (dos integrants) el pilot pot
          desplaçar-se lliurement pel circuit, el company pot ingressar al
          circuit només en cas de socórrer el dron, sinó s'ha de mantenir per
          fora del perímetre del circuit. Un cop seleccionat el pilot no es
          podrà canviar el pilot a meitat de la ronda, ha de continuar fins a
          esgotar-se el temps. Es compta amb 5 minuts per completar el circuit
          Inicia el temps del comptador quan el pilot rebi el senyal del jutge
          (sera de l'staff de coordinació i armat de l'esdeveniment) i el dron
          enlairament del terra, amb dues maneres d'acabar la participació:
        </Text>
        <List
          fontFamily={'"Hanken Grotesk", sans-serif'}
          color={"white"}
          fontSize={"22px"}
          fontWeight={400}
        >
          <OrderedList>
            <ListItem>Que acabi el circuit i aturar el temps</ListItem>
            <ListItem>Que es culminin els 5 minuts.</ListItem>
          </OrderedList>
        </List>
        <Text
          fontFamily={'"Hanken Grotesk", sans-serif'}
          color={"white"}
          fontSize={"22px"}
          fontWeight={400}
          my={"1rem"}
        >
          El circuit consta de 5 tipus d'obstacles diferents que tenen una
          valoració específica que permetrà sumar la quantitat de punts de cada
          equip per desafiament superat.
        </Text>
        <List
          fontFamily={'"Hanken Grotesk", sans-serif'}
          color={"white"}
          fontSize={"22px"}
          fontWeight={400}
        >
          <OrderedList>
            <ListItem>
              Dianes:
              <UnorderedList>
                <ListItem>Valoració: 100 pts.</ListItem>
                <ListItem>
                  Objectiu: el dron ha de recolzar-se a terra dins de la
                  circumferència de l’objecte.
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              Porteries petites (maniobra a realitzar, s'explicarà el dia del
              concurs).{" "}
              <UnorderedList>
                <ListItem>Valoració: Primer porteria: 300 pts.</ListItem>
                <ListItem>Segona porteria: 300 pts.</ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              Punt cec:
              <UnorderedList>
                <ListItem>Valoració: 1000 pts.</ListItem>
                <ListItem>
                  Objectiu: el pilot necessitarà l'ajuda del seu company per ser
                  guiat i així poder exercir el mateix moviment que al punt 1
                  però aquesta vegada sense poder veure res ja que comptarà amb
                  un mur front a ell.
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              Eslàlom:
              <UnorderedList>
                <ListItem>
                  Valoració: 500 pts (en total per completar el circuit sencer).
                </ListItem>
                <ListItem>
                  Objectiu: es col·loquen 5 pals dels quals el participant haurà
                  de passar en forma de ziga-zaga per arribar així al punt final
                  del circuit.
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              H:{" "}
              <UnorderedList>
                <ListItem>Valoració: 2000 pts.</ListItem>
                <ListItem>
                  Objectiu en una taula petita el participant haurà de col·locar
                  el dron, Quan ho aconsegueixi, el temps parés i acabarà la
                  seva participació.
                </ListItem>
              </UnorderedList>
            </ListItem>
          </OrderedList>
        </List>
        <Box
          mt={"4rem"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Btn />
        </Box>
      </Box>
    </VStack>
  );
};

export default Normas;
