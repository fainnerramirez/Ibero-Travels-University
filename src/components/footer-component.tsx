import { Box, Text } from "@chakra-ui/react"

const FooterComponent = () => {
    return (
        <Box width={"100%"} p={5} textAlign={"center"} bg={"brown"} color={"#FFFFFF"} mt={10}>
            <Text>Todos los derechos reservados - {new Date().getFullYear()}</Text>
        </Box>
    )
}

export default FooterComponent;