import { Box, Link } from "@chakra-ui/react";

function Logo() {
    return (
        <Box alignItems={'left'} marginBottom={5} background={'#964dff'} p={1} paddingRight={5} maxWidth={'140px'} paddingLeft={5} borderRadius={20} color={'white'}>
            <Link href="/">Sprintname.io</Link>
        </Box>
    )
}

export default Logo;