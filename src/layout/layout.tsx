import { Box } from "@chakra-ui/react"
import React from "react"
import NavbarComponent from "../components/navbar-component"
import FooterComponent from "../components/footer-component"

type Props = {
    children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <Box width={"100%"}>
            <NavbarComponent />
            {children}
            <FooterComponent />
        </Box>
    )
}