import { Button } from "@chakra-ui/react";
import { useLocation } from "wouter";

const Btn = () => {
  const [location, setLocation] = useLocation();

  const handleClick = () => {
    setLocation('/registration'); // Replace '/registrationpage' with your actual registration page route
  };
  return (
    <Button
      colorScheme="red"
      fontFamily={'"Hanken Grotesk", sans-serif'}
      width={"150px"}
      onClick={handleClick}
    >
      Inscriu-te
    </Button>
  );
};

export default Btn;
