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
        NORMES DE L'ESDEVENIMENT
      </Heading>
      <Box width={"70%"} textAlign={"justify"}>
        <Text
          fontFamily={'"Hanken Grotesk", sans-serif'}
          color={"white"}
          fontSize={"22px"}
          fontWeight={400}
        >
          Com que és una competició per equips (dos integrants) el pilot pot
          desplaçar-se lliurement pel circuit, el company pot entrar al circuit
          només en cas de socórrer el dron, altrament s'ha de mantenir per fora
          del perímetre del circuit. Un cop seleccionat el pilot no es podrà
          canviar a meitat de la ronda, ha de continuar fins a esgotar-se el
          temps. Es compta amb 5 minuts per completar el circuit. S'inicia el
          temps del comptador quan el pilot rebi el senyal del jutge. Hi han
          dues maneres d'acabar la participació:
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
                  guiat i així poder fer el mateix moviment que al punt 1 però
                  aquesta vegada sense poder veure res ja que tindra amb un mur
                  davant de l'objectiu.
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              Eslàlom:
              <UnorderedList>
                <ListItem>
                  Valoració: 500 pts (en completar el circuit sencer).
                </ListItem>
                <ListItem>
                  Objectiu: es col·loquen 5 pals dels quals el participant haurà
                  de passar en forma de ziga-zaga per arribar així al punt final
                  del circuit.
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              Final:{" "}
              <UnorderedList>
                <ListItem>Valoració: 2000 pts.</ListItem>
                <ListItem>
                  Objectiu en una taula petita el participant haurà d'aterrar el
                  dron, Quan ho aconsegueixi, el temps s'aturarà i acabarà la
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
