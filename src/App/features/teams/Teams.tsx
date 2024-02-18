import { Box, Center, HStack, VStack, Text, Flex, Button, Radio, RadioGroup, Stack, Divider } from "@chakra-ui/react";
import Logo from "../../shared/logo/Logo";
import Voting from "../voting/Voting";
import Menu from "../../shared/menu/Menu";
import React from "react";

interface ITeam {
    id: number,
    team_name: string,
    team_description: string,
    team_members: string
}


let my_teams: ITeam[] = [
    {
        "id": 1,
        "team_name": "BDR Thermea",
        "team_description": "string",
        "team_members": "string"
    },
    {
        "id": 2,
        "team_name": "3Devo",
        "team_description": "string",
        "team_members": "string"
    },
    {
        "id": 3,
        "team_name": "Remeha",
        "team_description": "string",
        "team_members": "string"
    },
    {
        "id": 4,
        "team_name": "Boring Company",
        "team_description": "string",
        "team_members": "string"
    },
    {
        "id": 5,
        "team_name": "Tester4Ever",
        "team_description": "string",
        "team_members": "string"
    },
]

function Teams() {
    const [value, setValue] = React.useState('1')

    return (
        <Center marginTop={10}>
            <VStack alignItems={'left'}>
                <Logo />
                <Text fontSize={'2xl'}>
                   👯 Teams
                </Text>
                <Text fontSize={'md'}>
                    Select your team and choose your voting options!
                </Text>
                <Box>
                    <HStack>
                        <Box>
                            <Menu />
                        </Box>
                        <Box>
                            <Box p={2}  borderRadius={'4px'} background={'white'} boxShadow={'lg'} minWidth={'300px'} maxWidth={'400px'} w={'400px'} height={'550px'} >
                                <Flex direction={'column'} overflowY={'scroll'} w={'100%'}>
                                    <RadioGroup onChange={setValue} value={value}>
                                        <Stack direction='column' minH={'500px'} w={'100%'}>
                                            {my_teams.map((team: ITeam) => {
                                                return (<Box><Radio p={2} w={'100%'} value={team.team_name}>{team.team_name}</Radio><Divider></Divider></Box>)
                                            })}
                                        </Stack>
                                    </RadioGroup>
                                </Flex>
                                <Button bg={'#964dff'} marginBottom={'12px'} color={'white'} w={'100%'}>Save Team</Button>
                            </Box>

                        </Box>
                    </HStack>
                </Box>
            </VStack>
        </Center>
    )
}

export default Teams;