import { Box, Button, Heading, Text } from "@chakra-ui/react"
import "../styles/hero.css";
import { COLORS } from "../utils/colors-custom";

const HeroComponent = () => {
  return (
    <Box
      width={"100%"}
      height={"100vh"}
      backgroundImage="url('../../public/assets/welcome.webp')"
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      color={"#FFFFFF"}
      gap={10}
      className="overlay"
    >
      <Heading size={{ base: "2xl", md: "2xl", lg: "4xl" }} textAlign={"center"}>
        Es hora de tu
        próxima aventura
      </Heading>
      <Text width={{ base: "90%", lg: "50%" }} textAlign={"center"} fontSize={24}>
        Descubre tu hogar lejos de casa, ya sea que estés buscando un lugar para relajarte, explorar o trabajar, tenemos el espacio perfecto para ti.
      </Text>
      <Button variant={"solid"}
        size={{ base: "md", md: "md", lg: "lg" }}
        color="whiteAlpha.900" 
        backgroundColor={"brown"}
        borderRadius={32}
      >reservar</Button>
    </Box>
  )
}

export default HeroComponent;