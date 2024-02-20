import {
    Center,
    FormControl,
    FormLabel,
    Input,
    Button,
    Text,
    VStack,
    Link
} from '@chakra-ui/react'
import './login.scss'
import Logo from '../../shared/logo/Logo';

function Login() {
    return (
        <Center marginTop={20}>
            <VStack p={5} alignItems={'right'} w={'550px'} borderRadius={4} boxShadow={5} bg="white" border={'1px solid #EAEAEA'}>
                <Logo />
                <VStack alignItems={'left'}>
                    <Text fontWeight={'bold'} fontSize={'xl'}>👋 Login</Text>
                    <Text>Welcome back, please login to continue using the sprintname.io voter service.</Text>
                    <FormControl isRequired className="padding-small">
                        <FormLabel>Email</FormLabel>
                        <Input type="email" placeholder='Example@email.com' />
                        <FormLabel>Password</FormLabel>
                        <Input type="password" placeholder='Password' />
                        <Button bg={'#964dff'} color="white" w="100%" marginTop={4} type='submit'>Login</Button>
                    </FormControl>
                    <Link href="/forgotpassword" textDecoration={'underline'}>I forgot my password.</Link>
                    <Link href="/register" color="#964dff" textDecoration={'underline'}>Don't have an account? Register.</Link>
                </VStack>
            </VStack>
        </Center>
    )
}

export default Login;