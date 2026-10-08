import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Text, useToast, VStack } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { useLogin } from "../../../services/auth/auth"
import { Link as RouterLink, useNavigate } from "react-router"
import { Link as Chakralink } from "@chakra-ui/react"
import { useAuthstore } from "../../../store/authStore"
import { useAppDispatch } from "../../../reduxStore/hook"
import { setUser } from "../../../reduxStore/Reducer/authReducer"

interface InputField {
    username: string,
    password: string
}


const Login = () => {

    const dispatch = useAppDispatch()

    //store the accesstoken and refreshtoken
    const { setTokens } = useAuthstore();

    const loginMethod = useLogin();
    const toast = useToast();
    const { register, handleSubmit,
        formState: { errors }
    } = useForm<InputField>()

    const navigate = useNavigate()

    const onSubmit = (formData: InputField) => {
        console.log('login Formdata', formData)
        loginMethod.mutate(formData, {
            onSuccess: ({ data }) => {



                console.log('data', data)

                dispatch(setUser({
                    username: data?.user?.username,
                    email: data?.user?.email,
                    accessToken: data?.accessToken,
                    refreshToken: data?.refreshToken
                }))
                setTokens({
                    accessToken: data?.accessToken,
                    refreshToken: data?.refreshToken,
                    userinfo: data?.user
                })

                toast({
                    title: "Login Successful",
                    description: "You have successfully loggedin.",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                });
                navigate('/product')
            },
            onError: (error: any) => {
                console.error("Login failed:", error);
                toast({
                    title: "Login Failed",
                    description: error.response?.data?.message || "An error occurred.",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                });
            }
        })
    }

    return (
        <Box
            w={{ base: "90%", md: "400px" }}
            mt={10}
            p={8}
            borderRadius="lg"
            boxShadow="5px 10px 50px 2px #0003"
            color="white"
            border={"1px"}
            borderColor={"gray.800"}
        >
            <Heading mb={6} size={"lg"} textAlign={"center"}>
                Login
            </Heading>

            <form onSubmit={handleSubmit(onSubmit)}>
                <VStack spacing={4}>
                    <FormControl
                        isInvalid={!!errors.username}
                    >
                        <FormLabel>Username</FormLabel>
                        <Input
                            borderColor={"gray.300"}
                            type="text"
                            placeholder="Username"
                            {...register("username", { required: "Username is required" })}
                        />
                        <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
                    </FormControl>

                    <FormControl
                        isInvalid={!!errors.password}
                    >
                        <FormLabel>Password</FormLabel>
                        <Input
                            borderColor={"gray.300"}
                            type="password"
                            placeholder="Password"
                            {...register("password", { required: "Password is required" })}
                        />
                        <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
                    </FormControl>

                    <Button colorScheme="cyan" color={"black"} type="submit" width="full">
                        Login
                    </Button>

                    <Text fontSize={"sm"} color={"gray.600"}>
                        You don't have an account?
                        <Chakralink
                            as={RouterLink}
                            to="/register"
                            color="cyan.400"
                            fontWeight="bold"
                            ml={1}
                        >
                            Register
                        </Chakralink>
                    </Text>
                </VStack>

            </form>
        </Box>
    )
}

export default Login