import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Question {
  id: number;
  question: string;
  options: string[];
  trollLevel: number[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Someone says crypto is a scam. You:",
    options: [
      "Ignore them, they're not ready",
      "Patiently explain blockchain tech",
      "Send them the most cursed meme ever",
      "Ask them to check the charts in 5 years",
    ],
    trollLevel: [95, 30, 100, 60],
  },
  {
    id: 2,
    question: "Your portfolio is down 50%. You:",
    options: [
      "Panic sell immediately",
      "Zoom out on the chart and HODL",
      "Post a meme about it online",
      "Contemplate life choices",
    ],
    trollLevel: [10, 50, 85, 40],
  },
  {
    id: 3,
    question: "What's your favorite type of market?",
    options: [
      "Bull runs with green everywhere",
      "Boring stable sideways trading",
      "Chaotic pump and dumps (the chaos!)",
      "Dead cat bounces are comedy",
    ],
    trollLevel: [50, 20, 95, 70],
  },
  {
    id: 4,
    question: "Your investment thesis for $TROLLFACE2:",
    options: [
      "Chart lines go up = good investment",
      "Thorough fundamental analysis",
      "The vibes are immaculate",
      "Community is stronger than diamonds",
    ],
    trollLevel: [40, 30, 100, 65],
  },
  {
    id: 5,
    question: "Discord announcement at 3 AM. You:",
    options: [
      "Continue sleeping like a normal person",
      "Wake up to check immediately",
      "Already have notifications on max",
      "Scheduled your alarm 3 seconds early",
    ],
    trollLevel: [20, 50, 85, 100],
  },
];

interface TrollTestProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const getTrollLevel = (avg: number): { level: string; color: string } => {
  if (avg >= 90) return { level: "LEGENDARY TROLL", color: "from-red-500 to-pink-500" };
  if (avg >= 75) return { level: "ELITE TROLL", color: "from-purple-500 to-pink-500" };
  if (avg >= 60) return { level: "EXPERIENCED TROLL", color: "from-purple-500 to-cyan-500" };
  if (avg >= 40) return { level: "CASUAL TROLL", color: "from-cyan-500 to-blue-500" };
  return { level: "NORMIE ALERT", color: "from-gray-500 to-slate-500" };
};

export function TrollTest({ isOpen, onOpenChange }: TrollTestProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (trollLevel: number) => {
    const newScores = [...scores, trollLevel];
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setScores([]);
    setShowResults(false);
  };

  const handleClose = () => {
    resetTest();
    onOpenChange(false);
  };

  const averageScore = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b) / scores.length) : 0;
  const { level, color } = getTrollLevel(averageScore);

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto glass-effect border-purple-500/30 backdrop-blur-xl">
        {!showResults ? (
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <DialogTitle className="text-2xl md:text-3xl font-bold">Troll Test</DialogTitle>
                <span className="text-xs md:text-sm font-semibold px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                  Question {currentQuestion + 1}/{questions.length}
                </span>
              </div>
              <DialogDescription className="text-base md:text-lg text-cyan-400">
                Discover your true troll level
              </DialogDescription>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden border border-white/20">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-all duration-500"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Current Question */}
            <div className="animate-fade-in">
              <h3 className="text-lg md:text-xl font-bold mb-6 text-foreground">
                {questions[currentQuestion].question}
              </h3>

              {/* Answer Options */}
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(questions[currentQuestion].trollLevel[index])}
                    className="w-full p-4 text-left group relative glass-effect backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1 animate-slide-up border-white/20 rounded-lg hover:bg-white/20"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-purple-400/50 group-hover:border-cyan-400 group-hover:bg-cyan-400/20 transition-all flex items-center justify-center mt-0.5 group-hover:scale-110">
                        <span className="text-xs font-bold group-hover:text-cyan-300">{String.fromCharCode(65 + index)}</span>
                      </div>
                      <span className="text-sm md:text-base group-hover:text-white transition-colors">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            {/* Results Header */}
            <div className="text-center space-y-4">
              <DialogTitle className="text-3xl md:text-4xl font-bold">Your Troll Level</DialogTitle>
              <div className={`text-5xl md:text-6xl font-black bg-gradient-to-r ${color} text-transparent bg-clip-text animate-float`}>
                {averageScore}%
              </div>
              <div className={`inline-block px-6 py-2 rounded-full font-bold text-white text-lg md:text-xl bg-gradient-to-r ${color} shadow-lg shadow-purple-500/30`}>
                {level}
              </div>
            </div>

            {/* Score Breakdown */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground mb-4">Question Breakdown:</h4>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {scores.map((score, index) => (
                  <div key={index} className="flex items-center justify-between p-3 glass-effect rounded-lg border border-white/10 group hover:border-purple-500/30 transition-all">
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Q{index + 1}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-white/10 rounded-full h-2 border border-white/20">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all"
                          style={{ width: `${score}%` }}
                        />
                      </div>
                      <span className="text-sm font-bold text-cyan-400 min-w-[3rem]">{score}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Results Message */}
            <div className="glass-effect rounded-lg p-6 border border-purple-500/20 space-y-3 text-center">
              {averageScore >= 90 && (
                <p className="text-base md:text-lg text-purple-300">
                  You are an absolute LEGEND! The crypto world bows before your trolling mastery! 🔥
                </p>
              )}
              {averageScore >= 75 && averageScore < 90 && (
                <p className="text-base md:text-lg text-pink-300">
                  Elite tier trolling energy detected! You belong in the hall of fame! 👑
                </p>
              )}
              {averageScore >= 60 && averageScore < 75 && (
                <p className="text-base md:text-lg text-cyan-300">
                  Solid troll game! You've got the skills, now go spread the chaos! 🚀
                </p>
              )}
              {averageScore >= 40 && averageScore < 60 && (
                <p className="text-base md:text-lg text-blue-300">
                  Not bad! You're on the path to trolling greatness. Keep practicing! 📈
                </p>
              )}
              {averageScore < 40 && (
                <p className="text-base md:text-lg text-slate-300">
                  Welcome to crypto! Don't worry, you'll catch the troll vibes soon enough! 💪
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-3 pt-4">
              <button
                onClick={resetTest}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden group"
              >
                <span className="relative z-10">Retake Test</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={handleClose}
                className="flex-1 px-6 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
