import { Box, VStack, Text, Divider, Link } from "@chakra-ui/react";
import './Menu.scss'

let navigationLinks: Navigation[] = [
    {
        "title": "",
        "description": "",
        "link": ""
    }
]

function Menu() {
    return (
        <Box borderRadius={'4px'} background={'white'} boxShadow={'lg'} maxWidth={'300px'} >
            <VStack alignItems={'left'} p={5}>
                <Link href="/" fontSize="xl">Dashboard</Link>
                <Text color={'#964dff'} fontSize={'xs'}>Team Selection</Text>
                <Text>Simluation & Testing</Text>
                <Link href="/teams" fontSize={'xs'}>Show all...</Link>
                <Divider></Divider>
                <Text color={'#964dff'} fontSize={'xs'}>Voting Controls</Text>
                <Text className="menu-hover">Regenerate Options</Text>
                <Text className="menu-hover">Accept Vote</Text>
                <Divider></Divider>
                <Text color={'#964dff'} fontSize={'xs'}>Account</Text>
                <Link href="/account" className="menu-hover">Account Settings</Link>
                <Text className="menu-hover">Logout</Text>
                <Divider></Divider>
                <VStack background={'#F6F6F6'} p={4} borderRadius={4} alignItems={'left'}>
                    <Text fontSize={'s'} fontWeight={'bold'}>Whats all this?</Text>
                    <Text fontSize={'xs'}>
                        sprintname.io is a one-person project
                        that tries to make scrum a bit more fun in its own way, by allowing teams to vote on different names.
                    </Text>
                </VStack>
            </VStack>
        </Box>
    )
}

export default Menu;