import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowLeft, Lock } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../lib/LanguageContext";
import { LanguageSelector } from "./LanguageSelector";

interface Achievement {
  id: string;
  title: string;
  description: string;
  emoji: string;
  requirement: number;
  unlocked: boolean;
}

interface AchievementsProps {
  onBack: () => void;
  itemsSorted: number;
  points: number;
}

export function Achievements({ onBack, itemsSorted, points }: AchievementsProps) {
  const { t } = useLanguage();
  
  const achievements: Achievement[] = [
    {
      id: "1",
      title: t.firstSteps,
      description: t.firstStepsDesc,
      emoji: "👶",
      requirement: 1,
      unlocked: itemsSorted >= 1,
    },
    {
      id: "2",
      title: t.gettingStarted,
      description: t.gettingStartedDesc,
      emoji: "🌟",
      requirement: 10,
      unlocked: itemsSorted >= 10,
    },
    {
      id: "3",
      title: t.ecoWarrior,
      description: t.ecoWarriorDesc,
      emoji: "⚔️",
      requirement: 50,
      unlocked: itemsSorted >= 50,
    },
    {
      id: "4",
      title: t.planetProtector,
      description: t.planetProtectorDesc,
      emoji: "🌍",
      requirement: 100,
      unlocked: itemsSorted >= 100,
    },
    {
      id: "5",
      title: t.pointMaster,
      description: t.pointMasterDesc,
      emoji: "💯",
      requirement: 100,
      unlocked: points >= 100,
    },
    {
      id: "6",
      title: t.superScorer,
      description: t.superScorerDesc,
      emoji: "🏆",
      requirement: 500,
      unlocked: points >= 500,
    },
    {
      id: "7",
      title: t.recyclingHero,
      description: t.recyclingHeroDesc,
      emoji: "🦸",
      requirement: 5,
      unlocked: false,
    },
    {
      id: "8",
      title: t.earthChampion,
      description: t.earthChampionDesc,
      emoji: "👑",
      requirement: 1000,
      unlocked: points >= 1000,
    },
  ];

  const unlockedCount = achievements.filter(a => a.unlocked).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-yellow-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button onClick={onBack} variant="outline" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            {t.back}
          </Button>
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <Badge className="bg-purple-600 px-4 py-2">
              {unlockedCount} / {achievements.length} {t.unlocked}
            </Badge>
          </div>
        </div>

        {/* Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <div className="text-6xl mb-4">🏆</div>
          <h2 className="text-purple-700 mb-2">{t.achievementsTitle}</h2>
          <p className="text-gray-600">{t.achievementsSubtitle}</p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card
                className={`p-6 transition-all ${
                  achievement.unlocked
                    ? "bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-yellow-400 shadow-lg"
                    : "bg-gray-100 border-2 border-gray-300 opacity-60"
                }`}
              >
                <div className="text-center">
                  <div className="relative inline-block mb-3">
                    <div className="text-5xl">{achievement.emoji}</div>
                    {!achievement.unlocked && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Lock className="w-8 h-8 text-gray-500" />
                      </div>
                    )}
                  </div>
                  <h3
                    className={
                      achievement.unlocked ? "text-orange-700" : "text-gray-600"
                    }
                  >
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {achievement.description}
                  </p>
                  {achievement.unlocked && (
                    <Badge className="mt-3 bg-green-600">{t.unlocked}! ✓</Badge>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Encouragement */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <Card className="p-6 bg-gradient-to-r from-green-200 to-blue-200 border-2 border-green-400 text-center">
            <p className="text-green-800">
              {t.achievementEncouragement}
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
