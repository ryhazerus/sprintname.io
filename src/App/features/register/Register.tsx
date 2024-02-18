import {
    Center,
    FormControl,
    FormLabel,
    Input,
    Button,
    Text,
    VStack,
    Link,
    FormHelperText
} from '@chakra-ui/react'
import Logo from '../../shared/logo/Logo';

function Register() {
    return (
        <Center marginTop={20} >
            <VStack p={5} alignItems={'right'} w={'550px'} borderRadius={4} boxShadow={5} bg="white" border={'1px solid #EAEAEA'}>
                <Logo />
                <VStack spacing={2} alignItems={'left'}>
                    <Text fontWeight={'bold'} fontSize={'xl'}>Register</Text>
                    <Text>✌️ Hey there, please register to continue using the pokemon voter services.</Text>
                    <FormControl isRequired className="padding-small">
                        <FormLabel>Username</FormLabel>
                        <Input placeholder='John Doe' />
                        <FormLabel>Email</FormLabel>
                        <Input type="email" placeholder='Example@email.com' />
                        <FormLabel>Password</FormLabel>
                        <Input type="password" placeholder='Password' />
                        <Button bg={'#964dff'} color="white" w="100%" marginTop={4} type='submit'>Create Account</Button>
                    </FormControl>
                    <Link color="#964dff" href="/login" textDecoration={'underline'}>Already have an account? Login.</Link>
                </VStack>
            </VStack>
        </Center>
    )
}

export default Register;