import { Box } from "@chakra-ui/react"
import RegionComponent from "./reservation-country-component"
import { ReservationCardProps } from "./reservation-card-component"
import { COLORS } from "../utils/colors-custom"

const reservations: Array<ReservationCardProps> = [
    {
        country: "Bogotá",
        imageCountry: "../../public/assets/bogota.webp",
        redirect: "/bogota"
    },
    {
        country: "Medellin",
        imageCountry: "../../public/assets/medellin.webp",
        redirect: "/medellin"
    },
    {
        country: "Cali",
        imageCountry: "../../public/assets/cali.webp",
        redirect: "/cali"
    },
    {
        country: "Cartagena",
        imageCountry: "../../public/assets/cartagena.webp",
        redirect: "/cartagena"
    },
    {
        country: "San Andres",
        imageCountry: "../../public/assets/sanandres.webp",
        redirect: "/sanandres"
    },
    {
        country: "Santa Marta",
        imageCountry: "../../public/assets/santamarta.webp",
        redirect: "/santamarta"
    }
]

const RegionContainer = () => {
    return (
        <Box width={"100%"} mt={10} bg={COLORS.LADRILLO}>
            <RegionComponent 
                key={new Date().toTimeString()} 
                countryMain="Colombia" 
                reservations={reservations} />
                <RegionComponent 
                key={new Date().toTimeString()} 
                countryMain="Sudamerica" 
                reservations={reservations} />
                <RegionComponent 
                key={new Date().toTimeString()} 
                countryMain="Estados Unidos" 
                reservations={reservations} />
        </Box>
    )
}

export default RegionContainer;