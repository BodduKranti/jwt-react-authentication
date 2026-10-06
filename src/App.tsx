import { Box, Button } from "@chakra-ui/react"

const App = () => {
    return (
        <>
            <Box
                w={"100vw"}
                h={"100vh"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDir={"column"}
                gap={"10"}
            >
                <div>App</div>
                <Button>Read</Button>
            </Box>

        </>

    )
}

export default App