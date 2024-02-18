import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { HTMLAttributes } from "react"
import VotingCard from "../../features/voting/VotingCard"

type Props = {
  item: VotingOption
} & HTMLAttributes<HTMLDivElement>

const SortableItem = ({ item, ...props }: Props) => {
  const { attributes, isDragging, listeners, setNodeRef, transform, transition } = useSortable({
    id: item.id,
  })

  const styles = {
    transform: CSS.Transform.toString(transform),
    transition: transition || undefined,
  }

  return (
    <VotingCard
      item={item}
      ref={setNodeRef}
      style={styles}
      isOpacityEnabled={isDragging}
      {...props}
      {...attributes}
      {...listeners}
    />
  )
}

export default SortableItem
