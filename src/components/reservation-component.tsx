import { CalendarIcon, Search2Icon } from "@chakra-ui/icons"
import { Button, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text } from "@chakra-ui/react"

const ReservationComponent = () => {
    return (
        <Stack spacing={4} width={{base: "90%", md: "50%"}} margin={"auto"} mt={10}>
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <Search2Icon color='brown' />
                </InputLeftElement>
                <Input type='text' placeholder='Destino' />
            </InputGroup>
            <Stack flexDirection={{ base: "column", md: "row" }}>
                <InputGroup>
                    <InputLeftElement pointerEvents='none' color='gray.300' fontSize='1.2em'>
                        <CalendarIcon color='brown' />
                    </InputLeftElement>
                    <Input type="date" placeholder='Entrada' />
                </InputGroup>
                <InputGroup>
                    <InputLeftElement pointerEvents='none' color='gray.300' fontSize='1.2em'>
                        <CalendarIcon color='brown' />
                    </InputLeftElement>
                    <Input type="date" placeholder='Salida' />
                </InputGroup>
            </Stack>
            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    placeholder='Adultos'
                    p={5}
                    readOnly
                />
                <InputRightElement width='5.5rem'>
                    <Button h='1.75rem' size='sm' onClick={undefined} backgroundColor={"brown"} color={"whiteAlpha.900"}>
                        +
                    </Button>
                    <Text p={1}>0</Text>
                    <Button h='1.75rem' size='sm' onClick={undefined} backgroundColor={"brown"} color={"whiteAlpha.900"}>
                        -
                    </Button>
                </InputRightElement>
            </InputGroup>
            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    placeholder='Niños'
                    p={5}
                    readOnly
                />
                <InputRightElement width='5.5rem'>
                    <Button h='1.75rem' size='sm' onClick={undefined} backgroundColor={"brown"} color={"whiteAlpha.900"}>
                        +
                    </Button>
                    <Text p={1}>0</Text>
                    <Button h='1.75rem' size='sm' onClick={undefined} backgroundColor={"brown"} color={"whiteAlpha.900"}>
                        -
                    </Button>
                </InputRightElement>
            </InputGroup>
            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    placeholder='Habitaciones'
                    p={5}
                    readOnly
                />
                <InputRightElement width='5.5rem'>
                    <Button h='1.75rem' size='sm' onClick={undefined} backgroundColor={"brown"} color={"whiteAlpha.900"}>
                        +
                    </Button>
                    <Text p={1}>0</Text>
                    <Button h='1.75rem' size='sm' onClick={undefined} backgroundColor={"brown"} color={"whiteAlpha.900"}>
                        -
                    </Button>
                </InputRightElement>
            </InputGroup>
            <Button mt={10} backgroundColor={"brown"} color={"whiteAlpha.900"}>
                Buscar
            </Button>
        </Stack>
    )
}

export default ReservationComponent;