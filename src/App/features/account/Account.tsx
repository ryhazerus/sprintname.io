import { Center, VStack, HStack, Button, Link, Text, Box, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import Logo from "../../shared/logo/Logo";
import Menu from "../../shared/menu/Menu";

function Account() {

    return (
        <Center marginTop={10}>
            <VStack alignItems={'left'}>
                <Logo />
                <Text fontSize={'2xl'}>
                    🧾 Account Settings
                </Text>
                <Text fontSize={'md'}>
                    Configure and change your account and personal information.
                </Text>
                <Box>
                    <HStack>
                        <Box>
                            <Menu />
                        </Box>
                        <Box>
                            <Box p={2} borderRadius={'4px'} background={'white'} boxShadow={'lg'} minWidth={'300px'} maxWidth={'400px'} w={'400px'} height={'550px'} >
                                <Flex>
                                    <FormControl isRequired>
                                        <FormLabel>Username</FormLabel>
                                        <Input placeholder='Username' />
                                        <FormLabel>Email</FormLabel>
                                        <Input type="email" placeholder='Email' />
                                        <FormLabel>Password</FormLabel>
                                        <Input type="password" placeholder='Password' />
                                    </FormControl>
                                </Flex>
                                <Button bg={'red'} marginBottom={'12px'} color={'white'} w={'100%'}>Delete Account</Button>
                                <Button bg={'#964dff'} marginBottom={'12px'} color={'white'} w={'100%'}>Save Settings</Button>
                            </Box>

                        </Box>
                    </HStack>
                </Box>
            </VStack >
        </Center >
    )
}

export default Account;