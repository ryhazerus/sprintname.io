import { Box, HStack, Image, Text, Flex, Spacer } from "@chakra-ui/react";
import drag from './align-justify.svg'
import { CSSProperties, forwardRef, HTMLAttributes } from "react"


type Props = {
    item: VotingOption
    isOpacityEnabled?: boolean
    isDragging?: boolean
} & HTMLAttributes<HTMLDivElement>

const VotingCard = forwardRef<HTMLDivElement, Props>(
    ({ item, isOpacityEnabled, isDragging, style, ...props }, ref) => {
        const styles: CSSProperties = {
            opacity: isOpacityEnabled ? "0.4" : "1",
            cursor: isDragging ? "grabbing" : "grab",
            lineHeight: "0.5",
            transform: isDragging ? "scale(1.05)" : "scale(1)",
            ...style
        }
        return (
            <div ref={ref} style={styles} {...props}>
                <Box minHeight={'80px'} w={'100%'} border={'1px solid #e3e3e3'} borderRadius={4}>
                    <Flex minWidth='max-content' alignItems='center' gap='2'>
                        <Image src={item.image}></Image>
                        <Text fontWeight={'bold'}>
                            {item.name}
                        </Text>
                        <Spacer />
                        <Image p={4} alignItems={'right'} src={drag}></Image>
                    </Flex>
                </Box>
            </div>
        )
    }
)

export default VotingCard;