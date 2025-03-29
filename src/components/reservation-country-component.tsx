import { Divider, Heading, Stack } from "@chakra-ui/react"
import ReservationCardComponent, { ReservationCardProps } from "./reservation-card-component"

type RegionProps = {
    countryMain: string,
    reservations: Array<ReservationCardProps>
}

const RegionComponent: React.FC<RegionProps> = ({
    countryMain,
    reservations
}) => {
    return (
        <>
            <Stack direction={{ base: "column", md: "row" }} flexWrap={"wrap"}>
                <Heading mt={5}>Reserva tu hotel en {countryMain}</Heading>
                <Stack direction={{ base: "column", md: "row" }} flexWrap={"wrap"} justifyContent={"center"}>
                    {
                        reservations.map((res, index) => {
                            return (
                                <ReservationCardComponent key={index} {...res} />
                            )
                        })
                    }
                </Stack>
            </Stack>
            <Divider p={5}/>
        </>
    )
}

export default RegionComponent;