import { Box, Card, CardBody, CardHeader, Heading, Image, Stack, StackDivider, Text } from "@chakra-ui/react"
import imageFinal from "../../public/assets/contact.webp"

const ContactComponent = () => {
    return (
        <Box width={"100%"} display={"flex"} flexDirection={{base: "column", lg: "row"}} justifyContent={"center"} gap={10} >
            <Image src={imageFinal} height={400} width={{base: "100%", md: 500}} borderRadius={10}/>
            <Card width={{base: "100%", lg: "50%"}}>
                <CardHeader>
                    <Heading size='md'>Contáctanos</Heading>
                </CardHeader>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Dirección
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Calle 123, 12a 5.18,
                                Barranquilla.
                                Colombia.
                                C.P. 12345
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Contacto
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Teléfono: (55) 1234 5678
                                Celular: (55) 1234 5678
                                jatoenlajato@.com
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Horario de Oficina
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Lunes: 8:00 a. m. - 7:00 p. m.
                                Martes: 8:00 a. m. - 5:00 p. m.
                                Miércoles: 8:00 a. m. - 5:00 p. m.
                                Jueves: 8:00 a. m. - 7:00 p. m.
                                Viernes: 8:00 a. m. - 5:00 p. m.
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    )
}


export default ContactComponent;