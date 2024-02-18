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

function ForgotPassword() {
    return (
        <Center marginTop={20} >
            <VStack p={5} alignItems={'right'} w={'550px'} borderRadius={4} boxShadow={5} bg="white" border={'1px solid #EAEAEA'}>
                <Logo />
                <VStack spacing={2} alignItems={'left'}>
                    <Text fontWeight={'bold'} fontSize={'xl'}>🔐 Fogot Password</Text>
                    <Text>Set your new password and we will get back to you as soon as possible!</Text>
                    <FormControl isRequired className="padding-small">
                        <FormLabel>Email</FormLabel>
                        <Input type="text" placeholder='Example@email.com' />
                        <FormLabel>Password</FormLabel>
                        <Input type="password" placeholder='New Password' />
                        <FormLabel>Repeat Password</FormLabel>
                        <Input type="password" placeholder='New Password' />
                        <Button bg={'#964dff'} color="white" w="100%" marginTop={4} type='submit'>Create Account</Button>
                    </FormControl>
                    <Link color="#964dff" href="/login" textDecoration={'underline'}>Already have an account? Login.</Link>
                </VStack>
            </VStack>
        </Center>
    )
}

export default ForgotPassword;