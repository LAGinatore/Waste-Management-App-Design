import { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { WasteBin } from "./WasteBin";
import { WasteItem } from "./WasteItem";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Heart } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";
import { LanguageSelector } from "./LanguageSelector";

export interface WasteItemData {
  id: string;
  name: string;
  emoji: string;
  category: "recycling" | "compost" | "trash" | "glass";
}

interface SortingGameProps {
  onBack: () => void;
  onScoreUpdate: (points: number, correct: boolean) => void;
}

export function SortingGame({ onBack, onScoreUpdate }: SortingGameProps) {
  const { t } = useLanguage();
  const [currentItems, setCurrentItems] = useState<WasteItemData[]>([]);
  const [lives, setLives] = useState(3);
  const [roundScore, setRoundScore] = useState(0);
  const [feedback, setFeedback] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [gameOver, setGameOver] = useState(false);

  const getWasteItems = (): WasteItemData[] => [
    { id: "1", name: t.plasticBottle, emoji: "🍾", category: "recycling" },
    { id: "2", name: t.appleCore, emoji: "🍎", category: "compost" },
    { id: "3", name: t.paper, emoji: "📄", category: "recycling" },
    { id: "4", name: t.bananaPeel, emoji: "🍌", category: "compost" },
    { id: "5", name: t.glassBottle, emoji: "🍷", category: "glass" },
    { id: "6", name: t.chipBag, emoji: "🥔", category: "trash" },
    { id: "7", name: t.cardboardBox, emoji: "📦", category: "recycling" },
    { id: "8", name: t.foodScraps, emoji: "🥕", category: "compost" },
    { id: "9", name: t.jar, emoji: "🫙", category: "glass" },
    { id: "10", name: t.candyWrapper, emoji: "🍬", category: "trash" },
    { id: "11", name: t.newspaper, emoji: "📰", category: "recycling" },
    { id: "12", name: t.orangePeel, emoji: "🍊", category: "compost" },
  ];

  useEffect(() => {
    startNewRound();
  }, []);

  const startNewRound = () => {
    const items = getWasteItems();
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    setCurrentItems(shuffled.slice(0, 6));
    setLives(3);
    setRoundScore(0);
    setGameOver(false);
  };

  const handleDrop = (item: WasteItemData, category: string) => {
    // Prevent drops when game is over
    if (gameOver) return;
    
    const isCorrect = item.category === category;
    
    if (isCorrect) {
      setFeedback({ message: t.greatJob, type: "success" });
      setRoundScore(prev => prev + 10);
      onScoreUpdate(10, true);
      setCurrentItems(prev => prev.filter(i => i.id !== item.id));
      
      if (currentItems.length === 1) {
        setTimeout(() => {
          setFeedback({ message: t.roundComplete, type: "success" });
          setTimeout(startNewRound, 1500);
        }, 500);
      }
    } else {
      setFeedback({ message: t.oopsTryAgain, type: "error" });
      setLives(prev => {
        const newLives = prev - 1;
        if (newLives === 0) {
          setGameOver(true);
          setCurrentItems([]); // Clear items when game is over
        }
        return newLives;
      });
    }

    setTimeout(() => setFeedback(null), 2000);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-yellow-100 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <Button onClick={onBack} variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              {t.back}
            </Button>
            
            <div className="flex items-center gap-4">
              <LanguageSelector />
              <Badge className="bg-green-600 text-white px-4 py-2">
                {t.score}: {roundScore}
              </Badge>
              <div className="flex gap-1">
                {Array.from({ length: 3 }).map((_, i) => (
                  <motion.div
                    key={`heart-${i}`}
                    animate={i < lives ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <Heart
                      className={`w-6 h-6 transition-all duration-300 ${
                        i < lives ? "fill-red-500 text-red-500" : "fill-gray-300 text-gray-300"
                      }`}
                    />
                  </motion.div>
                ))}
              </div>
              <Badge variant="outline" className="bg-white">
                {t.lives}: {lives}
              </Badge>
            </div>
          </div>

          {/* Feedback */}
          <AnimatePresence>
            {feedback && (
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="mb-6"
              >
                <Card
                  className={`p-4 text-center ${
                    feedback.type === "success"
                      ? "bg-green-100 border-green-400"
                      : "bg-red-100 border-red-400"
                  }`}
                >
                  <p className={feedback.type === "success" ? "text-green-700" : "text-red-700"}>
                    {feedback.message}
                  </p>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Game Over */}
          {gameOver && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mb-6"
            >
              <Card className="p-8 text-center bg-white/90 backdrop-blur border-2 border-purple-400">
                <p className="text-purple-700 mb-4">{t.gameOver} {roundScore}</p>
                <Button onClick={startNewRound} className="bg-purple-600">
                  {t.tryAgain}
                </Button>
              </Card>
            </motion.div>
          )}

          {/* Instructions */}
          <Card className="p-4 mb-6 bg-white/80 backdrop-blur">
            <p className="text-center text-gray-700">
              {t.dragInstruction}
            </p>
          </Card>

          {/* Bins */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 ${gameOver ? 'opacity-50 pointer-events-none' : ''}`}>
            <WasteBin
              category="recycling"
              title={t.recycling}
              color="bg-green-500"
              emoji="♻️"
              onDrop={handleDrop}
            />
            <WasteBin
              category="compost"
              title={t.compost}
              color="bg-amber-600"
              emoji="🌱"
              onDrop={handleDrop}
            />
            <WasteBin
              category="glass"
              title={t.glass}
              color="bg-blue-500"
              emoji="🫙"
              onDrop={handleDrop}
            />
            <WasteBin
              category="trash"
              title={t.trash}
              color="bg-gray-500"
              emoji="🗑️"
              onDrop={handleDrop}
            />
          </div>

          {/* Items to Sort */}
          {!gameOver && currentItems.length > 0 && (
            <Card className="p-6 bg-white/80 backdrop-blur">
              <p className="text-gray-700 mb-4 text-center">{t.itemsToSort}</p>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {currentItems.map((item) => (
                  <WasteItem key={item.id} item={item} />
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>
    </DndProvider>
  );
}
