import { Box } from "@chakra-ui/react"
import NavbarComponent from "./navbar-component"

export const HeroComponent = () => {
    return (
        <Box width={"100vw"} background={"red.500"} className="class1">
          <NavbarComponent />  
        </Box>
    )
}