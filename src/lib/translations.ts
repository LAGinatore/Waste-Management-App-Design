export type Language = 'en' | 'ar' | 'fr';

export const translations = {
  en: {
    // Dashboard
    appTitle: "Eco Heroes",
    appSubtitle: "Save the planet, one item at a time!",
    points: "Points",
    level: "Level",
    itemsSorted: "Items Sorted",
    progressToLevel: "Progress to Level",
    playSortingGame: "Play Sorting Game",
    learnExplore: "Learn & Explore",
    myAchievements: "My Achievements",
    
    // Sorting Game
    back: "Back",
    score: "Score",
    lives: "Lives",
    dragInstruction: "Drag each item to the correct bin! 🎯",
    itemsToSort: "Items to Sort",
    gameOver: "Game Over! Final Score:",
    tryAgain: "Try Again",
    roundComplete: "Round Complete! 🌟",
    greatJob: "Great job! 🎉",
    oopsTryAgain: "Oops! Try again! 💪",
    
    // Bins
    recycling: "Recycling",
    compost: "Compost",
    glass: "Glass",
    trash: "Trash",
    
    // Waste Items
    plasticBottle: "Plastic Bottle",
    appleCore: "Apple Core",
    paper: "Paper",
    bananaPeel: "Banana Peel",
    glassBottle: "Glass Bottle",
    chipBag: "Chip Bag",
    cardboardBox: "Cardboard Box",
    foodScraps: "Food Scraps",
    jar: "Jar",
    candyWrapper: "Candy Wrapper",
    newspaper: "Newspaper",
    orangePeel: "Orange Peel",
    
    // Education Hub
    learnAboutWaste: "Learn About Waste",
    recyclingBin: "Recycling Bin",
    compostBin: "Compost Bin",
    glassBin: "Glass Bin",
    trashBin: "Trash Bin",
    
    recyclingDesc: "Recycling helps us turn old items into new things! This saves energy and protects our planet.",
    recyclingItems: "What goes in the recycling bin:",
    recyclingList: [
      "📄 Paper and cardboard",
      "🍾 Plastic bottles and containers",
      "📦 Clean cardboard boxes",
      "📰 Newspapers and magazines",
      "🥫 Metal cans"
    ],
    recyclingFact: "🌟 Fun Fact: Recycling one aluminum can saves enough energy to power a TV for 3 hours!",
    
    compostDesc: "Food scraps can become rich soil for plants! Composting returns nutrients to the earth.",
    compostItems: "What goes in the compost bin:",
    compostList: [
      "🍎 Fruit and vegetable scraps",
      "🍌 Fruit peels",
      "🥕 Food leftovers (no meat)",
      "☕ Coffee grounds and tea bags",
      "🌿 Yard waste and leaves"
    ],
    compostFact: "🌟 Fun Fact: Compost helps plants grow strong and healthy without chemical fertilizers!",
    
    glassDesc: "Glass can be recycled forever! It never loses its quality, making it super eco-friendly.",
    glassItems: "What goes in the glass bin:",
    glassList: [
      "🍷 Glass bottles",
      "🫙 Glass jars",
      "🍾 Beverage bottles",
      "💊 Medicine bottles (empty)"
    ],
    glassFact: "🌟 Fun Fact: Glass can be recycled endlessly without losing quality!",
    
    trashDesc: "Some items can't be recycled or composted. We should try to reduce trash as much as possible!",
    trashItems: "What goes in the trash bin:",
    trashList: [
      "🍬 Candy and chip wrappers",
      "🧴 Dirty containers",
      "🎈 Plastic bags (some can be recycled at stores)",
      "🍕 Pizza boxes with grease"
    ],
    trashTip: "🌟 Tip: Try to reduce trash by choosing reusable items instead of disposable ones!",
    
    ecoTips: "Eco-Friendly Tips for Families",
    reduce: "Reduce",
    reduceDesc: "Use less and choose reusable items",
    reuse: "Reuse",
    reuseDesc: "Find new uses for old items",
    recycle: "Recycle",
    recycleDesc: "Sort waste properly",
    compostTip: "Compost",
    compostTipDesc: "Turn food scraps into soil",
    
    // Achievements
    unlocked: "Unlocked",
    achievementsTitle: "Your Achievements",
    achievementsSubtitle: "Collect badges as you save the planet!",
    achievementEncouragement: "Keep sorting waste to unlock more achievements! Every item you sort correctly helps save our planet! 🌍💚",
    
    firstSteps: "First Steps",
    firstStepsDesc: "Sort your first item",
    gettingStarted: "Getting Started",
    gettingStartedDesc: "Sort 10 items correctly",
    ecoWarrior: "Eco Warrior",
    ecoWarriorDesc: "Sort 50 items correctly",
    planetProtector: "Planet Protector",
    planetProtectorDesc: "Sort 100 items correctly",
    pointMaster: "Point Master",
    pointMasterDesc: "Earn 100 points",
    superScorer: "Super Scorer",
    superScorerDesc: "Earn 500 points",
    recyclingHero: "Recycling Hero",
    recyclingHeroDesc: "Complete 5 perfect rounds",
    earthChampion: "Earth Champion",
    earthChampionDesc: "Earn 1000 points",
  },
  
  ar: {
    // لوحة التحكم
    appTitle: "أبطال البيئة",
    appSubtitle: "احم الكوكب، قطعة واحدة في كل مرة!",
    points: "النقاط",
    level: "المستوى",
    itemsSorted: "العناصر المرتبة",
    progressToLevel: "التقدم للمستوى",
    playSortingGame: "ابدأ لعبة الفرز",
    learnExplore: "تعلم واستكشف",
    myAchievements: "إنجازاتي",
    
    // لعبة الفرز
    back: "رجوع",
    score: "النتيجة",
    lives: "الحياة",
    dragInstruction: "اسحب كل عنصر إلى السلة الصحيحة! 🎯",
    itemsToSort: "العناصر للفرز",
    gameOver: "انتهت اللعبة! النتيجة النهائية:",
    tryAgain: "حاول مرة أخرى",
    roundComplete: "اكتملت الجولة! 🌟",
    greatJob: "أحسنت! 🎉",
    oopsTryAgain: "عفواً! حاول مرة أخرى! 💪",
    
    // السلال
    recycling: "إعادة التدوير",
    compost: "السماد العضوي",
    glass: "الزجاج",
    trash: "القمامة",
    
    // عناصر النفايات
    plasticBottle: "زجاجة بلاستيك",
    appleCore: "قلب تفاحة",
    paper: "ورق",
    bananaPeel: "قشر موز",
    glassBottle: "زجاجة زجاج",
    chipBag: "كيس رقائق",
    cardboardBox: "صندوق كرتون",
    foodScraps: "بقايا طعام",
    jar: "جرة",
    candyWrapper: "غلاف حلوى",
    newspaper: "جريدة",
    orangePeel: "قشر برتقال",
    
    // مركز التعليم
    learnAboutWaste: "تعلم عن النفايات",
    recyclingBin: "سلة إعادة التدوير",
    compostBin: "سلة السماد العضوي",
    glassBin: "سلة الزجاج",
    trashBin: "سلة القمامة",
    
    recyclingDesc: "إعادة التدوير تساعدنا على تحويل الأشياء القديمة إلى أشياء جديدة! هذا يوفر الطاقة ويحمي كوكبنا.",
    recyclingItems: "ما يوضع في سلة إعادة التدوير:",
    recyclingList: [
      "📄 الورق والكرتون",
      "🍾 الزجاجات والحاويات البلاستيكية",
      "📦 صناديق الكرتون النظيفة",
      "📰 الجرائد والمجلات",
      "🥫 العلب المعدنية"
    ],
    recyclingFact: "🌟 حقيقة ممتعة: إعادة تدوير علبة ألومنيوم واحدة توفر طاقة كافية لتشغيل تلفاز لمدة 3 ساعات!",
    
    compostDesc: "يمكن لبقايا الطعام أن تصبح تربة غنية للنباتات! السماد العضوي يعيد العناصر الغذائية إلى الأرض.",
    compostItems: "ما يوضع في سلة السماد العضوي:",
    compostList: [
      "🍎 بقايا الفواكه والخضروات",
      "🍌 قشور الفواكه",
      "🥕 بقايا الطعام (بدون لحوم)",
      "☕ بواقي القهوة وأكياس الشاي",
      "🌿 نفايات الحديقة والأوراق"
    ],
    compostFact: "🌟 حقيقة ممتعة: السماد العضوي يساعد النباتات على النمو قوية وصحية بدون أسمدة كيميائية!",
    
    glassDesc: "يمكن إعادة تدوير الزجاج إلى الأبد! لا يفقد جودته أبداً، مما يجعله صديقاً للبيئة للغاية.",
    glassItems: "ما يوضع في سلة الزجاج:",
    glassList: [
      "🍷 زجاجات زجاجية",
      "🫙 جرار زجاجية",
      "🍾 زجاجات المشروبات",
      "💊 زجاجات الأدوية (فارغة)"
    ],
    glassFact: "🌟 حقيقة ممتعة: يمكن إعادة تدوير الزجاج بلا نهاية دون فقدان الجودة!",
    
    trashDesc: "بعض الأشياء لا يمكن إعادة تدويرها أو تحويلها لسماد. يجب أن نحاول تقليل القمامة قدر الإمكان!",
    trashItems: "ما يوضع في سلة القمامة:",
    trashList: [
      "🍬 أغلفة الحلوى والرقائق",
      "🧴 الحاويات المتسخة",
      "🎈 الأكياس البلاستيكية (يمكن إعادة تدوير بعضها في المتاجر)",
      "🍕 صناديق البيتزا الدهنية"
    ],
    trashTip: "🌟 نصيحة: حاول تقليل القمامة باختيار الأشياء القابلة لإعادة الاستخدام بدلاً من الأشياء التي تستخدم لمرة واحدة!",
    
    ecoTips: "نصائح صديقة للبيئة للعائلات",
    reduce: "قلل",
    reduceDesc: "استخدم أقل واختر الأشياء القابلة لإعادة الاستخدام",
    reuse: "أعد الاستخدام",
    reuseDesc: "ابحث عن استخدامات جديدة للأشياء القديمة",
    recycle: "أعد التدوير",
    recycleDesc: "افرز النفايات بشكل صحيح",
    compostTip: "السماد العضوي",
    compostTipDesc: "حول بقايا الطعام إلى تربة",
    
    // الإنجازات
    unlocked: "تم فتحه",
    achievementsTitle: "إنجازاتك",
    achievementsSubtitle: "اجمع الشارات وأنت تنقذ الكوكب!",
    achievementEncouragement: "استمر في فرز النفايات لفتح المزيد من الإنجازات! كل عنصر تفرزه بشكل صحيح يساعد في إنقاذ كوكبنا! 🌍💚",
    
    firstSteps: "الخطوات الأولى",
    firstStepsDesc: "افرز عنصرك الأول",
    gettingStarted: "البداية",
    gettingStartedDesc: "افرز 10 عناصر بشكل صحيح",
    ecoWarrior: "محارب البيئة",
    ecoWarriorDesc: "افرز 50 عنصراً بشكل صحيح",
    planetProtector: "حامي الكوكب",
    planetProtectorDesc: "افرز 100 عنصر بشكل صحيح",
    pointMaster: "سيد النقاط",
    pointMasterDesc: "احصل على 100 نقطة",
    superScorer: "المسجل الخارق",
    superScorerDesc: "احصل على 500 نقطة",
    recyclingHero: "بطل إعادة التدوير",
    recyclingHeroDesc: "أكمل 5 جولات كاملة",
    earthChampion: "بطل الأرض",
    earthChampionDesc: "احصل على 1000 نقطة",
  },
  
  fr: {
    // Tableau de bord
    appTitle: "Éco Héros",
    appSubtitle: "Sauvez la planète, un objet à la fois!",
    points: "Points",
    level: "Niveau",
    itemsSorted: "Objets Triés",
    progressToLevel: "Progression au Niveau",
    playSortingGame: "Jouer au Tri",
    learnExplore: "Apprendre & Explorer",
    myAchievements: "Mes Succès",
    
    // Jeu de tri
    back: "Retour",
    score: "Score",
    lives: "Vies",
    dragInstruction: "Faites glisser chaque objet dans la bonne poubelle! 🎯",
    itemsToSort: "Objets à Trier",
    gameOver: "Jeu Terminé! Score Final:",
    tryAgain: "Réessayer",
    roundComplete: "Manche Terminée! 🌟",
    greatJob: "Excellent travail! 🎉",
    oopsTryAgain: "Oups! Réessayez! 💪",
    
    // Poubelles
    recycling: "Recyclage",
    compost: "Compost",
    glass: "Verre",
    trash: "Déchets",
    
    // Éléments de déchets
    plasticBottle: "Bouteille Plastique",
    appleCore: "Trognon de Pomme",
    paper: "Papier",
    bananaPeel: "Peau de Banane",
    glassBottle: "Bouteille en Verre",
    chipBag: "Sac de Chips",
    cardboardBox: "Boîte en Carton",
    foodScraps: "Restes de Nourriture",
    jar: "Bocal",
    candyWrapper: "Emballage de Bonbon",
    newspaper: "Journal",
    orangePeel: "Peau d'Orange",
    
    // Centre d'éducation
    learnAboutWaste: "Apprendre sur les Déchets",
    recyclingBin: "Poubelle de Recyclage",
    compostBin: "Poubelle à Compost",
    glassBin: "Poubelle à Verre",
    trashBin: "Poubelle à Déchets",
    
    recyclingDesc: "Le recyclage nous aide à transformer de vieux objets en nouveaux! Cela économise de l'énergie et protège notre planète.",
    recyclingItems: "Ce qui va dans la poubelle de recyclage:",
    recyclingList: [
      "📄 Papier et carton",
      "🍾 Bouteilles et contenants en plastique",
      "📦 Boîtes en carton propres",
      "📰 Journaux et magazines",
      "🥫 Boîtes de conserve en métal"
    ],
    recyclingFact: "🌟 Fait Amusant: Recycler une canette en aluminium économise assez d'énergie pour alimenter une télévision pendant 3 heures!",
    
    compostDesc: "Les restes de nourriture peuvent devenir un sol riche pour les plantes! Le compostage retourne les nutriments à la terre.",
    compostItems: "Ce qui va dans la poubelle à compost:",
    compostList: [
      "🍎 Restes de fruits et légumes",
      "🍌 Peaux de fruits",
      "🥕 Restes de nourriture (pas de viande)",
      "☕ Marc de café et sachets de thé",
      "🌿 Déchets de jardin et feuilles"
    ],
    compostFact: "🌟 Fait Amusant: Le compost aide les plantes à pousser fortes et en bonne santé sans engrais chimiques!",
    
    glassDesc: "Le verre peut être recyclé pour toujours! Il ne perd jamais sa qualité, ce qui le rend super écologique.",
    glassItems: "Ce qui va dans la poubelle à verre:",
    glassList: [
      "🍷 Bouteilles en verre",
      "🫙 Bocaux en verre",
      "🍾 Bouteilles de boissons",
      "💊 Bouteilles de médicaments (vides)"
    ],
    glassFact: "🌟 Fait Amusant: Le verre peut être recyclé indéfiniment sans perdre de qualité!",
    
    trashDesc: "Certains objets ne peuvent pas être recyclés ou compostés. Nous devons essayer de réduire les déchets autant que possible!",
    trashItems: "Ce qui va dans la poubelle à déchets:",
    trashList: [
      "🍬 Emballages de bonbons et de chips",
      "🧴 Contenants sales",
      "🎈 Sacs en plastique (certains peuvent être recyclés en magasin)",
      "🍕 Boîtes à pizza graisseuses"
    ],
    trashTip: "🌟 Conseil: Essayez de réduire les déchets en choisissant des objets réutilisables plutôt que jetables!",
    
    ecoTips: "Conseils Écologiques pour les Familles",
    reduce: "Réduire",
    reduceDesc: "Utilisez moins et choisissez des objets réutilisables",
    reuse: "Réutiliser",
    reuseDesc: "Trouvez de nouvelles utilisations pour les vieux objets",
    recycle: "Recycler",
    recycleDesc: "Triez les déchets correctement",
    compostTip: "Composter",
    compostTipDesc: "Transformez les restes de nourriture en sol",
    
    // Succès
    unlocked: "Débloqué",
    achievementsTitle: "Vos Succès",
    achievementsSubtitle: "Collectez des badges en sauvant la planète!",
    achievementEncouragement: "Continuez à trier les déchets pour débloquer plus de succès! Chaque objet que vous triez correctement aide à sauver notre planète! 🌍💚",
    
    firstSteps: "Premiers Pas",
    firstStepsDesc: "Triez votre premier objet",
    gettingStarted: "Démarrage",
    gettingStartedDesc: "Triez 10 objets correctement",
    ecoWarrior: "Guerrier Écologique",
    ecoWarriorDesc: "Triez 50 objets correctement",
    planetProtector: "Protecteur de Planète",
    planetProtectorDesc: "Triez 100 objets correctement",
    pointMaster: "Maître des Points",
    pointMasterDesc: "Gagnez 100 points",
    superScorer: "Super Marqueur",
    superScorerDesc: "Gagnez 500 points",
    recyclingHero: "Héros du Recyclage",
    recyclingHeroDesc: "Complétez 5 manches parfaites",
    earthChampion: "Champion de la Terre",
    earthChampionDesc: "Gagnez 1000 points",
  }
};
