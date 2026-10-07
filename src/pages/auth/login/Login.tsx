import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, VStack } from "@chakra-ui/react"
import { useForm } from "react-hook-form"

interface InputField {
    username: string,
    password: string
}

const Login = () => {

    const { register, handleSubmit,
        formState: { errors }
    } = useForm<InputField>()

    const onSubmit = (formData: InputField) => {
        console.log('login Formdata', formData)
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
                </VStack>

            </form>
        </Box>
    )
}

export default Login