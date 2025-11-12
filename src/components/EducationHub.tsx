import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ArrowLeft, Recycle, Leaf, Trash2, Wine } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../lib/LanguageContext";
import { LanguageSelector } from "./LanguageSelector";

interface EducationHubProps {
  onBack: () => void;
}

export function EducationHub({ onBack }: EducationHubProps) {
  const { t } = useLanguage();
  
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
            <h2 className="text-green-700">{t.learnAboutWaste}</h2>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="recycling" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="recycling">♻️ {t.recycling}</TabsTrigger>
            <TabsTrigger value="compost">🌱 {t.compost}</TabsTrigger>
            <TabsTrigger value="glass">🫙 {t.glass}</TabsTrigger>
            <TabsTrigger value="trash">🗑️ {t.trash}</TabsTrigger>
          </TabsList>

          <TabsContent value="recycling">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-6 bg-white/90 backdrop-blur mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-green-200 rounded-full">
                    <Recycle className="w-8 h-8 text-green-700" />
                  </div>
                  <h3 className="text-green-700">{t.recyclingBin}</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  {t.recyclingDesc}
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 mb-2">{t.recyclingItems}</p>
                  <ul className="space-y-2 text-gray-700">
                    {t.recyclingList.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Card>
              <Card className="p-6 bg-green-100 border-green-400">
                <p className="text-green-800 text-center">
                  {t.recyclingFact}
                </p>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="compost">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-6 bg-white/90 backdrop-blur mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-amber-200 rounded-full">
                    <Leaf className="w-8 h-8 text-amber-700" />
                  </div>
                  <h3 className="text-amber-700">{t.compostBin}</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  {t.compostDesc}
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-amber-800 mb-2">{t.compostItems}</p>
                  <ul className="space-y-2 text-gray-700">
                    {t.compostList.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Card>
              <Card className="p-6 bg-amber-100 border-amber-400">
                <p className="text-amber-800 text-center">
                  {t.compostFact}
                </p>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="glass">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-6 bg-white/90 backdrop-blur mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-200 rounded-full">
                    <Wine className="w-8 h-8 text-blue-700" />
                  </div>
                  <h3 className="text-blue-700">{t.glassBin}</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  {t.glassDesc}
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 mb-2">{t.glassItems}</p>
                  <ul className="space-y-2 text-gray-700">
                    {t.glassList.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Card>
              <Card className="p-6 bg-blue-100 border-blue-400">
                <p className="text-blue-800 text-center">
                  {t.glassFact}
                </p>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="trash">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-6 bg-white/90 backdrop-blur mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gray-200 rounded-full">
                    <Trash2 className="w-8 h-8 text-gray-700" />
                  </div>
                  <h3 className="text-gray-700">{t.trashBin}</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  {t.trashDesc}
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-800 mb-2">{t.trashItems}</p>
                  <ul className="space-y-2 text-gray-700">
                    {t.trashList.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Card>
              <Card className="p-6 bg-gray-100 border-gray-400">
                <p className="text-gray-800 text-center">
                  {t.trashTip}
                </p>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Tips Section */}
        <Card className="mt-6 p-6 bg-gradient-to-r from-purple-100 to-pink-100 border-purple-300">
          <h3 className="text-purple-700 mb-4">{t.ecoTips}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <p className="text-purple-700">{t.reduce}</p>
                <p className="text-sm text-gray-600">{t.reduceDesc}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">♻️</span>
              <div>
                <p className="text-purple-700">{t.reuse}</p>
                <p className="text-sm text-gray-600">{t.reuseDesc}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🌍</span>
              <div>
                <p className="text-purple-700">{t.recycle}</p>
                <p className="text-sm text-gray-600">{t.recycleDesc}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🌱</span>
              <div>
                <p className="text-purple-700">{t.compostTip}</p>
                <p className="text-sm text-gray-600">{t.compostTipDesc}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
