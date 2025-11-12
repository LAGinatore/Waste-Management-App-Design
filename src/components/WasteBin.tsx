import { useDrop } from "react-dnd";
import { Card } from "./ui/card";
import { motion } from "motion/react";
import type { WasteItemData } from "./SortingGame";

interface WasteBinProps {
  category: string;
  title: string;
  color: string;
  emoji: string;
  onDrop: (item: WasteItemData, category: string) => void;
}

export function WasteBin({ category, title, color, emoji, onDrop }: WasteBinProps) {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: "waste-item",
    drop: (item: WasteItemData) => {
      onDrop(item, category);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <motion.div
      ref={drop}
      whileHover={{ scale: 1.05 }}
      className="relative"
    >
      <Card
        className={`p-6 h-40 flex flex-col items-center justify-center transition-all ${
          isOver && canDrop
            ? "ring-4 ring-yellow-400 scale-105"
            : canDrop
            ? "ring-2 ring-gray-300"
            : ""
        } ${color} text-white`}
      >
        <div className="text-4xl mb-2">{emoji}</div>
        <p>{title}</p>
      </Card>
    </motion.div>
  );
}
