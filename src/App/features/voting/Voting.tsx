import {
    Box,
    VStack,
    Text,
    Button,
    HStack,
    Image,
    Divider
} from '@chakra-ui/react'
import VotingCard from './VotingCard';
import { motion } from 'framer-motion';

import {
    DndContext,
    DragOverlay,
    PointerSensor,
    useSensor,
    useSensors,
    DragStartEvent,
    DragEndEvent,
    TouchSensor,
    closestCenter
} from "@dnd-kit/core"
import {
    arrayMove,
    SortableContext,
    rectSortingStrategy
} from "@dnd-kit/sortable"
import SortableItem from '../../shared/sortable/sortable';
import { useState } from 'react';


let voting_options: VotingOption[] = [
    {
        "id": 1,
        "name": "Heatran",
        "description": "electric",
        "image": "https://img.pokemondb.net/sprites/black-white/normal/heatran.png"
    },
    {
        "id": 2,
        "name": "Snivy",
        "description": "electric",
        "image": "https://img.pokemondb.net/sprites/black-white/normal/snivy.png"
    },
    {
        "id": 3,
        "name": "Arceus",
        "description": "electric",
        "image": "https://img.pokemondb.net/sprites/black-white/normal/arceus.png"
    }
]

function Voting() {

    const [items, setItems] = useState<VotingOption[]>(voting_options)

    // for drag overlay
    const [activeItem, setActiveItem] = useState<VotingOption>()

    // for input methods detection
    const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor))

    // triggered when dragging starts
    const handleDragStart = (event: DragStartEvent) => {
        const { active } = event
        setActiveItem(items.find((item) => item.id === active.id))
    }

    // triggered when dragging ends
    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event
        if (!over) return

        const activeItem = items.find((item) => item.id === active.id)
        const overItem = items.find((item) => item.id === over.id)

        if (!activeItem || !overItem) {
            return
        }

        const activeIndex = items.findIndex((item) => item.id === active.id)
        const overIndex = items.findIndex((item) => item.id === over.id)

        if (activeIndex !== overIndex) {
            setItems((prev) => arrayMove<VotingOption>(prev, activeIndex, overIndex))
        }
        setActiveItem(undefined)
    }

    const handleDragCancel = () => {
        setActiveItem(undefined)
    }

    return (
        <Box borderRadius={'4px'} background={'white'} boxShadow={'lg'} minWidth={'300px'} maxWidth={'400px'} height={'550px'} >
            <VStack alignItems={'left'} p={2}>
                <Box bgGradient='linear(to-r, #7797F0, #FF9EC7)' minHeight={'80px'} borderRadius={'4px'} p={2}>
                    <Text fontWeight={'bold'} color={'white'}>Simulation & Testing Dashboard</Text>
                    <Text fontSize={'xs'} color={'white'}>Total Members: 4</Text>
                    <Text fontSize={'xs'} color={'white'}>Category: Pokemon</Text>
                </Box>
                <Box>
                    <VStack alignItems={'left'}>
                        <Text fontSize={'xs'}>Your options for this round</Text>
                        <Divider />
                        <Text fontSize={'md'}>Arrange the list in your prefered order, the first item being your preferred item.</Text>
                    </VStack>
                </Box>

                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onDragCancel={handleDragCancel}
                >
                    <SortableContext items={items} strategy={rectSortingStrategy}>
                        {items.map((item) => (
                            <SortableItem key={item.id} item={item} />
                        ))}
                    </SortableContext>
                    <DragOverlay adjustScale style={{ transformOrigin: "0 0 " }}>
                        {activeItem ? <VotingCard item={activeItem} isDragging /> : null}
                    </DragOverlay>
                </DndContext>
                <Button w={'100%'} color={'white'} bg={'#964dff'}>Confirm List Order</Button>
            </VStack>
        </Box>
    )
}

export default Voting;