import { Box, Button, Container, Flex, HStack, Image, Text } from "@chakra-ui/react"
import Logo from '../../assets/ecommerce-logo.svg'
import { Link, useNavigate } from "react-router"
import { useAuthstore } from "../../store/authStore"
import { AxiosInstance } from "../../services/auth/AxiosInstance"
import { useAppDispatch, useAppSelector } from "../../reduxStore/hook"
import { logout } from "../../reduxStore/Reducer/authReducer"
import { PersistStore } from "../../reduxStore/ReduxStore"

const NavbarLogin = () => {

    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state?.auth)

    const { accessToken, clearTokens } = useAuthstore()
    const navigate = useNavigate()

    const logoutNav = async () => {
        try {
            await AxiosInstance.post("/users/logout");
            clearTokens();
            dispatch(logout())
            await PersistStore.purge(); 
            navigate("/login");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    console.log('user', user)

    return (
        <Box
            boxShadow="0 4px 10px rgba(0, 0, 0, 0.2)" // black shadow with opacity
            py={3}
            position="fixed"
            top="0"
            left="0"
            right="0"
            zIndex="1000"
            bgGradient="linear(to-r, #10263b, #0a111b)"
        >

            <Container maxW="6xl" px={{ base: 4, md: 8 }}>
                <Flex
                    align={"center"}
                    justify={"space-between"}
                    flexWrap={"wrap"}
                >
                    {/* Logo */}
                    <Link to={"/"}>
                        <Image
                            src={Logo}
                            alt="E-commerce Logo"
                            boxSize="50px"
                            objectFit="contain"
                        />
                    </Link>

                    <HStack
                        display={{ base: "none", md: "flex" }}
                        spacing={{ base: 2, md: 4 }}
                        mt={{ base: 2, md: 0 }}
                    >
                        {
                            !accessToken ?
                                <>
                                    <Link to="/login">
                                        <Button
                                            colorScheme="cyan"
                                            color="black"
                                            size={{ base: "sm", md: "md" }}
                                        >
                                            Login
                                        </Button>
                                    </Link>
                                    <Link to="/register">
                                        <Button
                                            variant="outline"
                                            colorScheme="cyan"
                                            size={{ base: "sm", md: "md" }}
                                        >
                                            Register
                                        </Button>
                                    </Link>
                                </>
                                :
                                (
                                    <Button
                                        colorScheme="cyan"
                                        color="black"
                                        size={{ base: "sm", md: "md" }}
                                        onClick={logoutNav}
                                    >
                                        Logout
                                    </Button>
                                )
                        }

                    </HStack>
                </Flex>
            </Container>

        </Box>
    )
}

export default NavbarLogin