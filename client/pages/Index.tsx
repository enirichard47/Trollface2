import { useState } from "react";
import { TrollTest } from "@/components/TrollTest";

export default function Index() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [hoveredRoadmap, setHoveredRoadmap] = useState<string | null>(null);
  const [isTrollTestOpen, setIsTrollTestOpen] = useState(false);

  const handleCopyCA = () => {
    const ca = "6Fvp7EhQZ9rowiDc212k2ySC4nZEPs2nyfLr8ZoxYJN5";
    navigator.clipboard.writeText(ca);
  };

  const roadmapItems = [
    {
      id: "q4-2025",
      quarter: "Q4 2025",
      title: "Launch & Troll Influencers",
      description: "Fair launch on Solana. Community building. Make influencers rage quit Twitter.",
      status: "IN PROGRESS",
    },
    {
      id: "q1-2026",
      quarter: "Q1 2026",
      title: "NFT Drop",
      description: "Limited edition Trollface variants. Each one more cursed than the last.",
      status: "UPCOMING",
    },
    {
      id: "q2-2026",
      quarter: "Q2 2026",
      title: "CEX Listings",
      description: "Major exchange listings. Troll goes mainstream. Prepare for chaos.",
      status: "UPCOMING",
    },
    {
      id: "q3-2026",
      quarter: "Q3 2026",
      title: "World Domination",
      description: "Moon landing confirmed. Or at least that's what we're aiming for.",
      status: "UPCOMING",
    },
  ];

  const distributionData = [
    { label: "Liquidity", percentage: 50, color: "from-purple-500 to-pink-500" },
    { label: "Marketing", percentage: 20, color: "from-cyan-500 to-blue-500" },
    { label: "Community Rewards", percentage: 20, color: "from-green-500 to-emerald-500" },
    { label: "Dev (Locked)", percentage: 10, color: "from-orange-500 to-red-500" },
  ];

  return (
    <div className="min-h-screen gradient-background text-foreground">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-background/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F3dffce91ce63492db4fc785a21f16f5e%2F4ad910ba81da4490994926ca0ee51368?format=webp&width=800"
              alt="Trollface"
              className="w-10 h-10 animate-float hover:animate-bounce"
            />
            <div className="font-bold text-xl bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">
              $TROLLFACE2
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm items-center">
            <a href="#about" className="nav-link group">
              About
            </a>
            <a href="#tokenomics" className="nav-link group">
              Tokenomics
            </a>
            <a href="#howto" className="nav-link group">
              How to Buy
            </a>
            <a href="#community" className="nav-link group">
              Community
            </a>
            <a href="#roadmap" className="nav-link group">
              Roadmap
            </a>
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden group">
              <span className="relative z-10">Buy Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4">
        {/* Animated background gradients */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/40 rounded-full blur-3xl animate-blob animate-morph"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/40 rounded-full blur-3xl animate-blob animate-spin-wild" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-blob animate-pulse-wild" style={{ animationDelay: "4s" }}></div>
          <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-purple-600/25 rounded-full blur-3xl animate-blob animate-bounce-wild" style={{ animationDelay: "6s" }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl animate-float animate-stretch" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text animate-gradient-flow animate-bounce-wild" style={{ animationDuration: "4s" }}>
                    Trollface2
                  </span>
                </h1>
                <p className="text-2xl text-cyan-400 font-bold animate-slide-in-from-left animate-pulse-wild" style={{ animationDuration: "3s" }}>
                  The Next Evolution in Meme Tokens
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: "⚡", title: "Fair Launch", desc: "No presale, no team allocation. Just pure community power.", delay: "0" },
                  { icon: "🔥", title: "Liquidity Burned", desc: "Zero rug pull risk. Your investment is protected.", delay: "0.1s" },
                  { icon: "🚀", title: "Community Driven", desc: "Governed by holders. Your voice matters.", delay: "0.2s" },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-3 animate-slide-up" style={{ animationDelay: item.delay }}>
                    <div className="flex items-start gap-3 group hover:translate-x-3 transition-all duration-300 hover:scale-105">
                      <span className="text-3xl group-hover:animate-spin-wild group-hover:inline-block" style={{ animationDuration: "0.8s" }}>{item.icon}</span>
                      <div>
                        <p className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-110 active:scale-95 relative overflow-hidden group hover:animate-pulse-wild">
                  <span className="relative z-10">Buy Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-spin-wild"></div>
                </button>
                <button className="px-8 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 hover:scale-110 hover:animate-bounce-wild group">
                  <a href="#about" className="block">
                    Learn Story
                  </a>
                </button>
              </div>
            </div>

            {/* Right Side - Troll Face Image */}
            <div className="flex justify-center animate-float group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-2xl opacity-30 animate-glow-enhance group-hover:animate-rainbow-glow"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-all duration-300 animate-spin-wild"></div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F3dffce91ce63492db4fc785a21f16f5e%2F4ad910ba81da4490994926ca0ee51368?format=webp&width=800"
                  alt="Trollface"
                  className="w-full max-w-md drop-shadow-2xl relative z-10 hover:drop-shadow-none transition-all duration-300 group-hover:animate-jello group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 gradient-background bg-gradient-to-b from-transparent via-purple-900/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {/* Header */}
            <div className="text-center space-y-4 animate-slide-up">
              <div className="space-y-2">
                <p className="text-lg font-bold text-primary">Problem?U Mad?</p>
                <h2 className="text-5xl md:text-6xl font-bold">About The Troll</h2>
              </div>
              <p className="text-2xl text-cyan-400 font-semibold max-w-3xl mx-auto">
                Don't get rekt—get trolled.
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Story */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-primary">The Legend Returns</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    $TROLL trolled the market. $TROLLFACE2 trolls your portfolio—in a good way. This isn't just a sequel; it's an evolution. Where $TROLL left memes, $TROLLFACE2 leaves moonprints.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-primary">Built Different</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    No rugs here, just troll bridges to cross. Community-driven, liquidity burned, and ready to troll the crypto world one meme at a time. Are you ready to join the chaos?
                  </p>
                </div>
              </div>

              {/* Right Side - Token Info */}
            <div className="space-y-6 animate-slide-in-from-right">
              <div className="glass-effect backdrop-blur-xl p-8 space-y-6 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:bg-white/15">
                  {[
                    { label: "Total Supply", value: "1B Tokens", icon: "📊" },
                    { label: "Tax", value: "0%", icon: "✨" },
                    { label: "Liquidity", value: "BURNED", icon: "🔥" },
                    { label: "Governance", value: "Community", icon: "🤝" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 pb-6 border-b border-white/10 last:border-b-0 last:pb-0 group hover:translate-x-2 transition-all duration-300 hover:bg-white/5 px-2 rounded-lg -mx-2">
                      <div className="text-3xl group-hover:scale-125 group-hover:animate-bounce transition-all duration-300 origin-left">{item.icon}</div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1 group-hover:text-cyan-400 transition-colors">{item.label}</p>
                        <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text group-hover:from-cyan-400 group-hover:to-purple-400 transition-all">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Highlight Box */}
                <div className="glass-effect backdrop-blur-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-cyan-400/30 hover:bg-white/10 animate-fade-in">
                  <p className="text-muted-foreground italic group-hover:text-cyan-300 transition-colors duration-300 group-hover:scale-105">
                    "This is more than a token. This is a movement. This is $TROLLFACE2."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 px-4 bg-gradient-to-b from-cyan-900/20 via-purple-900/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tokenomics</h2>
            <p className="text-xl text-muted-foreground">Fair launch. No presale. No team allocation. Pure chaos.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Distribution Chart */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle cx="100" cy="100" r="90" fill="none" stroke="hsl(var(--border))" strokeWidth="2" />
                  {distributionData.reduce((acc, item, index) => {
                    const offset = acc.offset;
                    const circumference = 2 * Math.PI * 90;
                    const strokeDasharray = (item.percentage / 100) * circumference;
                    const colors = [
                      "hsl(280 85% 55%)",
                      "hsl(185 100% 50%)",
                      "hsl(134 70% 50%)",
                      "hsl(38 92% 50%)",
                    ];

                    return {
                      elements: [
                        ...acc.elements,
                        <circle
                          key={index}
                          cx="100"
                          cy="100"
                          r="90"
                          fill="none"
                          stroke={colors[index]}
                          strokeWidth="18"
                          strokeDasharray={strokeDasharray}
                          strokeDashoffset={-offset}
                          strokeLinecap="round"
                          className="transition-all duration-300"
                        />,
                      ],
                      offset: offset + strokeDasharray,
                    };
                  }, { elements: [], offset: 0 }).elements}
                  <text x="100" y="95" textAnchor="middle" className="text-2xl font-bold fill-foreground">
                    1B
                  </text>
                  <text x="100" y="115" textAnchor="middle" className="text-sm fill-muted-foreground">
                    Tokens
                  </text>
                </svg>
              </div>
            </div>

            {/* Distribution Details */}
            <div className="space-y-6">
              {distributionData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-lg">{item.label}</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
              <div className="pt-6 border-t border-border">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Total Supply:</span> 1,000,000,000 $TROLLFACE2
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section id="howto" className="py-20 px-4 gradient-background bg-gradient-to-b from-purple-900/20 via-transparent to-cyan-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How to Buy</h2>
            <p className="text-xl text-muted-foreground">Join the chaos in 4 simple steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              {
                step: 1,
                title: "Setup Your Wallet",
                description: "Download Phantom wallet from phantom.app and create a new wallet. Fund it with SOL from any exchange.",
              },
              {
                step: 2,
                title: "Swap on Jupiter/Raydium",
                description: "Go to Jupiter or Raydium DEX. Connect your Phantom wallet and select SOL to swap.",
              },
              {
                step: 3,
                title: "Paste Contract Address",
                description: "Paste the $TROLLFACE2 CA and swap!",
              },
              {
                step: 4,
                title: "Join The Troll Army",
                description: "Congratulations! You are now a certified troll. HODL and spread the chaos!",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative animate-slide-up hover:animate-bounce-wild"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onMouseEnter={() => setHoveredStep(idx)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-spin-wild" />
                <div className="relative glass-effect backdrop-blur-xl p-8 h-full group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/30 group-hover:-translate-y-4 group-hover:bg-white/15 group-hover:animate-pulse-wild">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-xl font-bold text-white mb-6 group-hover:scale-150 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/50 group-hover:animate-flip">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors duration-300">{item.title}</h3>
                  <p className="text-muted-foreground group-hover:text-gray-200 transition-colors duration-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contract Address */}
          <div className="glass-effect backdrop-blur-xl p-8 text-center group hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/30 hover:bg-white/15 animate-fade-in">
            <p className="text-sm text-muted-foreground mb-3 group-hover:text-cyan-400 transition-colors duration-300 font-semibold">CONTRACT ADDRESS</p>
            <div className="flex items-center justify-center gap-4">
              <code className="text-sm md:text-base font-mono glass-effect backdrop-blur-sm px-4 py-2 group-hover:border-primary/50 transition-all duration-300">
                6Fvp7EhQZ9rowiDc212k2ySC4nZEPs2nyfLr8ZoxYJN5
              </code>
              <button
                onClick={handleCopyCA}
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden group/btn"
              >
                <span className="relative z-10">Copy</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Troll Test Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-pink-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Troll Test</h2>
          <p className="text-xl text-muted-foreground mb-12">What's your troll level? Find out now!</p>
          <button
            onClick={() => setIsTrollTestOpen(true)}
            className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition transform hover:scale-125 active:scale-95 inline-block relative overflow-hidden group hover:animate-bounce-wild hover:rainbow-glow-animation"
          >
            <span className="relative z-10 group-hover:animate-glitch">Start Troll Test</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-spin-wild"></div>
          </button>
        </div>
      </section>

      {/* Troll Test Modal */}
      <TrollTest isOpen={isTrollTestOpen} onOpenChange={setIsTrollTestOpen} />

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-4 gradient-background bg-gradient-to-b from-cyan-900/20 via-purple-900/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Roadmap</h2>
            <p className="text-xl text-muted-foreground">The path to legendary trolling</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {roadmapItems.map((item) => (
              <div
                key={item.id}
                className="group relative animate-slide-up"
                style={{ animationDelay: `${roadmapItems.indexOf(item) * 0.1}s` }}
                onMouseEnter={() => setHoveredRoadmap(item.id)}
                onMouseLeave={() => setHoveredRoadmap(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative glass-effect backdrop-blur-xl p-8 h-full group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/30 group-hover:-translate-y-3 group-hover:bg-white/15">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-sm font-bold text-cyan-400 mb-2 group-hover:text-purple-400 transition-colors duration-300 group-hover:scale-110">{item.quarter}</div>
                      <h3 className="text-2xl font-bold group-hover:text-cyan-300 transition-colors duration-300">{item.title}</h3>
                    </div>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 group-hover:scale-125 group-hover:animate-bounce-slow ${
                        item.status === "IN PROGRESS"
                          ? "bg-green-500/30 text-green-300 group-hover:bg-green-500/50 group-hover:shadow-lg group-hover:shadow-green-500/30"
                          : "bg-muted/50 text-muted-foreground group-hover:bg-muted/80"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground group-hover:text-gray-200 transition-colors duration-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-4 bg-gradient-to-b from-purple-900/20 to-pink-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl text-muted-foreground">Be part of the troll army. Connect with thousands of trolls worldwide.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Community Stats */}
            <div className="space-y-8 animate-slide-in-from-left">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "50K+", label: "Community Members", gradient: "from-purple-400 to-pink-500", delay: "0" },
                  { value: "100K+", label: "Social Followers", gradient: "from-cyan-400 to-blue-500", delay: "0.1s" },
                  { value: "24/7", label: "Active Support", gradient: "from-green-400 to-emerald-500", delay: "0.2s" },
                  { value: "🚀", label: "Growing Daily", gradient: "from-orange-400 to-red-500", delay: "0.3s" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="glass-effect backdrop-blur-xl p-6 text-center hover:border-primary/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-3 hover:bg-white/15 animate-slide-up"
                    style={{ animationDelay: stat.delay }}
                  >
                    <p className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} text-transparent bg-clip-text group-hover:scale-125 group-hover:animate-bounce-slow transition-all duration-300 origin-center`}>{stat.value}</p>
                    <p className="text-muted-foreground mt-2 group-hover:text-gray-200 transition-colors duration-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Social Links */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Connect With Us</h3>
                <p className="text-muted-foreground">Follow, join, and spread the chaos across all platforms.</p>
              </div>

              <div className="space-y-3 animate-slide-in-from-right">
                {[
                  { icon: "𝕏", label: "Twitter/X", desc: "@trollface2token", color: "from-purple-500 to-pink-500", shadow: "purple-500/50", delay: "0" },
                  { icon: "💬", label: "Discord", desc: "50K+ Members", color: "from-blue-500 to-cyan-500", shadow: "blue-500/50", delay: "0.1s" },
                  { icon: "✈️", label: "Telegram", desc: "Active Announcements", color: "from-cyan-500 to-blue-500", shadow: "cyan-500/50", delay: "0.2s" },
                  { icon: "🤖", label: "Reddit", desc: "r/trollface2", color: "from-orange-500 to-red-500", shadow: "orange-500/50", delay: "0.3s" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={`https://${social.label.toLowerCase().split('/')[0]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass-effect backdrop-blur-xl hover:border-primary/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 hover:bg-white/15 animate-slide-up"
                    style={{ animationDelay: social.delay }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center text-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 group-hover:animate-bounce-slow`}>
                      {social.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-cyan-300 transition-colors duration-300">{social.label}</p>
                      <p className="text-sm text-muted-foreground group-hover:text-gray-300 transition-colors duration-300">{social.desc}</p>
                    </div>
                  </a>
                ))}
              </div>

              <button className="w-full px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden group">
                <span className="relative z-10">Join Our Discord</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Footer Top */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F3dffce91ce63492db4fc785a21f16f5e%2F4ad910ba81da4490994926ca0ee51368?format=webp&width=800"
                  alt="Trollface"
                  className="w-8 h-8"
                />
                <div className="font-bold text-lg bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                  $TROLLFACE2
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Community-driven chaos on Solana. Troll responsibly.</p>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-muted-foreground hover:text-primary transition">About</a></li>
                <li><a href="#tokenomics" className="text-muted-foreground hover:text-primary transition">Tokenomics</a></li>
                <li><a href="#howto" className="text-muted-foreground hover:text-primary transition">How to Buy</a></li>
                <li><a href="#roadmap" className="text-muted-foreground hover:text-primary transition">Roadmap</a></li>
              </ul>
            </div>

            {/* Community */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Community</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">Twitter</a></li>
                <li><a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">Discord</a></li>
                <li><a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">Telegram</a></li>
                <li><a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">Reddit</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition">Disclaimer</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                �� 2025 Trollface2. All rights reserved. Not financial advice.
              </p>
              <div className="flex gap-6">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                  <span className="text-lg">𝕏</span>
                </a>
                <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                  <span className="text-lg">💬</span>
                </a>
                <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                  <span className="text-lg">✈️</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
