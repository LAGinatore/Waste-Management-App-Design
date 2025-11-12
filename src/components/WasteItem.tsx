import { useDrag } from "react-dnd";
import { Card } from "./ui/card";
import { motion } from "motion/react";
import type { WasteItemData } from "./SortingGame";

interface WasteItemProps {
  item: WasteItemData;
}

export function WasteItem({ item }: WasteItemProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "waste-item",
    item: item,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <motion.div
      ref={drag}
      whileHover={{ scale: 1.1 }}
      className={`cursor-grab active:cursor-grabbing ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <Card className="p-4 bg-white hover:shadow-lg transition-shadow border-2 border-gray-200">
        <div className="text-center">
          <div className="text-4xl mb-2">{item.emoji}</div>
          <p className="text-xs text-gray-600">{item.name}</p>
        </div>
      </Card>
    </motion.div>
  );
}
