import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Sprout, Recycle, Trophy, Star } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../lib/LanguageContext";
import { LanguageSelector } from "./LanguageSelector";

interface DashboardProps {
  points: number;
  level: number;
  itemsSorted: number;
  onStartGame: () => void;
  onViewEducation: () => void;
  onViewAchievements: () => void;
}

export function Dashboard({ 
  points, 
  level, 
  itemsSorted, 
  onStartGame, 
  onViewEducation,
  onViewAchievements 
}: DashboardProps) {
  const { t } = useLanguage();
  const progressToNextLevel = ((points % 100) / 100) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-yellow-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Language Selector */}
        <div className="flex justify-end mb-4">
          <LanguageSelector />
        </div>

        {/* Header with mascot */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="inline-block text-6xl mb-4"
          >
            🌍
          </motion.div>
          <h1 className="text-green-700 mb-2">{t.appTitle}</h1>
          <p className="text-gray-600">{t.appSubtitle}</p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-6 bg-white/80 backdrop-blur border-2 border-green-300">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-200 rounded-full">
                  <Star className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.points}</p>
                  <p className="text-green-700">{points}</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 bg-white/80 backdrop-blur border-2 border-blue-300">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-200 rounded-full">
                  <Trophy className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.level}</p>
                  <p className="text-blue-700">{level}</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-6 bg-white/80 backdrop-blur border-2 border-yellow-300">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-yellow-200 rounded-full">
                  <Recycle className="w-6 h-6 text-yellow-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.itemsSorted}</p>
                  <p className="text-yellow-700">{itemsSorted}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Level Progress */}
        <Card className="p-6 mb-6 bg-white/80 backdrop-blur border-2 border-purple-300">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-700">{t.progressToLevel} {level + 1}</p>
            <Badge className="bg-purple-500">{progressToNextLevel.toFixed(0)}%</Badge>
          </div>
          <Progress value={progressToNextLevel} className="h-3" />
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStartGame}
            className="p-8 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <Recycle className="w-12 h-12 mx-auto mb-3" />
            <p>{t.playSortingGame}</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onViewEducation}
            className="p-8 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <Sprout className="w-12 h-12 mx-auto mb-3" />
            <p>{t.learnExplore}</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onViewAchievements}
            className="p-8 bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <Trophy className="w-12 h-12 mx-auto mb-3" />
            <p>{t.myAchievements}</p>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
