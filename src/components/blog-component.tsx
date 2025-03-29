import { Box, Button, Heading } from "@chakra-ui/react"

const BlogComponent = () => {
    return (
        <Box width={"100%"} mt={30} pt={10}  height={400} display={"flex"} gap={10} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
            <Heading>
                Interactuemos ahora
            </Heading>
            <Button bg={"brown"} color={"#fff"}>
                Ir a nuestro blog
            </Button>
        </Box>
    )
}


export default BlogComponent;