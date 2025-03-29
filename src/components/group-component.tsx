import { Badge, Box, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react"
import foto from "../../public/assets/hilary.jpeg";

const dataStudents = [
    {
        name: "Fainner Ramirez",
        photo: "../../public/assets/fainner.jpeg",
        rol: "dev"
    },
    {
        name: "Maria Camila Sepulveda",
        photo: "../../public/assets/camila.jpeg",
        rol: "designer"
    },
    {
        name: "Katherin Martinez",
        photo: "../../public/assets/katerin.jpeg",
        rol: "designer"
    },
    {
        name: "Carlos Cortes",
        photo: "../../public/assets/daniel.jpg",
        rol: "dev"
    },
    {
        name: "Hilary Ochoa",
        photo: "../../public/assets/hilary.jpeg",
        rol: "designer"
    }
]

const GroupComponent = () => {
    return (
        <Box mb={20}>
            <Box textAlign={"center"} p={10}>
                <Heading>
                    Nuestro Equipo de Ingeniería
                </Heading>
                <Text>
                    Estudiantes de Ingeniería de Software trabajando juntos para crear soluciones innovadoras.
                </Text>
            </Box>
            <Box display={"flex"} gap={10} justifyContent={"center"} flexWrap={"wrap"}>
                {
                    dataStudents.map(user => {
                        return (
                            <Card minW='xs' minH={'xs'}>
                                <Badge
                                    variant='subtle'
                                    colorScheme='green'
                                    textAlign={"center"}
                                >
                                    {
                                        user.rol === "dev" ? "Desarrollador Frontend" : "Diseñadora"
                                    }
                                </Badge>
                                <CardBody display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                    <Image
                                        src={user.photo}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='full'
                                        width={150}
                                        height={150}
                                    />
                                </CardBody>
                                <CardFooter textAlign={"center"} display={"flex"} flexDirection={"column"}>
                                    <Heading size={"md"} m='0'>{user.name}</Heading>
                                    <Text>Est. Ingeniería de software</Text>
                                </CardFooter>
                            </Card>
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default GroupComponent;