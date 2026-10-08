import { Box, Heading, Text, VStack } from "@chakra-ui/react"

const AccessDenied = () => {
    return (
        <Box
            w={"500px"}
            h={"auto"}
            padding={"14"}
            boxShadow={"base"}
            rounded={"2xl"}
            textAlign={"center"}
        >
            <VStack spacing={"7"}>
                <Heading>Access Denied</Heading>
                <Text>You do not have the required role or permission to access this page.</Text>
            </VStack>

        </Box>
    )
}

export default AccessDenied