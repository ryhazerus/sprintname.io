import './App.scss';
import { Box, HStack, Center, Text, VStack } from '@chakra-ui/react';
import Menu from './shared/menu/Menu';
import Logo from './shared/logo/Logo';
import Voting from './features/voting/Voting';


function App() {
  return (
    <Center marginTop={10}>
      <VStack alignItems={'left'}>
        <Logo />
        <Text fontSize={'2xl'}>
          ✌️Hi Zahyr!
        </Text>
        <Text fontSize={'md'}>
          Lets get voting, select your team and set your order!
        </Text>
        <Box>
          <HStack>
            <Box>
              <Menu />
            </Box>
            <Box>
              <Voting />
            </Box>
          </HStack>
        </Box>
      </VStack>
    </Center>
  );
}

export default App;
