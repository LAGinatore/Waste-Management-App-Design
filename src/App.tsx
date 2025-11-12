import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { SortingGame } from "./components/SortingGame";
import { EducationHub } from "./components/EducationHub";
import { Achievements } from "./components/Achievements";
import { LanguageProvider } from "./lib/LanguageContext";

type Screen = "dashboard" | "game" | "education" | "achievements";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("dashboard");
  const [points, setPoints] = useState(0);
  const [itemsSorted, setItemsSorted] = useState(0);

  const level = Math.floor(points / 100) + 1;

  const handleScoreUpdate = (newPoints: number, correct: boolean) => {
    setPoints(prev => prev + newPoints);
    if (correct) {
      setItemsSorted(prev => prev + 1);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "dashboard":
        return (
          <Dashboard
            points={points}
            level={level}
            itemsSorted={itemsSorted}
            onStartGame={() => setCurrentScreen("game")}
            onViewEducation={() => setCurrentScreen("education")}
            onViewAchievements={() => setCurrentScreen("achievements")}
          />
        );
      case "game":
        return (
          <SortingGame
            onBack={() => setCurrentScreen("dashboard")}
            onScoreUpdate={handleScoreUpdate}
          />
        );
      case "education":
        return <EducationHub onBack={() => setCurrentScreen("dashboard")} />;
      case "achievements":
        return (
          <Achievements
            onBack={() => setCurrentScreen("dashboard")}
            itemsSorted={itemsSorted}
            points={points}
          />
        );
      default:
        return null;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen">{renderScreen()}</div>
    </LanguageProvider>
  );
}
