import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router"
import Navbar from "../components/navbar/Navbar"

const Mainlayout = () => {
    return (
        <>
            <Box
                w={"100vw"}
                h={"100vh"}
                bgGradient="linear(to-r,#10263b,#0a111b)"
                color={"white"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                {/* NAvbar */}
                <Box pos={"fixed"} top={0} left={0} w={"100vw"}>
                    <Navbar />
                </Box>

                <Outlet />
            </Box>
        </>
    )
}

export default Mainlayout