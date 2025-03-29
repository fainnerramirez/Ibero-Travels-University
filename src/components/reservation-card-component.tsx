import { Box, Button, Card, CardBody, CardFooter, Divider, Heading, Image } from "@chakra-ui/react"

export type ReservationCardProps = {
    country: string,
    imageCountry: string,
    redirect: string
}

const ReservationCardComponent: React.FC<ReservationCardProps> = (
    { country, imageCountry, redirect }
) => {
    return (
        <Card maxW='xs'>
            <CardBody>
                <Image
                    src={imageCountry}
                    alt={country}
                    borderRadius='lg'
                />
                <Box>
                    <Heading size={"md"}>
                        {country}
                    </Heading>
                </Box>
            </CardBody>
            <Divider />
            <CardFooter>
                <Button variant='solid' background={"brown"} width={"full"} color={"whiteAlpha.900"}
                    onClick={() => window.open(redirect, "pagina de hoteles")}
                >
                    Ir a hoteles
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ReservationCardComponent;